/**
 * 过滤对象值和字段
 * @param {Object} obj 被过滤对象
 * @param {Array} values 被过滤的值
 * @param {Array} fields 被过滤字段
 */
export function filterObj<R = any, T = any>(obj: T, values: any[] = [undefined, null], fields: string[] = []): R {
  const temp: any = {};
  for (const key in obj) {
    const valuesValid = values.every(val => obj[key] !== val);
    const fieldsValid = fields.every(str => !key.includes(str));
    if (valuesValid && fieldsValid) {
      temp[key] = obj[key];
    }
  }
  return temp as R;
}

/** 获取数据类型 */
export function getDataType(data: any) {
  return Object.prototype.toString.call(data).match(/\[object (.*)\]/)?.[1] ?? "";
}
