import json5 from "json5";

interface StringifyOptions {
  replacer?: ((this: any, key: string, value: any) => any) | (string | number)[];
  space?: string | number;
  quote?: string;
  useJson5?: boolean;
}

function stringifyReplacer(key: string, value: any) {
  if (typeof value === "function") {
    return value.toString();
  } else if (value instanceof RegExp) {
    return value.toString();
  }
  return value;
}
export function jsonStringify(json: any, options?: StringifyOptions) {
  const { space = 2, quote = '"', replacer = stringifyReplacer, useJson5 = true } = options || {};
  if (useJson5) {
    return json5.stringify(json, { space, quote, replacer });
  } else {
    return JSON.stringify(json, replacer as any, space);
  }
}

function parseReviver(key: string, value: any) {
  if (typeof value === "string" && value.includes("=>")) {
    return eval(value);
  } else if (typeof value === "string" && value.startsWith("/") && value.endsWith("/")) {
    return new RegExp(value.slice(1, -1));
  }
  return value;
}
export function jsonParse(str: string) {
  return json5.parse(str, parseReviver);
}
