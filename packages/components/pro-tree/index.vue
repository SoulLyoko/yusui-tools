<script setup lang="ts">
import type { TreeInstance } from 'element-plus'
import type { EpTreeProps } from './types'

import { onMounted, reactive, ref } from 'vue'
import { pickBy } from 'lodash-unified'

import { useInput, useTag, useTree } from './composables'

const props = withDefaults(
  defineProps<EpTreeProps>(),
  { nodeKey: 'value', tagType: 'info', placeholder: '输入关键字搜索' },
)
const emit = defineEmits(['update:modelValue'])

const treeRef = ref<TreeInstance>()
const treeProps = useTree(props, { emit, treeRef })

const inputProps = useInput(props, { treeRef })
const { checkedNodes, onTagClose } = useTag(props, { emit, treeRef })

const methods = reactive<any>({})
defineExpose(methods)
onMounted(() => {
  const treeMethods = pickBy(treeRef.value ?? {}, value => typeof value === 'function')
  Object.assign(methods, treeMethods)
})
</script>

<template>
  <div class="pro-tree">
    <el-input v-bind="reactive(inputProps)">
      <template #prefix>
        <el-space wrap>
          <el-tag v-for="item in checkedNodes" :key="item[nodeKey]" closable :type="tagType" @close="onTagClose(item)">
            {{ item.label }}
          </el-tag>
        </el-space>
      </template>
    </el-input>
    <el-tree ref="treeRef" v-bind="reactive(treeProps)">
      <template v-if="$slots.default" #default="slotProps">
        <slot name="default" v-bind="slotProps" />
      </template>
      <template v-if="$slots.empty" #empty>
        <slot name="empty" />
      </template>
    </el-tree>
  </div>
</template>
