import type { AvueFormOption, AvueFormColumn } from "@smallwei/avue";
import type { Resource, ElementTreeNode } from "../types";

import json5 from "json5";
import { cloneDeep } from "lodash-unified";

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

export function checkRules(drag?: Resource, drop?: Resource) {
  const { parentWhiteList, parentBlackList } = drag?.rules ?? {};
  const { childWhiteList, childBlackList } = drop?.rules ?? {};
  const conditions = [];
  if (parentWhiteList && drop) {
    const flag = parentWhiteList.includes(drop?.name ?? "");
    conditions.push(flag);
  }
  if (parentBlackList && drop) {
    const flag = parentBlackList.includes(drop?.name ?? "");
    conditions.push(!flag);
  }
  if (childWhiteList) {
    const flag = childWhiteList.includes(drag?.name ?? "");
    conditions.push(flag);
  }
  if (childBlackList) {
    const flag = childBlackList.includes(drag?.name ?? "");
    conditions.push(!flag);
  }
  return conditions.every(flag => flag);
}

function formItemToElement(list: AvueFormColumn[]): ElementTreeNode[] {
  return list.map(item => {
    const temp = cloneDeep(item);
    let children: ElementTreeNode[] = [];
    if (temp.name === "form") {
      children = formItemToElement([...(temp.column ?? []), ...(temp.group ?? [])]);
    } else if (temp.name === "group") {
      children = formItemToElement(temp.column ?? []);
    } else if (["dynamic", "table"].includes(temp.name)) {
      children = formItemToElement(temp.children?.column ?? []);
    }
    return {
      name: item.name,
      id: item.prop,
      settingsValue: temp,
      children
    };
  });
}

export function adapterIn(option: AvueFormOption): ElementTreeNode[] {
  return formItemToElement([{ name: "form", ...option }]);
}

function elementToFormItem(list: ElementTreeNode[]): AvueFormColumn[] {
  return list.map(item => {
    const temp = cloneDeep(item);
    if (temp.name === "form") {
      const column = elementToFormItem(temp.children?.filter(e => e.name !== "group") ?? []);
      const group = elementToFormItem(temp.children?.filter(e => e.name === "group") ?? []);
      return { ...temp.settingsValue, column, group };
    }
    if (temp.name === "group") {
      const column = elementToFormItem(temp.children ?? []);
      return { ...temp.settingsValue, column };
    } else if (["dynamic", "table"].includes(temp.name ?? "")) {
      const tableColumn = elementToFormItem(temp.children ?? []);
      const tableChildren = { ...temp.settingsValue?.children, column: tableColumn };
      return { ...temp.settingsValue, children: tableChildren };
    }
    return { ...temp.settingsValue } as AvueFormColumn;
  });
}
export function adapterOut(tree: ElementTreeNode[]): AvueFormOption {
  return elementToFormItem(tree)[0] ?? {};
}
