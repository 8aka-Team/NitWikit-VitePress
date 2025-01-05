import { BasePlugin } from "../base";

export class NitWikitUrlTransformer extends BasePlugin {
  static #regExp: RegExp = /\[(?<name>.*)\]\((?<url>https:\/\/nitwikit\.yizhan\.wiki\/(.*))\)/g;
  static #url: string = "https://nitwikit.yizhan.wiki/";

  constructor() {
    super({
      name: "nitwikit-url-transformer",
      enforce: "pre",
    });
  }

  override transform(code: string, id: string): string | Promise<string> | void {
    if (id.endsWith(".md")) {
      return code.replace(NitWikitUrlTransformer.#regExp, (match, _name, url) => {
        return match.replace(url, url.replace(NitWikitUrlTransformer.#url, "/"));
      });
    }
  }
}
