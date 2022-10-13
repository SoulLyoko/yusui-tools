import type { CookieAttributes } from "js-cookie";

import jscookie from "js-cookie";

import { getDataType } from "../object";

export interface CacheItem<T = any> {
  key: string;
  value: T;
  timestamp: number;
  type: string;
}

let cachePrefix = "";
/** 设置缓存前缀 */
export function setCachePrefix(key: string) {
  cachePrefix = key;
}
/** 获取缓存前缀 */
export function getCachePrefix() {
  return cachePrefix;
}
/** 获取一个带有缓存前缀的key */
export function getCacheKey(key: string) {
  return getCachePrefix() ? `${getCachePrefix()}-${key}` : key;
}

/** 浏览器本地缓存封装 */
export const storage = {
  /** 设置数据 */
  set<T = any>(key: string, value: T) {
    if (value === undefined) return;
    const data: CacheItem = { key, value, timestamp: Date.now(), type: getDataType(value) };
    localStorage.setItem(getCacheKey(key), JSON.stringify(data));
    this.length++;
  },
  /** 获取数据 */
  get<T = any>(key: string): T | null {
    const dataJSON = localStorage.getItem(getCacheKey(key));
    if (!dataJSON) return null;
    const data: CacheItem<T> = JSON.parse(dataJSON);
    return data.value;
  },
  /** 删除数据 */
  remove(key: string) {
    if (!this.get(key)) return;
    localStorage.removeItem(getCacheKey(key));
    this.length--;
  },
  /** 清空数据 */
  clear() {
    localStorage.clear();
    this.length = 0;
  },
  // 兼容Storage
  setItem(key: string, value: any) {
    this.set(key, value);
  },
  getItem(key: string) {
    return this.get(key);
  },
  removeItem(key: string) {
    this.remove(key);
  },
  key(index: number) {
    return localStorage.key(index);
  },
  length: 0
};

let cookieOptions = {};
/** 设置默认的cookie配置 */
export function setCookieOptions(options: CookieAttributes = {}) {
  cookieOptions = options;
}
/** 获取默认的cookie配置 */
export function getCookieOptions() {
  return cookieOptions;
}
/** 浏览器cookie封装 */
export const cookie = {
  /** 设置数据 */
  set(key: string, value: any, options: CookieAttributes = {}) {
    if (value === undefined) return;
    const data: CacheItem = { key, value, timestamp: Date.now(), type: getDataType(value) };
    jscookie.set(getCacheKey(key), JSON.stringify(data), { ...getCookieOptions(), ...options });
    this.length++;
  },
  get<T = any>(key: string): T | null {
    const dataJSON = jscookie.get(getCacheKey(key));
    if (!dataJSON) return null;
    const data: CacheItem<T> = JSON.parse(dataJSON);
    return data.value;
  },
  remove(key: string) {
    if (!this.get(key)) return;
    jscookie.remove(getCacheKey(key));
    this.length--;
  },
  clear() {
    const cookies = jscookie.get();
    Object.keys(cookies).forEach(key => jscookie.remove(key));
    this.length = 0;
  },
  // 兼容Storage
  setItem(key: string, value: any) {
    this.set(key, value);
  },
  getItem(key: string) {
    return this.get(key);
  },
  removeItem(key: string) {
    this.remove(key);
  },
  key(key: number) {
    return key?.toString();
  },
  length: 0
};
