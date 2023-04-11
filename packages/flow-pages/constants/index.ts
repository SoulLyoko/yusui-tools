import { enumToDic } from "@yusui/utils";

/** 是否 */
export enum Whether {
  "否" = 0,
  "是" = 1
}
export const whetherDic = enumToDic(Whether);
