import fs from "fs";
import { resolve } from "path";
import glob from "tiny-glob";
import frontMatter from "front-matter";
import { DefaultTheme } from "vitepress";
import { cloneDeep, isUndefined, omit, pull } from "lodash-es";
import markdownit from "markdown-it";
import { Node, parseFromString } from "dom-parser";

const md = markdownit({ html: true, linkify: true, typographer: true });

export async function getSidebar(dir: string, pagePath: string): Promise<DefaultTheme.SidebarItem[]> {
  const files = await glob(`**/*.md`, { cwd: dir });
  const filesAsTree = buildTree(files, dir);

  function flatmap(tree: TreeNode[]) {
    return tree
      .map((item) => {
        return {
          text: getTitle(dir, item),
          items: flatmap(item.children ?? []),
          link: pagePath + "/" + item.path.replaceAll("\\", "/").replace(/\.md$/, ""),
          meta: item,
          collapsed: true,
        };
      })
      .sort((a, b) => {
        return a.meta.attributes.sidebar_position > b.meta.attributes.sidebar_position ? 1 : -1;
      });
  }

  return flatmap(cloneDeep(filesAsTree));
}

function buildTree(paths: string[], cwd: string): TreeNode[] {
  const root: TreeNode = { name: "", path: "", children: [] };

  function addToTree(node: TreeNode, pathParts: string[], parentPath: string): void {
    if (pathParts.length === 0) {
      return;
    }

    const [currentPart, ...remainingParts] = pathParts;
    let childNode = node.children?.find((child) => child.name === currentPart);

    if (!childNode) {
      childNode = { name: currentPart, path: parentPath };
      node.children = node.children || [];
      node.children.push(childNode);
    }

    const attributes = getMarkdownAttributes(`${cwd}/${childNode.path}`);
    // same as parent page
    if (node.name === childNode?.name.replace(/\.md$/, "")) {
      node = Object.assign(node, {
        ...omit(childNode, "name"),
        attributes,
      });
      pull(node.children ?? [], childNode);
    }

    childNode.attributes = attributes;

    addToTree(childNode, remainingParts, parentPath);
  }

  for (const path of paths) {
    const parts = path.split(/[\/\\\\]/g);
    addToTree(root, parts, path);
  }

  return root.children as TreeNode[];
}

function getMarkdownAttributes(path) {
  const fm = frontMatter<NodeAttribute>(fs.readFileSync(path, { encoding: "utf-8" }));
  return fm.attributes;
}

function getTitle(dir: string, item: TreeNode) {
  let title = item?.attributes?.title ?? item.attributes?.sidebar_label;

  try {
    if (isUndefined(title)) {
      const path = resolve(dir, item.path);

      const content = fs.readFileSync(path, { encoding: "utf-8" });
      const html = md.render(content.replace(/^---([\s\S]*)---/, "")).replace(/\<(.*) \/\>/g, "");
      const dom = parseFromString(html);

      let headingNodes: Node[] = [];

      // trying to find heading 1 to 6
      for (let i = 1; i <= 6; i++) {
        if (headingNodes.length === 0) {
          const headingTags = dom.getElementsByTagName(`h${i}`);
          if (Array.isArray(headingTags) && headingTags.length !== 0) {
            headingNodes = headingTags;
            break;
          }
        }
      }

      title = headingNodes.reduce((acc, _) => acc + _.textContent, "");
    }
  } catch (error) {
    console.error(error);
  }

  return title ?? "Unknown";
}

interface TreeNode {
  name: string;
  path: string;
  children?: TreeNode[];
  attributes?: NodeAttribute;
}

interface NodeAttribute {
  title?: string;
  slug?: string;
  sidebar_label?: string;
  sidebar_position?: string;
}
