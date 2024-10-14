/**
 * 判断是否移动端
 * @example
 * ```ts
 * isMobile() // true
 * ```
 */
export function isMobile() {
  return /(Android|webOS|iPhone|iPad|iPod|ios|Mobile|BlackBerry|IEMobile|Opera Mini|Symbian|Windows Phone)/i.test(navigator.userAgent)
}

/**
 * 判断是否JSON字符串
 * @example
 * ```ts
 * isJSON('{"a":1}') // true
 * ```
 */
export function isJSON(str: string) {
  if (!/^\{|\[.*\}|\]$/.test(str))
    return false

  try {
    JSON.parse(str)
    return true
  }
  catch {
    return false
  }
}

/**
 * 判断是否函数字符串
 * @example
 * ```ts
 * function fn() {}
 * const arrowFn = () => {}
 * isFunctionString(fn.toString()) // true
 * isFunctionString(arrowFn.toString()) // true
 * ```
 */
export function isFunctionString(str: string) {
  if (!/=>/.test(str) && !/\(.*\)\s*\{.*\}$/s.test(str))
    return false

  try {
    // eslint-disable-next-line no-new-func
    const fn = new Function(`return ${str}`)()
    return typeof fn === 'function'
  }
  catch {
    return false
  }
}
