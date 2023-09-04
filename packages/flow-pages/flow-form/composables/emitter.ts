import type { EmitterAsync } from '@yusui/utils'
import type { FlowButton, FlowDetail } from '@yusui/flow-pages'

import { mittAsync } from '@yusui/utils'

export type Emitter = EmitterAsync<{
  afterGetDetail: FlowDetail
  beforeClick: FlowButton
  beforeSubmit: FlowButton
  afterSubmit: FlowButton
}>

export type MaybePromise<T> = Promise<T> | T

export function useEmitter() {
  /** emitter */
  const emitter = mittAsync() as Emitter

  /** 获取流程详情后 onAfterGetDetail((flowDetail)=>{})  */
  const onAfterGetDetail = (cb: (data: FlowDetail) => MaybePromise<any>) => {
    emitter.on('afterGetDetail', async (...arg) => await cb?.(...arg))
  }
  /** 按钮点击时 onBeforeClick((res)=>{})  */
  const onBeforeClick = (cb: (btn: FlowButton) => MaybePromise<any>) => {
    emitter.on('beforeClick', async (...arg) => await cb?.(...arg))
  }
  /** 流程提交前 onBeforeSubmit((res)=>{})  */
  const onBeforeSubmit = (cb: (btn: FlowButton) => MaybePromise<any>) => {
    emitter.on('beforeSubmit', async (...arg) => await cb?.(...arg))
  }
  /** 流程提交成功后 onAfterSubmit((res)=>{})  */
  const onAfterSubmit = (cb: (btn: FlowButton) => MaybePromise<any>) => {
    emitter.on('afterSubmit', async (...arg) => await cb?.(...arg))
  }

  return {
    emitter,
    onAfterGetDetail,
    onBeforeClick,
    onBeforeSubmit,
    onAfterSubmit,
  }
}
