import type { Resource } from "../types";

export function checkRules(drag?: Resource, drop?: Resource) {
  const { parentWhiteList, parentBlackList } = drag?.rules ?? {};
  const { childWhiteList, childBlackList } = drop?.rules ?? {};
  const conditions = [];
  if (parentWhiteList && drop) {
    const flag = parentWhiteList.includes(drop?.name ?? "");
    conditions.push(flag);
  }
  if (parentBlackList && drop) {
    const flag = parentBlackList.includes(drop?.name ?? "");
    conditions.push(!flag);
  }
  if (childWhiteList) {
    const flag = childWhiteList.includes(drag?.name ?? "");
    conditions.push(flag);
  }
  if (childBlackList) {
    const flag = childBlackList.includes(drag?.name ?? "");
    conditions.push(!flag);
  }
  return conditions.every(flag => flag);
}
