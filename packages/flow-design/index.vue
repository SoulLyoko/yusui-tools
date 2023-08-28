<script setup lang="ts">
import type { FlowDesignProps } from './types'

import { onMounted } from 'vue'
import { uniqueId } from 'lodash-unified'

import { useInit, useProvideState } from './composables'
import FlowEditor from './components/flow-editor.vue'
import '@logicflow/core/dist/style/index.css'
import '@logicflow/extension/lib/style/index.css'

const props = defineProps<FlowDesignProps>()

const state = useProvideState(props)
const { lf, graphData, formRef, formData, formOption, formDefaults, formLoading, editorVisible, onUpdateFormData } = state
const { initModeler, initViewer } = useInit({ props, state })

const containerId = uniqueId('logicflow-container')
onMounted(() => {
  const container: HTMLElement = document.querySelector(`#${containerId}`)!
  props.type === 'viewer' ? initViewer(container) : initModeler(container)
})
</script>

<template>
  <div v-if="type === 'viewer'" :id="containerId" class="lf-container" />

  <el-container v-else class="lf-container">
    <el-main :id="containerId" class="lf-main" />
    <el-aside :width="formWidth" class="lf-aside">
      <slot name="form-top" />
      <el-empty v-if="!formOption?.group?.length" description="选择元素以编辑数据" />
      <el-skeleton v-else-if="formLoading" />
      <avue-form
        v-else ref="formRef" v-model="formData" v-model:defaults="formDefaults" :option="formOption"
        @update:model-value="onUpdateFormData"
      />
    </el-aside>

    <FlowEditor v-model="graphData" v-model:visible="editorVisible" @confirm="lf?.render($event)">
      <template v-if="$slots['editor-header']" #header>
        <slot name="editor-header" />
      </template>
    </FlowEditor>
  </el-container>
</template>
