<script setup lang="ts">
import type { FlowDefinition, FlowDeploy } from '@yusui/flow-pages'

import { ref, watch } from 'vue'
import { useVModels } from '@vueuse/core'
import {
  FlowDesignWrapper,
  FormDesignWrapper,
  useConfigProvider,
  useFlowDefinitionApi,
  useFlowDeployApi,
} from '@yusui/flow-pages'

const props = withDefaults(
  defineProps<{ modelValue?: FlowDefinition | FlowDeploy, visible?: boolean }>(),
  { modelValue: () => ({}) },
)
const { modelValue: formData, visible } = useVModels(props)

const { request } = useConfigProvider()
const { getDetail: getDefinitionDetail } = useFlowDefinitionApi(request)
const { getDetail: getDeployDetail } = useFlowDeployApi(request)

const activeTab = ref('form')
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

      formData.value = { ...res.data }
    }
    finally {
      loading.value = false
    }
  },
  { immediate: true },
)

function handleClose() {
  formData.value = {}
  activeTab.value = 'form'
}
</script>

<template>
  <el-dialog v-model="visible" width="60%" top="5%" @close="handleClose">
    <template #header>
      <span>流程查看</span>
      <span v-if="formData?.flowName"> - {{ formData?.flowName }}</span>
      <span v-if="formData?.version"> - V{{ formData?.version }}</span>
    </template>

    <el-tabs v-model="activeTab" v-loading="loading">
      <el-tab-pane label="查看表单" name="form" style="height: 600px; overflow-y: auto">
        <FormDesignWrapper v-if="activeTab === 'form' && formData.formOption" v-model="formData.formOption" view />
      </el-tab-pane>
      <el-tab-pane label="查看流程" name="flow" style="height: 600px">
        <FlowDesignWrapper v-if="activeTab === 'flow'" v-model="formData.flowData" view />
      </el-tab-pane>
    </el-tabs>
  </el-dialog>
</template>
