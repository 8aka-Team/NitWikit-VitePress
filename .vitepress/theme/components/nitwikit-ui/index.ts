import { App } from "vue";

import { Tabs, TabItem } from "./packages/tabs";
import { DocCardList } from "./packages/doc-card-list";

export default {
  install: async function (app: App) {
    app.component("Tabs", Tabs);
    app.component("TabItem", TabItem);
    app.component("DocCardList", DocCardList);
  },
};
