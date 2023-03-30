<template>
  <el-drawer v-model="visible" :title="processDetail?.flowName" destroy-on-close :before-close="clear" size="60%">
    <el-skeleton v-if="loading" />
    <el-container v-else>
      <el-header height="40px" style="padding: 0">
        <el-button type="primary" @click="onBtnClick">发送</el-button>
      </el-header>
      <el-main style="padding: 0">
        <el-tabs v-model="activeTab">
          <slot v-if="processDetail?.formPath"></slot>
          <el-tab-pane v-else label="审批信息" name="form">
            <InternalForm ref="formRef" v-model="formData" :flowDetail="flowDetail"></InternalForm>
          </el-tab-pane>
        </el-tabs>
      </el-main>
    </el-container>
  </el-drawer>
</template>

<script setup lang="ts">
import type { AvueFormOption } from "@smallwei/avue";
import type { FlowDetail, ProcessDetail } from "../api/flow-task";

import { ref, watchEffect } from "vue";
import { useVModels } from "@vueuse/core";

import { getFlowDetail, startFlow, commitTask } from "../api/flow-task";
import InternalForm from "./components/internal-form.vue";

const props = defineProps<{
  flowDeployId?: string;
  visible?: boolean;
  flowDetail?: FlowDetail;
  processDetail?: ProcessDetail;
  modelValue?: object;
  formOption?: AvueFormOption;
  loading?: boolean;
  activeTab?: string;
}>();
const vModels = useVModels(props, undefined, { passive: true, deep: true });
const {
  visible,
  flowDetail,
  processDetail,
  modelValue: formData,
  loading,
  activeTab
} = vModels as Required<typeof vModels>;

function clear(done?: () => void) {
  activeTab.value = "form";
  flowDetail.value = {};
  formData.value = {};
  done?.();
}

watchEffect(() => {
  const { flowDeployId } = props;
  if (!flowDeployId) return;
  if (!visible.value) return;
  clear();
  loading.value = true;
  getFlowDetail({ flowDeployId })
    .then(res => {
      console.log("🚀 ~ file: index.vue:23 ~ getFlowDetail ~ res:", res);
      flowDetail.value = res.data;
      processDetail.value = res.data.process;
      formData.value = res.data.formData || {};
    })
    .finally(() => {
      loading.value = false;
    });
});

const formRef = ref<InstanceType<typeof InternalForm>>();
async function onBtnClick() {
  await formRef.value?.validate();
  // startFlow({ variables: formData.value });
}
</script>

<style lang="scss" scoped></style>
