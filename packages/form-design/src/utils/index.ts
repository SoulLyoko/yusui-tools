import type { AvueFormOption } from "@smallwei/avue";
import type { ResourceElement } from "../types";

import json5 from "json5";

// 获取随机数字id
export function getRandomId(prefix?: string) {
  const id = Date.now() + Math.floor(Math.random() * 10000);
  return prefix ? `${prefix}_${id}` : id + "";
}

export function jsonStringify(json: any) {
  return json5.stringify(json, {
    space: 2,
    quote: '"',
    replacer: (key, value) => {
      if (typeof value === "function") {
        return value.toString();
      }
      return value;
    }
  });
}

export function jsonParse(str: string) {
  return json5.parse(str, (key, value) => {
    if (typeof value === "string" && value.includes("=>")) {
      return eval(value);
    }
    return value;
  });
}

export function transformResouceToFormOption(resource: ResourceElement[]) {
  const column = resource.filter(e => e.type !== "group");
  const group = resource.filter(e => e.type === "group");
  const option: any = {};
  column.length && (option.column = column);
  group.length && (option.group = group);
  return option;
}

export function transformFormOptionToResouce(option: AvueFormOption) {
  const { column = [], group = [] } = option;
  return [...column, ...group];
}
