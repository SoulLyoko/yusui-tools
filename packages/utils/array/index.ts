/**
 * 数组转键值对对象
 * @param {Array} list 需要转换的数组
 * @param {String} key 数组里每一项对应的唯一值的键名
 */
export function arrayToMap<T extends Record<string | number, any>>(list: T[], key: string | number): Record<string | number, T> {
  return Object.fromEntries(list.map(e => [e[key], e]))
}
