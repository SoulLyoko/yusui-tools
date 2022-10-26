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
    uni.setStorageSync(getCacheKey(key), value);
    this.length++;
  },
  get<T = any>(key: string): T | null {
    const value = uni.getStorageSync(getCacheKey(key));
    return value;
  },
  remove(key: string) {
    if (!this.get(key)) return;
    uni.removeStorageSync(getCacheKey(key));
    this.length--;
  },
  clear() {
    uni.clearStorageSync();
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
  key(i: number) {
    return i.toString();
  },
  length: 0
};
