import { App } from "vue";

import { Tabs, TabItem } from "./packages/tabs";
import { DocCardList } from "./packages/doc-card-list";
import { NwImage } from "./packages/image";
import { NwImageViewer } from "./packages/image-viewer";

export default {
  install: async function (app: App) {
    app.component("Tabs", Tabs);
    app.component("TabItem", TabItem);
    app.component("DocCardList", DocCardList);
    app.component("NwImage", NwImage);
    app.component("NwImageViewer", NwImageViewer);
  },
};
