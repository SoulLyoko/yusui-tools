import type { CookieAttributes } from "js-cookie";

import jscookie from "js-cookie";

import { getDataType } from "./object";

export interface CacheItem<T = any> {
  key: string;
  value: T;
  timestamp: number;
  type: string;
}

export let cachePrefix = "";
export function setCachePrefix(key: string) {
  cachePrefix = key;
}
export function getCacheKey(key: string) {
  return cachePrefix ? `${cachePrefix}-${key}` : key;
}

/**
 * 浏览器本地缓存封装
 * @method set(key,value) 设置数据
 * @method get(key) 获取数据
 * @method remove(key) 删除数据
 * @method clear() 清空数据
 */
export const storage = {
  set(key: string, value: any) {
    if (value === undefined) return;
    const data: CacheItem = { key, value, timestamp: Date.now(), type: getDataType(value) };
    localStorage.setItem(getCacheKey(key), JSON.stringify(data));
    this.length++;
  },
  get<T = any>(key: string): T | null {
    const dataJSON = localStorage.getItem(getCacheKey(key));
    if (!dataJSON) return null;
    const data: CacheItem<T> = JSON.parse(dataJSON);
    return data.value;
  },
  remove(key: string) {
    if (!this.get(key)) return;
    localStorage.removeItem(getCacheKey(key));
    this.length--;
  },
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
  key: localStorage.key,
  length: 0
};

/**
 * 浏览器cookie封装
 * @method set(key,value,options) 设置数据
 * @method get(key) 获取数据
 * @method remove(key) 删除数据
 */
export const cookie = {
  set(key: string, value: any, options?: CookieAttributes) {
    if (value === undefined) return;
    const data: CacheItem = { key, value, timestamp: Date.now(), type: getDataType(value) };
    jscookie.set(getCacheKey(key), JSON.stringify(data), { expires: 1, ...(options ?? {}) });
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
  key: (key: number) => key.toString(),
  length: 0
};
