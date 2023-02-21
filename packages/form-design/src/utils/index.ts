import type { AvueFormOption } from "@smallwei/avue";
import type { ResourceElement } from "../types";

// 获取随机数字id
export function getRandomId(prefix?: string) {
  const id = Date.now() + Math.floor(Math.random() * 10000);
  return prefix ? `${prefix}_${id}` : id + "";
}

export function formOptionStringify(option: AvueFormOption) {
  return JSON.stringify(
    option,
    (key, value) => {
      if (typeof value === "function") {
        return value.toString();
      }
      return value;
    },
    2
  );
}

export function formOptionParse(val: string) {
  return JSON.parse(val, (key, value) => {
    if (typeof value === "string" && value.includes("=>")) {
      return eval(value);
    }
    return value;
  });
}

export function transformResouceToFormOption(resource: ResourceElement[]) {
  const group = resource.filter(e => e.type === "group");
  const column = resource.filter(e => e.type !== "group");
  const option = {
    column,
    group
  };
  return option;
}

export function transformFormOptionToResouce(option: AvueFormOption) {
  const { column = [], group = [] } = option;
  return [...column, ...group];
}
