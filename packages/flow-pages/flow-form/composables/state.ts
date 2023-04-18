import type { Props, Emit } from "../types";
import type { FlowButtonKey } from "../../api/flow-button";
import type { InjectionKey } from "vue";

import { ref, watchEffect, computed, provide, inject } from "vue";
import { useVModels } from "@vueuse/core";

import { getFlowDetail } from "../../api/flow-task";

export const injectionKey: InjectionKey<ReturnType<typeof useProvideState>> = Symbol("flowFormState");

export function useProvideState(props: Props, emit: Emit) {
  const vModels = useVModels(props, undefined, { passive: true, deep: true });
  const { flowDetail, modelValue: formData, formLoading } = vModels;

  // 获取流程详情
  watchEffect(() => {
    const { flowKey, taskId, instanceId } = props;
    if (!flowKey && !taskId && !instanceId) return;
    formLoading.value = true;
    getFlowDetail({ flowKey, taskId, flowInstanceId: instanceId })
      .then(res => {
        flowDetail.value = res.data;
        formData.value = res.data.formData || {};
      })
      .finally(() => {
        formLoading.value = false;
      });
  });

  // 显示权限
  const permission = computed(() => ({ fileTab: true, trackTab: true, ...props.permission }));
  const showFileTab = computed(
    () =>
      permission.value.fileTab === true &&
      flowDetail.value?.properties?.formProperty?.find(e => e.prop === "fileTab")?.display
  );
  const showTrackTab = computed(
    () =>
      permission.value.trackTab === true &&
      flowDetail.value?.properties?.formProperty?.find(e => e.prop === "trackTab")?.display
  );

  // 按钮
  const buttonList = computed(() => {
    // const { userInfo } = useUserStore();
    const userInfo = { userId: "1" };
    // const { processIsFinished, startUser, assignee, flowInstanceId } = flowDetail.value.task || {};
    const { assignee, flowInstanceId } = flowDetail.value.task || {};
    const buttonCondition: Record<string, boolean> = {
      true: true,
      false: false,
      // startUser: startUser == userInfo.userId,
      assignee: assignee == userInfo.userId,
      notstarted: !flowInstanceId,
      started: !!flowInstanceId
      // unfinished: processIsFinished === "unfinished",
      // finished: processIsFinished === "finished"
    };
    const filterBtn = flowDetail.value?.properties?.button?.filter(item => {
      return item.display?.split(",")?.every(condition => buttonCondition[condition]);
    });
    return filterBtn ?? [];
  });
  const activeButtonKey = ref<FlowButtonKey>();
  const activeButton = computed(() => buttonList.value.find(e => e.buttonKey === activeButtonKey.value));

  // 审批表单
  const approvalFormData = ref({});
  const approvalVisible = ref(false);
  const formVariables = computed(() => {
    return Object.entries(formData.value || {})
      .filter(([key]) => !key.startsWith("$"))
      .map(([key, value]) => ({ key, value }));
  });

  const state = {
    ...vModels,
    formVariables,
    approvalFormData,
    approvalVisible,
    showFileTab,
    showTrackTab,
    permission,
    activeButtonKey,
    activeButton,
    buttonList,
    emit
  };

  provide(injectionKey, state);

  return state;
}

export function useInjectState() {
  return inject(injectionKey)!;
}
