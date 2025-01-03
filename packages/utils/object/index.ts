/**
 * 过滤对象值和字段
 * @param {object} obj 被过滤对象
 * @param {Array} values 被过滤的值
 * @param {Array} fields 被过滤字段
 */
export function filterObj<R = any, T = any>(obj: T, values: any[] = [undefined, null], fields: string[] = []): R {
  if (typeof obj !== 'object' || obj === null)
    return obj as any
  const temp: any = {}
  for (const key in obj) {
    const valuesValid = values.every(val => obj[key] !== val)
    const fieldsValid = fields.every(str => !key.includes(str))
    if (valuesValid && fieldsValid)
      temp[key] = obj[key]
  }
  return temp as R
}

/**
 * 递归过滤对象值和字段
 * @param {object} obj 被过滤对象
 * @param {Array} values 被过滤的值
 * @param {Array} fields 被过滤字段
 */
export function filterObjDeep<R = any, T = any>(obj: T, values: any[] = [undefined, null], fields: string[] = []): R {
  if (typeof obj !== 'object')
    return obj as any
  if (Array.isArray(obj))
    return obj.map(e => filterObjDeep(e, values, fields)) as R
  const temp: any = {}
  for (const key in obj) {
    if (obj[key] && typeof obj[key] === 'object') {
      temp[key] = filterObjDeep(obj[key], values, fields)
    }
    else {
      const valuesValid = values.every(val => obj[key] !== val)
      const fieldsValid = fields.every(str => !key.includes(str))
      if (valuesValid && fieldsValid)
        temp[key] = obj[key]
    }
  }
  return temp as R
}
