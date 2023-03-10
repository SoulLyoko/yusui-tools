export * from "./adapter";
export * from "./parser";
export * from "./rules";

// 获取随机数字id
export function getRandomId(prefix?: string) {
  const id = Date.now() + Math.floor(Math.random() * 10000);
  return prefix ? `${prefix}_${id}` : id + "";
}
