import type { Emitter } from "./types";

import { mittAsync } from "@yusui/utils";

export function useHooks<T, P>() {
  /** emitter */
  const emitter = mittAsync() as Emitter<T, P>;
  /** 获取列表数据前 beforeGetList((params)=>{})  */
  const beforeGetList = (cb: (params: P) => Promise<any> | any | void) => {
    emitter.on("beforeGetList", async (...arg) => await cb?.(...arg));
  };
  /** 获取列表数据后 afterGetList((res)=>{})  */
  const afterGetList = (cb: (res: any) => Promise<any> | any | void) => {
    emitter.on("afterGetList", async (...arg) => await cb?.(...arg));
  };
  /** 删除数据前 beforeDel((row)=>{})  */
  const beforeDel = (cb: (row: T) => Promise<any> | any | void) => {
    emitter.on("beforeDel", async (...arg) => await cb?.(...arg));
  };
  /** 删除数据后 afterDel((res)=>{})  */
  const afterDel = (cb: (res: any) => Promise<any> | any | void) => {
    emitter.on("afterDel", async (...arg) => await cb?.(...arg));
  };
  /** 获取表单数据前 beforeGetInfo((urlFormData)=>{})  */
  const beforeGetInfo = (cb: (urlFormData: any) => Promise<any> | any | void) => {
    emitter.on("beforeGetInfo", async (...arg) => await cb?.(...arg));
  };
  /** 获取表单数据后 afterGetInfo((res)=>{})  */
  const afterGetInfo = (cb: (res: any) => Promise<any> | any | void) => {
    emitter.on("afterGetInfo", async (...arg) => await cb?.(...arg));
  };
  /** 提交数据前，可对form内的数据进行修改 beforeSubmit((form)=>{})  */
  const beforeSubmit = (cb: (form: T) => Promise<any> | any | void) => {
    emitter.on("beforeSubmit", async (...arg) => await cb?.(...arg));
  };
  /** 提交数据后 afterSubmit((res)=>{})  */
  const afterSubmit = (cb: (res: any) => Promise<any> | any | void) => {
    emitter.on("afterSubmit", async (...arg) => await cb?.(...arg));
  };

  return {
    emitter,
    beforeGetList,
    afterGetList,
    beforeDel,
    afterDel,
    beforeGetInfo,
    afterGetInfo,
    beforeSubmit,
    afterSubmit
  };
}
