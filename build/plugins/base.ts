import { Plugin } from "vite";

export abstract class BasePlugin {
  #name: Plugin["name"];
  #enforce: Plugin["enforce"];

  constructor(options: { name: string; enforce: "pre" | "post" }) {
    this.#name = options.name;
    this.#enforce = options.enforce;
  }

  transform(code: string, id: string): string | Promise<string> | void {
    return code;
  }

  build(): Plugin {
    return {
      name: this.#name,
      enforce: this.#enforce,
      transform: this.transform,
    };
  }
}
