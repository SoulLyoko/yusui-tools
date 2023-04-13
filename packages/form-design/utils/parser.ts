import json5 from "json5";

interface StringifyOptions {
  replacer?: ((this: any, key: string, value: any) => any) | (string | number)[];
  space?: string | number;
  quote?: string;
  /** 是否使用json5进行转换 */
  useJson5?: boolean;
}

export function jsonStringify(json: any, options?: StringifyOptions) {
  const stringifyReplacer = (key: string, value: any) => {
    if (typeof value === "function") {
      return value.toString();
    } else if (value instanceof RegExp) {
      return value.toString();
    }
    return value;
  };
  const { space = 2, quote = '"', replacer = stringifyReplacer, useJson5 = true } = options || {};
  if (useJson5) {
    return json5.stringify(json, { space, quote, replacer });
  } else {
    return JSON.stringify(json, replacer as any, space);
  }
}

export function jsonParse(str: string, reviver?: (key: string, value: any) => any) {
  const parseReviver = (key: string, value: any) => {
    if (typeof value === "string" && value.includes("=>")) {
      try {
        return eval(value);
      } catch {
        return value;
      }
    } else if (typeof value === "string" && value.startsWith("/") && value.endsWith("/")) {
      return new RegExp(value.slice(1, -1));
    }
    return value;
  };
  return json5.parse(str, reviver || parseReviver);
}
