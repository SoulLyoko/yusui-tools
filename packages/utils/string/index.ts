/**
 * 生成uuid
 * @param {number} length 长度
 * @param {number} radix 基数长度
 */
export function uuid(length = 16, radix?: number) {
  const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
  const randomNum = radix || chars.length
  const result = []
  for (let i = 0; i < length; i++)
    result[i] = chars.charAt(Math.random() * randomNum)

  return result.join('')
}
