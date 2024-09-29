/**
 * 判断是否是移动端
 * @example
 * ```ts
 * isMobile() // true
 * ```
 */
export function isMobile() {
  return /(Android|webOS|iPhone|iPad|iPod|ios|Mobile|BlackBerry|IEMobile|Opera Mini|Symbian|Windows Phone)/i.test(navigator.userAgent)
}

/**
 * 判断是否是JSON格式的字符串
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
