import { getSidebar } from "./utils/vitepress";
import themeConfig from "./theme.config";
import { resolve } from "path";
import { withMermaid } from "vitepress-plugin-mermaid";
import { NitWikitAssertsTransformer, NitWikitBilibiliTransformer, NitWikitContentTransformer, NitWikitUrlTransformer } from "./build/plugins";

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
      new NitWikitContentTransformer().build(),
      new NitWikitAssertsTransformer().build(),
      new NitWikitUrlTransformer().build(),
      new NitWikitBilibiliTransformer().build(),
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
      "/Java/": await getSidebar(resolve(import.meta.dirname, "../docs/nitwikit/docs-java"), "/Java"),
      "/Bedrock/": await getSidebar(resolve(import.meta.dirname, "../docs/nitwikit/docs-bedrock"), "/Bedrock"),
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
});
