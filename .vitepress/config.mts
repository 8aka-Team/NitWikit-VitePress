import { getSidebar } from "./utils/vitepress";
import themeConfig from "./theme.config";
import { resolve } from "path";
import { withMermaid } from "vitepress-plugin-mermaid";

// https://vitepress.dev/reference/site-config
export default withMermaid({
  title: "NitWikit",
  description: "一群笨蛋们写的 Minecraft 开服教程",
  ignoreDeadLinks: true,
  lastUpdated: true,
  srcDir: "docs",
  srcExclude: ["**/README.md"],
  vite: {
    publicDir: "../public",
    assetsInclude: ["**/*.JPG", "**/*.PNG"],
    plugins: [
      {
        name: "nitwikit-transformer",
        enforce: "pre",
        transform(code, id, options) {
          if (id.endsWith(".md")) {
            return code
              .replace(/import ([\s\S]+) from ['"](@theme\/[\s\S]+)['"];/g, "")
              .replace(/import ([\s\S]+) from &#39;(@theme\/[\s\S]+)&#39;;/g, "")
              .replace(/values={\[([\s\S]*)\]}/g, "");
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
      include: ['@braintree/sanitize-url', 'dayjs', 'debug', 'cytoscape-cose-bilkent', 'cytoscape']
    }
  },
  lang: "zh-CN",
  themeConfig: {
    nav: [
      { text: "通用", link: "/nitwikit/docs/intro.md" },
      { text: "Java", link: "/nitwikit/docs-java/intro.md" },
      { text: "Bedrock", link: "/nitwikit/docs-bedrock/intro.md" },
    ],
    sidebar: {
      "/nitwikit/docs": await getSidebar(resolve(import.meta.dirname, "../docs/nitwikit/docs"), "nitwikit/docs"),
      "/nitwikit/docs-java/": await getSidebar(resolve(import.meta.dirname, "../docs/nitwikit/docs-java"), "nitwikit/docs-java"),
      "/nitwikit/docs-bedrock/": await getSidebar(resolve(import.meta.dirname, "../docs/nitwikit/docs-bedrock"), "nitwikit/docs-bedrock"),
    },
    ...themeConfig,
  },
  // transformHtml: (code) => {
  //   return code.replace(/import ([\s\S]+) from &#39;(@theme\/[\s\S]+)&#39;(;)/g, "");
  // },
});
