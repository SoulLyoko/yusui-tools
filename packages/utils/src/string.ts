import type { Data } from "@yusui/types";

/**
 * 生成uuid
 * @param {Number} length 长度
 * @param {Number} radix 基数长度
 * @returns {String} 生成的uuid
 */
export function uuid(length = 16, radix?: number) {
  const chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  const randomNum = radix || chars.length;
  const result = [];
  for (let i = 0; i < length; i++) {
    result[i] = chars.charAt(Math.random() * randomNum);
  }
  return result.join("");
}

/**
 * url序列化
 * @param {Object} data 序列化的对象
 * @returns {String} 序列化后的字符串
 */
export function serialize(data: Data) {
  const res: string[] = [];
  Object.keys(data).forEach(key => {
    res.push(`${key}=${data[key]}`);
  });
  return res.join("&");
}

/**
 * url反序列化
 * @param {String} url 反序列化的url
 * @returns {Object} 反序列化后的对象
 */
export function deserialize(url: string) {
  const string = url.split("&");
  const res: Data = {};
  for (let i = 0; i < string.length; i++) {
    const str = string[i].split("=");
    if (str[0] != "") {
      res[str[0]] = str[1];
    }
  }
  return res;
}

/**
 * 字符串转十六进制
 */
export function stringToHex(str: string) {
  if (!str || typeof str !== "string") return "";
  // let result = "0x";
  let result = "";
  for (let i = 0; i < str.length; i++) {
    result += str.charCodeAt(i).toString(16);
  }
  return result;
}

/**
 * 十六进制转字符串
 */
export function hexToString(hex: string) {
  if (hex.length % 2 !== 0 && !/^[A-F0-9]+$/i.test(hex)) return hex;
  let result = "";
  for (let i = 0; i < hex.length; i += 2) {
    result += String.fromCharCode(parseInt(hex.substring(i, 2), 16));
  }
  return result;
}

/**
 * 十六进制转中文
 */
export function hexToZh(hex: string) {
  if (hex.length % 2 !== 0 && !/^[A-F0-9]+$/i.test(hex)) return hex;
  let result = "";
  for (let i = 0; i < hex.length; i += 2) {
    result += "%" + hex.charAt(i) + hex.charAt(i + 1);
  }
  return decodeURI(result);
}
