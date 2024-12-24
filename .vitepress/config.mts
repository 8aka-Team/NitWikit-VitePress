import { getSidebar } from "./utils/vitepress";
import themeConfig from "./theme.config";
import { resolve } from "path";
import { withMermaid } from "vitepress-plugin-mermaid";

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
        name: "nitwikit-assets-transformer",
        enforce: "pre",
        transform(code, id) {
          if (id.endsWith(".md")) {
            const reg = /!\[(?<name>.*)\]\((?<url>_images(.*))\)/g;
            // TODO: Not working...
            const list = code.match(reg)?.map((item) => reg.exec(item)?.groups);
            console.info(code.match(reg));

            code.match(reg)?.forEach((item) => {
              console.info(item, reg.exec(item));
            });
            return code.replace(reg, (_match, name, url) => {
              return `<nw-image src="${url}" alt="${name}" list="$2{list}" />`;
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
  rewrites: {
    "nitwikit/docs/(.*)": "(.*)",
    "nitwikit/docs-java/(.*)": "Java/(.*)",
    "nitwikit/docs-bedrock/(.*)": "Bedrock/(.*)",
    "nitwikit/:pkg/(.*)": ":pkg/(.*)",
  },
  // transformHtml: (code) => {
  //   return code.replace(/import ([\s\S]+) from &#39;(@theme\/[\s\S]+)&#39;(;)/g, "");
  // },
});
