import { BasePlugin } from "../base";

export class NitWikitAssertsTransformer extends BasePlugin {
  static #regExp: RegExp = /!\[([^\]]*)\]\(([^)]*)\)/g;

  constructor() {
    super({
      name: "nitwikit-assets-transformer",
      enforce: "pre",
    });
  }

  override transform(code: string, id: string): string | Promise<string> | void {
    if (id.endsWith(".md")) {
      if (code.match(NitWikitAssertsTransformer.#regExp)) {
        return code + `\n<nw-image-viewer />`;
      }
    }
  }
}
