<script setup lang="ts">
import type { FlowDesignProps } from './types'

import '@logicflow/core/lib/style/index.css'
import '@logicflow/extension/lib/style/index.css'
import { uniqueId } from 'lodash-es'
import { onMounted } from 'vue'

import FlowEditor from './components/FlowEditor.vue'
import { useInit, useProvideState } from './composables'

const props = defineProps<FlowDesignProps>()

const state = useProvideState(props)
const { lf, graphData, formRef, formData, formOption, formDefaults, formLoading, formVisible, editorVisible, onUpdateFormData } = state
const { initModeler, initViewer } = useInit({ props, state })

const containerId = uniqueId('logicflow-container')
onMounted(() => {
  const container: HTMLElement = document.querySelector(`#${containerId}`)!
  props.type === 'viewer' ? initViewer(container) : initModeler(container)
})
</script>

<template>
  <div class="lf-container">
    <div :id="containerId" class="lf-main" />

    <el-dialog v-if="!formLoading && formVisible" v-model="formVisible" class="lf-form-dialog">
      <avue-form ref="formRef" v-model="formData" v-model:defaults="formDefaults" class="lf-form" :option="formOption" />
      <template #footer>
        <el-button @click="formVisible = false">
          取消
        </el-button>
        <el-button type="primary" @click="onUpdateFormData(formData)">
          确定
        </el-button>
      </template>
    </el-dialog>

    <FlowEditor v-model="graphData" v-model:visible="editorVisible" @confirm="lf?.render($event)" />
  </div>
</template>
