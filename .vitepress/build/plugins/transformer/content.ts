import { BasePlugin } from "../base";

export class NitWikitContentTransformer extends BasePlugin {
  static #regExp: RegExp = /^(---([\s\S]*)---)?([\r|\n]*)(?<heading>[#]{2,6} )(?<title>[\s\S].*)/;
  static #imgSrcRegExp: RegExp = /\<img(.*)src="(?<src>_images\/(.*))"/;
  static #styleAttrRegExp: RegExp = /style={{(?<val>.*)}}/;

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

      const imgResult = code.match(new RegExp(NitWikitContentTransformer.#imgSrcRegExp, "g"));
      if (imgResult !== null) {
        imgResult.forEach((img) => {
          const tmp = img.match(NitWikitContentTransformer.#imgSrcRegExp);
          if (tmp) {
            newCode = newCode.replace(tmp.groups!.src, `./${tmp.groups!.src}`);
          }
        });
      }

      /**
       * 兼容不合规的style标签
       * <img src="https://example.com/bar.png" width="45%" style={{marginRight: '20px'}} />
       */
      const styleAttrimgResult = code.match(new RegExp(NitWikitContentTransformer.#styleAttrRegExp, "g"));
      if (styleAttrimgResult !== null) {
        styleAttrimgResult.forEach((img) => {
          const tmp = img.match(NitWikitContentTransformer.#styleAttrRegExp);
          if (tmp) {
            const finalVal = tmp.groups!.val.replaceAll(",", ";").replace(/[\'|\"]/g, "");
            newCode = newCode.replace(`{{${tmp.groups!.val}}}`, `"${finalVal}"`);
          }
        });
      }

      return newCode
        .replace(/import ([\s\S]+) from ['"]((@theme|@site)\/[\s\S]+)['"];/g, "")
        .replace(/import ([\s\S]+) from &#39;((@theme|@site)\/[\s\S]+)&#39;;/g, "")
        .replace(/values={\[([\s\S]*)\]}/g, "")
        .replace(/sponsors={(?<Name>\[([\s\S]*)\])}/g, `:sponsors="$1"`);
    }
  }
}
