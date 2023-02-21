<template>
  <el-dialog v-model="visible" :show-close="false" fullscreen @close="handleClose">
    <template #header>
      <el-row align="center" justify="center">
        <el-col :span="4"> 流程设计 - {{ formData?.flowName }} </el-col>
        <el-col :span="16">
          <el-steps :active="activeStep" simple>
            <el-step title="流程信息" />
            <el-step title="表单设计" />
            <el-step title="模型设计" />
            <el-step title="完成" />
          </el-steps>
        </el-col>
        <el-col :span="4" style="text-align: right">
          <el-button :disabled="activeStep === 0" :loading="loading" type="primary" @click="activeStep--">
            上一步
          </el-button>
          <el-button :disabled="activeStep === 3" type="primary" :loading="loading" @click="saveAndNext">
            下一步
          </el-button>
          <el-button @click="handleClose">取消</el-button>
        </el-col>
      </el-row>
    </template>
    <div style="height: calc(100vh - 144px)">
      <avue-form
        v-if="activeStep === 0"
        ref="formRef"
        v-model="formData"
        :loading="loading"
        :option="formOption"
        style="width: 50%; magin: 0 auto"
      ></avue-form>
      <FormDesign v-if="activeStep === 1" v-model="formData.formOption"></FormDesign>
      <FlowDesign v-if="activeStep === 2" v-model="formData.flowData"></FlowDesign>
      <el-result v-if="activeStep === 3" icon="success" title="流程设计完成">
        <template #extra>
          <el-button type="primary" @click="handleClose">退出</el-button>
        </template>
      </el-result>
    </div>
  </el-dialog>
</template>

<script setup lang="ts">
import type { AvueFormInstance } from "@smallwei/avue";
import type { FlowDefinition } from "../../api/flow-definition";
import type { FlowDeploy } from "../../api/flow-deploy";

import { ref, watch } from "vue";
import { useVModels } from "@vueuse/core";

import FormDesign from "../form-design/index.vue";
import FlowDesign from "../flow-design/index.vue";
import { formOption } from "./option";
import {
  create as createDefinition,
  update as updateDefinition,
  getDetail as getDefinitionDetail
} from "../../api/flow-definition";
import { update as updateDeploy, getDetail as getDeployDetail } from "../../api/flow-deploy";
import { asyncValidate } from "../../utils";

const props = defineProps<{
  modelValue: FlowDefinition | FlowDeploy;
  visible: boolean;
}>();
const emit = defineEmits(["close"]);
const vModels = useVModels(props);
const { visible, modelValue: formData } = vModels as Required<typeof vModels>;

watch(
  visible,
  async val => {
    if (!val) return;
    const { flowModuleId } = formData.value;
    const { flowDeployId } = formData.value as FlowDeploy;
    try {
      let res: any = {};
      if (flowDeployId) {
        res = await getDeployDetail({ flowDeployId });
      } else if (flowModuleId) {
        res = await getDefinitionDetail({ flowModuleId });
      }
      formData.value = res.data;
    } finally {
      loading.value = false;
    }
  },
  { immediate: true }
);

const loading = ref(false);
const activeStep = ref(0);
function handleClose() {
  visible.value = false;
  activeStep.value = 0;
  formData.value = {};
  emit("close");
}

const formRef = ref<AvueFormInstance>();
async function saveAndNext() {
  if (activeStep.value === 0) {
    await asyncValidate(formRef);
  }
  loading.value = true;
  const { flowModuleId } = formData.value;
  const { flowDeployId } = formData.value as FlowDeploy;
  try {
    if (flowDeployId) {
      await updateDeploy(formData.value as FlowDeploy);
    } else if (flowModuleId) {
      await updateDefinition(formData.value);
    } else {
      await createDefinition(formData.value).then(res => {
        formData.value.flowModuleId = res.data.flowModuleId;
      });
    }
  } finally {
    loading.value = false;
  }
  activeStep.value++;
}
</script>

<style lang="scss" scoped></style>
