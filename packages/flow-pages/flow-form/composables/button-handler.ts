import type { ButtonHandler, FlowFormState } from '../types'

import { useFlowTaskApi } from '../../api/flow-task'

export function useButtonHandler(state: FlowFormState): ButtonHandler {
  const { commitTask, revokeTask, saveDraft, startTask, terminateTask, transferTask, withdrawTask } = useFlowTaskApi()
  const { flowDetail, formVariables, approvalFormData, debug } = state
  const { flowDeployId } = flowDetail.value.process ?? {}
  const { taskId, flowInstanceId } = flowDetail.value.task ?? {}
  const data = {
    flowDeployId,
    taskId,
    flowInstanceId,
    variables: formVariables.value,
    debug: debug.value,
    ...approvalFormData.value,
  }
  return {
    // 保存
    flow_draft() {
      if (taskId && flowInstanceId)
        return saveDraft(data)
    },
    // 发送
    flow_pass() {
      if (taskId && flowInstanceId)
        return commitTask(data)
      else
        return startTask(data)
    },
    // 撤销
    flow_revoke() {
      if (taskId && flowInstanceId)
        return revokeTask(data)
    },
    // 撤回到发起
    flow_withdraw() {
      if (taskId && flowInstanceId)
        return withdrawTask(data)
    },
    // // 退回
    // flow_reject() {
    //   if (!taskId || !flowInstanceId) return;
    //   return handleProcess({
    //     taskId,
    //     flowInstanceId,
    //     pass: "false",
    //     variables: { ...formData.value, save_draft: false }
    //   });
    // },
    // 终止
    flow_terminate() {
      if (taskId && flowInstanceId)
        return terminateTask(data)
    },
    // 转办
    flow_transfer() {
      if (taskId && flowInstanceId)
        return transferTask(data)
    },
  }
}
