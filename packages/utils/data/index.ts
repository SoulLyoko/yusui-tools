import type { Data } from '@yusui/types'

import { parse, stringify } from 'flatted'
import { isNil } from 'lodash-es'

import { isJSON } from '../assert'

const encode = encodeURIComponent
/**
 * Decode text using `decodeURIComponent`. Returns the original text if it fails.
 * @param text - string to decode
 * @returns decoded string
 */
function decode(text: string | number): string {
  try {
    return decodeURIComponent(`${text}`)
  }
  catch {
    return `${text}`
  }
}

/** 对数据进行编码，一般用于url传参，与decodeData配合使用 */
export function encodeData(data: any) {
  return encode(JSON.stringify(data))
}
/**
 * 对数据进行解码
 * @example
 * ```ts
 * const data = { name: 'yusui' }
 * const encodedData = encodeData(data) // {"name":"yusui"}
 * const decodedData = decodeData(encodedData) // { name: 'yusui' }
 * ```
 */
export function decodeData(data: string) {
  return JSON.parse(decode(data))
}

/**
 * 在循环引用的情况下安全地深拷贝，与JSON.parse(JSON.stringify())一样，会丢失函数等类型的数据
 * @param {object} data 被拷贝对象
 */
export function jsonClone<T>(data: T): T {
  return parse(stringify(data))
}

/** 获取数据类型 */
export function getDataType(data: any) {
  return Object.prototype.toString.call(data).match(/\[object (.*)\]/)?.[1] ?? ''
}

/**
 * data序列化，用JSON.stringify转换对象和数组
 * @param {object} data 序列化的对象
 * @returns 序列化后的字符串
 */
export function serialize<T extends Data>(query: T) {
  const res: string[] = []
  for (let [key, value] of Object.entries(query)) {
    if (!isNil(value)) {
      // 转换对象和数组
      if (typeof value === 'object')
        value = JSON.stringify(value)
      res.push(`${encode(key)}=${encode(value)}`)
    }
  }
  return res.join('&')
}

/**
 * url反序列化，用JSON.parse解析对象和数组
 * @param {string} url 反序列化的url
 * @returns 反序列化后的对象
 */
export function deserialize<T = Data>(search: string): T {
  if (search?.startsWith('?'))
    search = search.slice(1)
  if (!search)
    return {} as T
  const res: Data = {}
  const searchParams = search.split('&')
  for (const item of searchParams) {
    let [key, value] = item.split('=')
    key = decode(key)
    value = decode(value)
    // 转换对象和数组
    if (isJSON(value))
      res[key] = JSON.parse(value)
    else
      res[key] = value
  }
  return res as T
}
