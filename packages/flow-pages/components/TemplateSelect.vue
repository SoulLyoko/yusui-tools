<script setup lang="ts">
import { computed } from 'vue'
import { useVModels } from '@vueuse/core'
import { useConfigProvider, useFlowDefinitionApi, useFlowTemplateApi, useFormTemplateApi } from '@yusui/flow-pages'

const props = defineProps({
  formData: { type: Object, default: () => ({}) },
  activeStep: { type: Number },
})
const { formData, activeStep } = useVModels(props)

const { request } = useConfigProvider()
const { getDetail: getDefinitionDetail, useList: useDefinitionList } = useFlowDefinitionApi(request)

const { data: formTemplates } = useFormTemplateApi(request).useList()
const { data: flowTemplates } = useFlowTemplateApi(request).useList()
const { data: definitionList } = useDefinitionList()

const templatesDic = computed(() => {
  if (activeStep?.value === 1) {
    return [
      { label: '表单模板', value: '', type: 'divider' },
      ...formTemplates.value?.map(e => ({ label: e.formName, value: e.formOption, type: 'template' })) ?? [],
      { label: '已有表单', value: '', type: 'divider' },
      ...definitionList.value?.map(e => ({ label: e.flowName, value: e.flowModuleId, type: 'definition' })) ?? [],
    ]
  }
  else if (activeStep?.value === 2) {
    return [
      { label: '流程模板', value: '', type: 'divider' },
      ...flowTemplates.value?.map(e => ({ label: e.flowName, value: e.flowData, type: 'template' })) ?? [],
      { label: '已有流程', value: '', type: 'divider' },
      ...definitionList.value?.map(e => ({ label: e.flowName, value: e.flowModuleId, type: 'definition' })) ?? [],
    ]
  }
  return []
})

async function selectTemplate(item: (typeof templatesDic.value)[number]) {
  if (activeStep?.value === 1) {
    if (item.type === 'template') {
      formData.value.formOption = item.value
    }
    else if (item.type === 'definition') {
      const res = await getDefinitionDetail({ flowModuleId: item.value })
      formData.value.formOption = res.data.formOption
    }
  }
  else if (activeStep?.value === 2) {
    if (item.type === 'template') {
      formData.value.flowData = item.value
    }
    else if (item.type === 'definition') {
      const res = await getDefinitionDetail({ flowModuleId: item.value })
      formData.value.flowData = res.data.flowData
    }
  }
}
</script>

<template>
  <el-dropdown v-if="templatesDic.length">
    <el-button text type="primary" :underline="false">
      选择模板
      <Icon icon="ep:arrow-down" />
    </el-button>
    <template #dropdown>
      <el-dropdown-menu>
        <el-scrollbar max-height="600px">
          <el-dropdown-item
            v-for="item in templatesDic" :key="item.label" v-bind="item"
            :disabled="item.type === 'divider'" @click="selectTemplate(item)"
          >
            <el-divider v-if="item.type === 'divider'">
              {{ item.label }}
            </el-divider>
            <span v-else> {{ item.label }}</span>
          </el-dropdown-item>
        </el-scrollbar>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>
