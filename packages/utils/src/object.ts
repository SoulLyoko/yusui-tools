import type { Data } from "@yusui/types";

/**
 * 过滤对象值和字段
 * @param {object} obj 被过滤对象
 * @param {any[]} values 被过滤的值
 * @param {string[]} fields 被过滤字段
 */
export function filterObj(obj: Data, values: any[] = [undefined, null], fields: string[] = []) {
  const temp: Data = {};
  for (const key in obj) {
    const valuesValid = values.every(val => obj[key] !== val);
    const fieldsValid = fields.every(str => !key.includes(str));
    if (valuesValid && fieldsValid) {
      temp[key] = obj[key];
    }
  }
  return temp;
}

//获取数据类型
export function getDataType(data: any) {
  return Object.prototype.toString.call(data).match(/\[object (.*)\]/)?.[1] ?? "";
}
