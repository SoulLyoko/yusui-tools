import type { FormType } from '@smallwei/avue'
import type { Emitter } from './types'

import { mittAsync } from '@yusui/utils'

export function useHooks<T, P>() {
  /** emitter */
  const emitter = mittAsync() as Emitter<T, P>
  /** 获取数据前 beforeGetList((params)=>{})  */
  const beforeGetList = (cb: (params: P) => Promise<any> | any | void) => {
    emitter.on('beforeGetList', async (...arg) => await cb?.(...arg))
  }
  /** 获取数据后 afterGetList((res)=>{})  */
  const afterGetList = (cb: (res: any) => Promise<any> | any | void) => {
    emitter.on('afterGetList', async (...arg) => await cb?.(...arg))
  }
  /** 新增数据前，可对row内的数据进行修改 beforeSave((row)=>{})  */
  const beforeSave = (cb: (row: T) => Promise<any> | any | void) => {
    emitter.on('beforeSave', async (...arg) => await cb?.(...arg))
  }
  /** 新增数据后 afterSave((res)=>{})  */
  const afterSave = (cb: (res: any) => Promise<any> | any | void) => {
    emitter.on('afterSave', async (...arg) => await cb?.(...arg))
  }
  /** 更新数据前，可对row内的数据进行修改 beforeUpdate((row)=>{})  */
  const beforeUpdate = (cb: (row: T) => Promise<any> | any | void) => {
    emitter.on('beforeUpdate', async (...arg) => await cb?.(...arg))
  }
  /** 更新数据后 afterUpdate((res)=>{})  */
  const afterUpdate = (cb: (res: any) => Promise<any> | any | void) => {
    emitter.on('afterUpdate', async (...arg) => await cb?.(...arg))
  }
  /** 新增和更新数据前，可对row内的数据进行修改 beforeSubmit((row)=>{})  */
  const beforeSubmit = (cb: (row: T) => Promise<any> | any | void) => {
    emitter.on('beforeSubmit', async (...arg) => await cb?.(...arg))
  }
  /** 新增和更新数据后 afterSubmit((res)=>{})  */
  const afterSubmit = (cb: (res: any) => Promise<any> | any | void) => {
    emitter.on('afterSubmit', async (...arg) => await cb?.(...arg))
  }
  /** 删除数据前 beforeDel((row)=>{})  */
  const beforeDel = (cb: (row: T) => Promise<any> | any | void) => {
    emitter.on('beforeDel', async (...arg) => await cb?.(...arg))
  }
  /** 删除数据后 afterDel((res)=>{})  */
  const afterDel = (cb: (res: any) => Promise<any> | any | void) => {
    emitter.on('afterDel', async (...arg) => await cb?.(...arg))
  }
  /** 批量删除前 beforeBatchDel((dataSelections)=>{})  */
  const beforeBatchDel = (cb: (dataSelections: T[]) => Promise<any> | any | void) => {
    emitter.on('beforeBatchDel', async (...arg) => await cb?.(...arg))
  }
  /** 批量删除后 afterBatchDel((res)=>{})  */
  const afterBatchDel = (cb: (res: any) => Promise<any> | any | void) => {
    emitter.on('afterBatchDel', async (...arg) => await cb?.(...arg))
  }
  /** 搜索前 beforeSearch((searchForm)=>{})  */
  const beforeSearch = (cb: (searchForm: P) => Promise<any> | any | void) => {
    emitter.on('beforeSearch', async (...arg) => await cb?.(...arg))
  }
  /** 搜索后 afterSearch((searchForm)=>{})  */
  const afterSearch = (cb: (searchForm: P) => Promise<any> | any | void) => {
    emitter.on('afterSearch', async (...arg) => await cb?.(...arg))
  }
  /** 搜索重置前 beforeSearchReset((searchForm)=>{})  */
  const beforeSearchReset = (cb: (searchForm: P) => Promise<any> | any | void) => {
    emitter.on('beforeSearchReset', async (...arg) => await cb?.(...arg))
  }
  /** 搜索重置后 afterSearchReset((searchForm)=>{})  */
  const afterSearchReset = (cb: (searchForm: P) => Promise<any> | any | void) => {
    emitter.on('afterSearchReset', async (...arg) => await cb?.(...arg))
  }
  /** 打开弹窗前 beforeOpen((type)=>{}) */
  const beforeOpen = (cb: (type: FormType) => Promise<any> | any | void) => {
    emitter.on('beforeOpen', async (...arg) => await cb?.(...arg))
  }
  /** 打开弹窗后 afterOpen((type)=>{}) */
  const afterOpen = (cb: (type: FormType) => Promise<any> | any | void) => {
    emitter.on('afterOpen', async (...arg) => await cb?.(...arg))
  }
  /** 关闭弹窗前 beforeClose((type)=>{}) */
  const beforeClose = (cb: (type: FormType) => Promise<any> | any | void) => {
    emitter.on('beforeClose', async (...arg) => await cb?.(...arg))
  }
  /** 关闭弹窗后 afterClose((type)=>{}) */
  const afterClose = (cb: (type: FormType) => Promise<any> | any | void) => {
    emitter.on('afterClose', async (...arg) => await cb?.(...arg))
  }
  /** 获取详情前 beforeGetInfo((row)=>{}) */
  const beforeGetInfo = (cb: (row: T) => Promise<any> | any | void) => {
    emitter.on('beforeGetInfo', async (...arg) => await cb?.(...arg))
  }
  /** 获取详情后 afterGetInfo((res)=>{}) */
  const afterGetInfo = (cb: (res: any) => Promise<any> | any | void) => {
    emitter.on('afterGetInfo', async (...arg) => await cb?.(...arg))
  }

  return {
    emitter,
    beforeGetList,
    afterGetList,
    beforeSave,
    afterSave,
    beforeUpdate,
    afterUpdate,
    beforeSubmit,
    afterSubmit,
    beforeDel,
    afterDel,
    beforeBatchDel,
    afterBatchDel,
    beforeSearch,
    afterSearch,
    beforeSearchReset,
    afterSearchReset,
    beforeOpen,
    afterOpen,
    beforeClose,
    afterClose,
    beforeGetInfo,
    afterGetInfo,
  }
}
