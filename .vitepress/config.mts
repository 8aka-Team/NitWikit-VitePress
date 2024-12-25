import { getSidebar } from "./utils/vitepress";
import themeConfig from "./theme.config";
import { resolve } from "path";
import { withMermaid } from "vitepress-plugin-mermaid";

const markdownRegExp = {
  image: /!\[(?<name>.*)\]\((?<url>(.*))\)/g,
  url: /\[(?<name>.*)\]\((?<url>(.*))\)/g,
  nitwikitUrl: /\[(?<name>.*)\]\((?<url>https:\/\/nitwikit\.yizhan\.wiki\/(.*))\)/g,
  bilitv: /\[(?<name>.*)\]\((?<url>https:\/\/www.bilibili.com\/video\/(?<id>(.*))\/(.*))\)/g,
};

// https://vitepress.dev/reference/site-config
export default withMermaid({
  title: "NitWikit",
  description: "一群笨蛋们写的 Minecraft 开服教程",
  lang: "zh-CN",
  ignoreDeadLinks: true,
  lastUpdated: true,
  srcDir: "docs",
  srcExclude: ["**/README.md"],
  cleanUrls: true,
  vite: {
    publicDir: "../public",
    assetsInclude: ["**/*.JPG", "**/*.PNG"],
    plugins: [
      {
        name: "nitwikit-transformer",
        enforce: "pre",
        transform(code, id) {
          if (id.endsWith(".md")) {
            return code
              .replace(/import ([\s\S]+) from ['"](@theme\/[\s\S]+)['"];/g, "")
              .replace(/import ([\s\S]+) from &#39;(@theme\/[\s\S]+)&#39;;/g, "")
              .replace(/values={\[([\s\S]*)\]}/g, "");
          }
        },
      },
      {
        name: "nitwikit-url-transformer",
        enforce: "pre",
        transform(code, id) {
          if (id.endsWith(".md")) {
            return code.replace(markdownRegExp.nitwikitUrl, (match, _name, url) => {
              return match.replace(url, url.replace("https://nitwikit.yizhan.wiki/", "/"));
            });
          }
        },
      },
      {
        name: "nitwikit-assets-transformer",
        enforce: "pre",
        transform(code, id) {
          if (id.endsWith(".md")) {
            if (code.match(markdownRegExp.image)) {
              return code + `\n<nw-image-viewer />`;
            }
          }
        },
      },
      {
        name: "nitwikit-bilitv-transformer",
        enforce: "pre",
        transform(code, id) {
          if (id.endsWith(".md")) {
            return code.replace(markdownRegExp.bilitv, (_match, name, url, bvId) => {
              return `<bili-player title="${name}" src="${url}" bv-id="${bvId}" />`;
            });
          }
        },
      },
    ],
    css: {
      preprocessorOptions: {
        scss: {
          api: "modern",
        },
      },
    },
    optimizeDeps: {
      include: ["@braintree/sanitize-url", "dayjs", "debug", "cytoscape-cose-bilkent", "cytoscape"],
    },
  },
  themeConfig: {
    nav: [
      { text: "通用", link: "/intro.md" },
      { text: "Java", link: "/Java/intro.md" },
      { text: "Bedrock", link: "/Bedrock/intro.md" },
    ],
    sidebar: {
      "/": await getSidebar(resolve(import.meta.dirname, "../docs/nitwikit/docs"), ""),
      "/Java/": await getSidebar(resolve(import.meta.dirname, "../docs/nitwikit/docs-java"), "Java"),
      "/Bedrock/": await getSidebar(resolve(import.meta.dirname, "../docs/nitwikit/docs-bedrock"), "Bedrock"),
    },
    ...themeConfig,
  },
  markdown: {
    languageAlias: {
      gradle: "groovy",
      maven: "xml",
    },
  },
  rewrites: {
    "nitwikit/docs/(.*)": "(.*)",
    "nitwikit/docs-java/(.*)": "Java/(.*)",
    "nitwikit/docs-bedrock/(.*)": "Bedrock/(.*)",
    "nitwikit/:pkg/(.*)": ":pkg/(.*)",
  },
  transformHtml: (code) => {
    return code + "\n<nw-image-viewer />";
  },
});
