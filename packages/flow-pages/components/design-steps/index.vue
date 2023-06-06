<script setup lang="ts">
import type { AvueFormInstance } from '@smallwei/avue'
import type { FlowDefinition, FlowDeploy } from '../../api'

import { computed, ref, watch } from 'vue'
import { useVModels } from '@vueuse/core'
import { ElMessage, ElMessageBox } from 'element-plus'

import {
  useFlowDefinitionApi,
  useFlowDeployApi,
  useFlowTemplateApi,
  useFormTemplateApi,
  useTableTemplateApi,
} from '../../api'
import { formOption } from './option'
import { asyncValidate } from '../../utils'
import FormDesignWrapper from '../form-design-wrapper/index.vue'
import FlowDesignWrapper from '../flow-design-wrapper/index.vue'

const props = defineProps<{
  modelValue: FlowDefinition | FlowDeploy
  visible: boolean
}>()
const emit = defineEmits(['close'])
const vModels = useVModels(props)
const { visible, modelValue: formData } = vModels as Required<typeof vModels>

const {
  create: createDefinition,
  deploy,
  getDetail: getDefinitionDetail,
  update: updateDefinition,
} = useFlowDefinitionApi()
const { getDetail: getDeployDetail, update: updateDeploy } = useFlowDeployApi()

const steps = ['流程信息', '表单设计', '模型设计', '完成']

const loading = ref(false)
watch(
  visible,
  async (val) => {
    if (!val)
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
    }
    finally {
      loading.value = false
    }
  },
  { immediate: true },
)

const { data: formTemplates } = useFormTemplateApi().useList()
const { data: flowTemplates } = useFlowTemplateApi().useList()
const { data: tableTemplates } = useTableTemplateApi().useList()

const tableFields = computed(() => {
  return tableTemplates.value?.find(e => e.tableName === formData.value.formDataTable)?.tableFields as string
})

const activeStep = ref(0)
const templatesDic = computed(() => {
  if (activeStep.value === 1)
    return formTemplates.value?.map(e => ({ label: e.formName, value: e.formOption })) ?? []
  else if (activeStep.value === 2)
    return flowTemplates.value?.map(e => ({ label: e.flowName, value: e.flowData })) ?? []
  return []
})

function selectTemplate(item: (typeof templatesDic.value)[number]) {
  if (activeStep.value === 1)
    formData.value.formOption = item.value
  else if (activeStep.value === 2)
    formData.value.flowData = item.value
}

const formRef = ref<AvueFormInstance>()
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
  await ElMessageBox.confirm('发布新版本，是否确认？', '提示')
  loading.value = true
  deploy({ flowModuleId: formData.value.flowModuleId })
    .then(() => {
      ElMessage.success('发布成功')
    })
    .finally(() => {
      loading.value = false
    })
}

function handleClose() {
  visible.value = false
  activeStep.value = 0
  formData.value = {}
  emit('close')
}
</script>

<template>
  <el-dialog v-model="visible" fullscreen :show-close="false" destroy-on-close @close="handleClose">
    <template #header>
      <el-row justify="center">
        <el-col :span="5">
          <div>
            <span>流程设计</span>
            <span v-if="formData?.flowName"> - {{ formData?.flowName }}</span>
            <span v-if="formData?.version"> - V{{ formData?.version }}</span>
          </div>
          <el-dropdown v-if="templatesDic.length">
            <el-link icon="el-icon-arrow-down" :underline="false">
              选择模板
            </el-link>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item v-for="item in templatesDic" :key="item.label" @click="selectTemplate(item)">
                  {{ item.label }}
                </el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </el-col>
        <el-col :span="14">
          <el-steps :active="activeStep" simple process-status="finish" finish-status="success">
            <el-step v-for="(item, index) in steps" :key="index" :title="item" @click="saveAndNext(index)" />
          </el-steps>
        </el-col>
        <el-col :span="5" style="text-align: right">
          <el-button :disabled="activeStep === 0" :loading="loading" type="primary" @click="activeStep--">
            上一步
          </el-button>
          <el-button :disabled="activeStep === steps.length - 1" type="primary" :loading="loading" @click="saveAndNext()">
            下一步
          </el-button>
          <el-button @click="handleClose">
            关闭
          </el-button>
        </el-col>
      </el-row>
    </template>

    <div v-loading="loading" style="height: calc(100vh - 144px)">
      <avue-form
        v-if="activeStep === 0"
        ref="formRef"
        v-model="formData"
        :option="formOption"
        style="width: 50%; magin: 0 auto"
      />
      <FormDesignWrapper
        v-if="activeStep === 1"
        v-model="formData.formOption"
        :fields="tableFields"
      />
      <FlowDesignWrapper
        v-if="activeStep === 2"
        v-model="formData.flowData"
        :flow-form-option="formData.formOption"
      />
      <el-result v-if="activeStep === 3" icon="success" title="流程设计完成">
        <template #extra>
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
