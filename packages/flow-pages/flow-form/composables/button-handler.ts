import type { ButtonHandler, FlowFormState } from "../types";

import { startTask, commitTask } from "../../api/flow-task";

export function useButtonHandler(state: FlowFormState): ButtonHandler {
  const { flowDetail, formVariables, approvalFormData, debug } = state;
  const { taskId, flowInstanceId, flowDeployId } = flowDetail.value.task ?? {};
  return {
    // 保存
    // flow_draft() {
    //   if (taskId && flowInstanceId) {
    //     return handleProcess({
    //       taskId,
    //       flowInstanceId,
    //       pass: "true",
    //       variables: { ...formData.value, save_draft: true }
    //     });
    //   } else {
    //     return startProcess({ ...formData.value, save_draft: true, procDefKey: flowKey! });
    //   }
    // },
    // 发送
    flow_pass() {
      const data = {
        flowDeployId,
        taskId,
        flowInstanceId,
        variables: formVariables.value,
        debug: debug.value,
        ...approvalFormData.value
      };
      if (taskId && flowInstanceId) {
        return commitTask(data);
      } else {
        return startTask(data);
      }
    }
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
    // // 终止
    // flow_terminate() {
    //   if (!flowInstanceId) return;
    //   return terminateProcess({
    //     flowInstanceId,
    //     comment: formData.value.comment
    //   });
    // },
    // // 撤回
    // flow_withdraw() {
    //   if (!taskId) return;
    //   return withdrawProcess({ taskId, comment: formData.value.comment });
    // }
  };
}
