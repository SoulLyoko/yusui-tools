<script setup lang="ts">
import type { InputTreeProps, TreeInstance } from './types'

import { onMounted, reactive, ref } from 'vue'
import { ElInput, ElTree } from 'element-plus'
import { pickBy } from 'lodash-unified'

import { useInputTags, useTree } from './composables'

// const props = defineProps({
//   ...ElTree.props,
//   ...ElInput.props,
//   tagType: { type: String, default: 'info' },
//   placeholder: { type: String, default: '输入关键字搜索' },
// })
const props = withDefaults(
  defineProps<InputTreeProps>(),
  { nodeKey: 'value', tagType: 'info', placeholder: '输入关键字搜索' },
)
const emit = defineEmits(['update:modelValue'])

const treeRef = ref<TreeInstance>()
const treeProps = useTree(props, { emit, treeRef })

const { inputProps, tagProps, checkedNodes } = useInputTags(props, { emit, treeRef })

const methods = reactive<any>({})
defineExpose(methods)
onMounted(() => {
  const treeMethods = pickBy(treeRef.value ?? {}, value => typeof value === 'function')
  Object.assign(methods, treeMethods)
})
</script>

<template>
  <div>
    <ElInput v-bind="reactive(inputProps)">
      <template #prefix>
        <el-space wrap>
          <el-tag v-for="item in checkedNodes" :key="item[nodeKey]" v-bind="reactive(tagProps)">
            {{ item.label }}
          </el-tag>
        </el-space>
      </template>
    </ElInput>
    <ElTree v-bind="reactive(treeProps)" />
  </div>
</template>
