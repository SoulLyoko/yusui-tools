<script setup lang="ts">
import type { TurboData } from '../extensions'

import { ref, watchEffect } from 'vue'
import { useVModels } from '@vueuse/core'

const props = defineProps<{
  /** 流程图数据 */
  modelValue?: TurboData
  visible?: boolean
}>()
const emit = defineEmits(['confirm'])
const vModels = useVModels(props)
const { modelValue, visible } = vModels as Required<typeof vModels>

const jsonForEdit = ref('')
function confirmUpdateJson() {
  const data = JSON.parse(jsonForEdit.value)
  modelValue.value = data
  emit('confirm', data)
  visible.value = false
}
watchEffect(() => {
  jsonForEdit.value = JSON.stringify(modelValue.value, null, 2)
})
</script>

<template>
  <el-drawer v-model="visible">
    <template #header>
      <span>编辑JSON</span>
      <slot name="header" />
    </template>
    <el-input v-model="jsonForEdit" class="flow-editor__textarea" type="textarea" />
    <el-button class="flow-editor__confirm-btn" type="primary" @click="confirmUpdateJson">
      确定
    </el-button>
  </el-drawer>
</template>
