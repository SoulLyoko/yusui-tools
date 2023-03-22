<template>
  <el-dialog v-model="visible" width="60%" top="0" @close="handleClose">
    <template #header>
      <span>流程查看</span>
      <span v-if="formData?.flowName"> - {{ formData?.flowName }}</span>
      <span v-if="formData?.version"> - V{{ formData?.version }}</span>
    </template>

    <el-tabs v-model="activeTab" v-loading="loading">
      <el-tab-pane label="查看表单" name="form" style="height: 600px; overflow-y: auto">
        <FormDesign
          v-if="activeTab === 'form' && formData.formOption"
          ref="formRef"
          v-model="formData.formOption"
          view
        ></FormDesign>
      </el-tab-pane>
      <el-tab-pane label="查看流程" name="flow" style="height: 600px">
        <FlowDesign v-if="activeTab === 'flow'" v-model="formData.flowData" view></FlowDesign>
      </el-tab-pane>
    </el-tabs>
  </el-dialog>
</template>

<script setup lang="ts">
import type { FlowDefinition } from "../../api/flow-definition";
import type { FlowDeploy } from "../../api/flow-deploy";

import { ref, watch } from "vue";
import { useVModels } from "@vueuse/core";

import FormDesign from "../form-design/index.vue";
import FlowDesign from "../flow-design/index.vue";
import { getDetail as getDefinitionDetail } from "../../api/flow-definition";
import { getDetail as getDeployDetail } from "../../api/flow-deploy";

const props = defineProps<{
  modelValue: FlowDefinition | FlowDeploy;
  visible: boolean;
}>();
const vModels = useVModels(props);
const { visible, modelValue: formData } = vModels as Required<typeof vModels>;

const activeTab = ref("form");
const loading = ref(false);
watch(
  visible,
  async val => {
    if (!val) return;
    const { flowModuleId } = formData.value;
    const { flowDeployId } = formData.value as FlowDeploy;
    try {
      loading.value = true;
      let res: any = {};
      if (flowDeployId) {
        res = await getDeployDetail({ flowDeployId });
      } else if (flowModuleId) {
        res = await getDefinitionDetail({ flowModuleId });
      }
      formData.value = { ...res.data };
    } finally {
      loading.value = false;
    }
  },
  { immediate: true }
);

function handleClose() {
  formData.value = {};
  activeTab.value = "form";
}
</script>
