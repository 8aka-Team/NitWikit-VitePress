import { BasePlugin } from "../base";

export class NitWikitBilibiliTransformer extends BasePlugin {
  static #regExp: RegExp = /\[(?<name>.*)\]\((?<url>https:\/\/www.bilibili.com\/video\/(?<id>(.*))\/(.*))\)/g;

  constructor() {
    super({
      name: "nitwikit-bilibili-transformer",
      enforce: "pre",
    });
  }

  override transform(code: string, id: string): string | Promise<string> | void {
    if (id.endsWith(".md")) {
      return code.replace(NitWikitBilibiliTransformer.#regExp, (_match, name, url, bvId) => {
        return `<bili-player title="${name}" src="${url}" bv-id="${bvId}" />`;
      });
    }
  }
}
