import type { Data } from '@yusui/types'

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

/**
 * data序列化
 * @param {object} data 序列化的对象
 * @returns 序列化后的字符串
 */
export function serialize<T extends Data>(data: T) {
  const res: string[] = []
  Object.keys(data).forEach((key) => {
    res.push(`${key}=${data[key]}`)
  })
  return res.join('&')
}

/**
 * url反序列化
 * @param {string} url 反序列化的url
 * @returns 反序列化后的对象
 */
export function deserialize<T = Data>(url: string): T {
  const string = url.split('&')
  const res: Data = {}
  for (let i = 0; i < string.length; i++) {
    const str = string[i].split('=')
    if (str[0] !== '')
      res[str[0]] = str[1]
  }
  return res as T
}
