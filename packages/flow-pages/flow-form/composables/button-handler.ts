import type { ButtonHandler, FlowFormState } from '../types'

import { computed } from 'vue'

import { useFlowTaskApi } from '../../api/flow-task'

export function useButtonHandler(state: FlowFormState): ButtonHandler {
  const { commitTask, revokeTask, saveDraft, startTask, terminateTask, transferTask, withdrawTask } = useFlowTaskApi()
  const data = computed(() => {
    const { flowDetail, formVariables, approvalFormData, debug, fileIds } = state
    const { flowDeployId } = flowDetail.value.process ?? {}
    const { taskId, flowInstanceId } = flowDetail.value.task ?? {}
    return {
      flowDeployId,
      taskId,
      flowInstanceId,
      variables: formVariables.value,
      debug: debug.value,
      fileIds: fileIds.value,
      ...approvalFormData.value,
    }
  })
  const isInstance = () => data.value.taskId && data.value.flowInstanceId
  return {
    // 保存
    flow_draft() {
      if (isInstance())
        return saveDraft(data.value)
    },
    // 发送
    flow_pass() {
      if (isInstance())
        return commitTask(data.value)
      else
        return startTask(data.value)
    },
    // 撤销
    flow_revoke() {
      if (isInstance())
        return revokeTask(data.value)
    },
    // 撤回到发起
    flow_withdraw() {
      if (isInstance())
        return withdrawTask(data.value)
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
      if (isInstance())
        return terminateTask(data.value)
    },
    // 转办
    flow_transfer() {
      if (isInstance())
        return transferTask(data.value)
    },
  }
}
