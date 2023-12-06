<script setup lang="ts">
import type { AvueFormDefaults, AvueFormInstance } from '@smallwei/avue'
import type { FlowDefinition, FlowDeploy } from '@yusui/flow-pages'

import { computed, ref, watch } from 'vue'
import { useVModels } from '@vueuse/core'
import { ElMessage, ElMessageBox } from 'element-plus'
import {
  FlowDesignWrapper,
  FormDesignWrapper,
  TemplateSelect,
  asyncValidate,
  designFormOption,
  useConfigProvider,
  useFlowDefinitionApi,
  useFlowDeployApi,
  useTableTemplateApi,
} from '@yusui/flow-pages'

const props = withDefaults(
  defineProps<{ modelValue: FlowDefinition | FlowDeploy, visible: boolean }>(),
  { modelValue: () => ({}) },
)
const emit = defineEmits(['close'])
const { modelValue: formData, visible } = useVModels(props)

const { request } = useConfigProvider()

const {
  create: createDefinition,
  deploy,
  getDetail: getDefinitionDetail,
  update: updateDefinition,
} = useFlowDefinitionApi(request)
const { getDetail: getDeployDetail, update: updateDeploy } = useFlowDeployApi(request)

const steps = ['流程信息', '表单设计', '模型设计', '完成']

const formRef = ref<AvueFormInstance>()
const formDefaults = ref<AvueFormDefaults>()
const loading = ref(false)
watch(
  () => [visible.value, formRef.value],
  async () => {
    if (!visible.value || !formRef.value)
      return
    const { flowModuleId } = formData.value
    const { flowDeployId } = formData.value as FlowDeploy
    try {
      loading.value = true
      let res: any = {}
      if (flowDeployId)
        res = await getDeployDetail({ flowDeployId })
      else if (flowModuleId)
        res = await getDefinitionDetail({ flowModuleId })
      formData.value = res.data
      // 已发布流程不显示排序
      if (formDefaults.value?.sort)
        formDefaults.value.sort.display = !('flowDeployId' in formData.value)
      // 编辑模式下不允许修改流程标识
      if (formDefaults.value?.flowKey)
        formDefaults.value.flowKey.disabled = 'flowModuleId' in formData.value || 'flowDeployId' in formData.value
    }
    finally {
      loading.value = false
    }
  },
  { immediate: true },
)

const { data: tableTemplates } = useTableTemplateApi(request).useList()

const tableFields = computed(() => {
  return tableTemplates.value?.find(e => e.tableName === formData.value.formDataTable)?.tableFields as string
})

const activeStep = ref(0)
async function saveAndNext(step?: number) {
  if (activeStep.value === 0)
    await asyncValidate(formRef)

  loading.value = true
  const { flowModuleId } = formData.value
  const { flowDeployId } = formData.value as FlowDeploy
  try {
    if (flowDeployId) {
      await updateDeploy(formData.value as FlowDeploy)
    }
    else if (flowModuleId) {
      await updateDefinition(formData.value)
    }
    else {
      await createDefinition(formData.value).then((res) => {
        formData.value.flowModuleId = res.data.flowModuleId
      })
    }
    ElMessage.success('保存成功')
  }
  finally {
    loading.value = false
  }

  if (typeof step === 'number')
    activeStep.value = step
  else
    activeStep.value++
}

async function handleDeploy() {
  await ElMessageBox.confirm('发布新版本，是否确认？', '提示', { type: 'success' })
  loading.value = true
  deploy({ flowModuleId: formData.value.flowModuleId })
    .then(() => {
      ElMessage.success('发布成功')
    })
    .finally(() => {
      loading.value = false
    })
}

async function handleSync() {
  await ElMessageBox.confirm(
    '流程定义的数据(包括流程信息、表单设计、流程设计)将被修改为当前版本的数据，是否确认？',
    '提示',
    { type: 'warning' },
  )
  await updateDefinition(formData.value)
  ElMessage.success('同步成功')
}

function handleClose() {
  visible.value = false
  activeStep.value = 0
  formData.value = {}
  emit('close')
}
</script>

<template>
  <el-dialog v-model="visible" :show-close="false" fullscreen destroy-on-close @close="handleClose">
    <template #header>
      <el-row justify="center">
        <el-col :span="6">
          <div style="display: flex; align-items: center;">
            <span>流程设计</span>
            <span v-if="formData.flowName"> - {{ formData.flowName }}</span>
            <span v-if="formData.version"> - V{{ formData.version }}</span>
            <TemplateSelect v-model:form-data="formData" :active-step="activeStep" />
          </div>
        </el-col>
        <el-col :span="12">
          <el-steps :active="activeStep" simple process-status="finish" finish-status="success">
            <el-step
              v-for="(item, index) in steps" :key="index" :title="item" style="cursor:pointer"
              @click="saveAndNext(index)"
            />
          </el-steps>
        </el-col>
        <el-col :span="6" style="text-align: right">
          <el-button :disabled="activeStep === 0" :loading="loading" type="primary" @click="saveAndNext(activeStep - 1)">
            上一步
          </el-button>
          <el-button
            :disabled="activeStep === steps.length - 1" :loading="loading" type="primary"
            @click="saveAndNext(activeStep + 1)"
          >
            下一步
          </el-button>
          <el-button
            :disabled="activeStep === steps.length - 1" :loading="loading" type="success"
            @click="saveAndNext(activeStep)"
          >
            保存
          </el-button>
          <el-button @click="handleClose">
            关闭
          </el-button>
        </el-col>
      </el-row>
    </template>

    <div v-loading="loading" style="height: calc(100vh - 144px);">
      <avue-form
        v-if="activeStep === 0" ref="formRef" v-model="formData" v-model:defaults="formDefaults"
        :option="designFormOption" style="width: 50%; magin: 0 auto;"
      />
      <FormDesignWrapper v-if="activeStep === 1" v-model="formData.formOption" :fields="tableFields" />
      <FlowDesignWrapper v-if="activeStep === 2" v-model="formData.flowData" :flow-form-option="formData.formOption" />
      <el-result v-if="activeStep === 3" icon="success" title="流程设计完成">
        <template #extra>
          <el-button v-if="(formData as FlowDeploy).flowDeployId" type="primary" @click="handleSync">
            同步到流程定义
          </el-button>
          <el-button v-if="!(formData as FlowDeploy).flowDeployId" type="primary" @click="handleDeploy">
            发布
          </el-button>
          <el-button @click="handleClose">
            关闭
          </el-button>
        </template>
      </el-result>
    </div>
  </el-dialog>
</template>
