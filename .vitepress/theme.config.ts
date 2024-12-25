import { DefaultTheme, PageData } from "vitepress";

export default {
  logo: "/book.png",

  editLink: {
    pattern: (payload: PageData) => `https://github.com/8aka-Team/NitWikit/edit/main/${payload.filePath.replace(/^nitwikit\//, "")}`,
    text: "为此页提供修改建议",
  },
  darkModeSwitchLabel: "外观",
  lightModeSwitchTitle: "切换至日间主题",

  outline: {
    label: "本页目录",
    level: [2, 3],
  },

  docFooter: {
    prev: "上一页",
    next: "下一页",
  },

  lastUpdated: {
    text: "最后更新于",
    formatOptions: {
      dateStyle: "medium",
    },
  },

  search: {
    provider: "algolia",
    options: {
      appId: "HU0NAD6KUV",
      apiKey: "f695ad151b4703073987143a5c6a288f",
      indexName: "nitwikit",
      locales: {
        zh: {
          placeholder: "搜索文档",
          translations: {
            button: {
              buttonText: "搜索文档",
              buttonAriaLabel: "搜索文档",
            },
            modal: {
              searchBox: {
                resetButtonTitle: "清除查询条件",
                resetButtonAriaLabel: "清除查询条件",
                cancelButtonText: "取消",
                cancelButtonAriaLabel: "取消",
              },
              startScreen: {
                recentSearchesTitle: "搜索历史",
                noRecentSearchesText: "没有搜索历史",
                saveRecentSearchButtonTitle: "保存至搜索历史",
                removeRecentSearchButtonTitle: "从搜索历史中移除",
                favoriteSearchesTitle: "收藏",
                removeFavoriteSearchButtonTitle: "从收藏中移除",
              },
              errorScreen: {
                titleText: "无法获取结果",
                helpText: "你可能需要检查你的网络连接",
              },
              footer: {
                selectText: "选择",
                navigateText: "切换",
                closeText: "关闭",
                searchByText: "搜索提供者",
              },
              noResultsScreen: {
                noResultsText: "无法找到相关结果",
                suggestedQueryText: "你可以尝试查询",
                reportMissingResultsText: "你认为该查询应该有结果？",
                reportMissingResultsLinkText: "点击反馈",
              },
            },
          },
        },
      },
    },
  },
} as DefaultTheme.Config;
