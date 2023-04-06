<template>
  <el-drawer v-model="visible" :title="flowDetail?.process?.flowName" destroy-on-close :before-close="clear" size="60%">
    <el-skeleton v-if="loading" />
    <el-container v-else>
      <el-header height="40px" style="padding: 0">
        <el-button type="primary" @click="onBtnClick">发送</el-button>
      </el-header>
      <el-main style="padding: 0">
        <el-tabs v-model="activeTab">
          <slot v-if="flowDetail?.process?.formPath"></slot>
          <el-tab-pane v-else label="审批信息" name="form">
            <InternalForm ref="formRef" v-model="formData" :flowDetail="flowDetail"></InternalForm>
          </el-tab-pane>
        </el-tabs>
      </el-main>
    </el-container>

    <ApprovalForm
      v-model="approvalFormData"
      v-model:visible="approvalVisible"
      :variables="variables"
      :flowDetail="flowDetail!"
      @confirm="onSubmit"
    ></ApprovalForm>
  </el-drawer>
</template>

<script setup lang="ts">
import type { AvueFormOption } from "@smallwei/avue";
import type { FlowDetail } from "../api/flow-task";

import { ref, watchEffect, computed } from "vue";
import { useVModels } from "@vueuse/core";
import { ElMessage } from "element-plus";

import { getFlowDetail, startFlow, commitTask } from "../api/flow-task";
import InternalForm from "./components/internal-form.vue";
import ApprovalForm from "./components/approval-form.vue";

const props = defineProps<{
  flowKey?: string;
  taskId?: string;
  instanceId?: string;
  visible?: boolean;
  flowDetail?: FlowDetail;
  modelValue?: any;
  formOption?: AvueFormOption;
  loading?: boolean;
  activeTab?: string;
}>();
const vModels = useVModels(props, undefined, { passive: true, deep: true });
const { visible, flowDetail, modelValue: formData, loading, activeTab } = vModels as Required<typeof vModels>;

function clear(done?: () => void) {
  activeTab.value = "form";
  flowDetail.value = {};
  formData.value = {};
  done?.();
}

watchEffect(() => {
  const { flowKey, taskId, instanceId } = props;
  if (!flowKey && !taskId && !instanceId) return;
  if (!visible.value) return;
  clear();
  loading.value = true;
  getFlowDetail({ flowKey, taskId, flowInstanceId: instanceId })
    .then(res => {
      flowDetail.value = res.data;
      formData.value = res.data.formData || {};
    })
    .finally(() => {
      loading.value = false;
    });
});

const approvalVisible = ref(false);

const variables = computed(() => {
  return Object.entries(formData.value || {})
    .filter(([key]) => !key.startsWith("$"))
    .map(([key, value]) => ({ key, value }));
});

const formRef = ref<InstanceType<typeof InternalForm>>();
async function onBtnClick() {
  await formRef.value?.validate();
  approvalVisible.value = true;
}

const approvalFormData = ref({});
async function onSubmit() {
  const { flowDeployId } = flowDetail.value?.process ?? {};
  const { taskId, flowInstanceId } = flowDetail.value?.task ?? {};
  const data = {
    flowDeployId,
    taskId,
    flowInstanceId,
    variables: variables.value,
    ...approvalFormData.value
  };
  await (taskId && flowInstanceId ? commitTask(data) : startFlow(data));
  ElMessage.success("操作成功");
  approvalVisible.value = false;
  visible.value = false;
}
</script>

<style lang="scss" scoped></style>
