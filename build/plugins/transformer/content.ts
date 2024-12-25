import { BasePlugin } from "../base";

export class NitWikitContentTransformer extends BasePlugin {
  static #regExp: RegExp = /^(---([\s\S]*)---)?([\r|\n]*)(?<heading>[#]{2,6} )(?<title>[\s\S].*)/;

  constructor() {
    super({
      name: "nitwikit-content-transformer",
      enforce: "pre",
    });
  }

  override transform(code: string, id: string): string | Promise<string> | void {
    if (id.endsWith(".md")) {
      const result = code.match(NitWikitContentTransformer.#regExp);
      let newCode = code;
      if (result !== null) {
        newCode = code.replace(`${result.groups?.heading}${result.groups?.title}`, `# ${result.groups?.title}`);
      }

      return newCode
        .replace(/import ([\s\S]+) from ['"](@theme\/[\s\S]+)['"];/g, "")
        .replace(/import ([\s\S]+) from &#39;(@theme\/[\s\S]+)&#39;;/g, "")
        .replace(/values={\[([\s\S]*)\]}/g, "");
    }
  }
}
