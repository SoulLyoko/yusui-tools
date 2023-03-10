import json5 from "json5";

function replacer(key: string, value: any) {
  if (typeof value === "function") {
    return value.toString();
  } else if (value instanceof RegExp) {
    return value.toString();
  }
  return value;
}
export function jsonStringify(json: any) {
  return JSON.stringify(json, replacer, 2);
  // return json5.stringify(json, {
  //   space: 2,
  //   quote: '"',
  //   replacer
  // });
}

function reviver(key: string, value: any) {
  if (typeof value === "string" && value.includes("=>")) {
    return eval(value);
  } else if (typeof value === "string" && value.startsWith("/") && value.endsWith("/")) {
    return new RegExp(value.slice(1, -1));
  }
  return value;
}
export function jsonParse(str: string) {
  return JSON.parse(str, reviver);
}
