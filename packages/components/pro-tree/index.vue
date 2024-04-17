<script setup lang="ts">
import type { TreeInstance } from 'element-plus'
import type { ProTreeProps } from './types'

import { onMounted, reactive, ref } from 'vue'
import { isFunction, pickBy } from 'lodash-unified'

import { useInput, useTag, useTree } from './composables'

const props = withDefaults(
  defineProps<ProTreeProps>(),
  { nodeKey: 'value', tagType: 'info', placeholder: '输入关键字搜索' },
)
const emit = defineEmits(['update:modelValue', 'tag-click', 'tag-close'])

const inputRef = ref()
const treeRef = ref<TreeInstance>()
const treeProps = useTree(props, { emit, treeRef })

const inputProps = useInput(props, { emit, treeRef })
const { checkedNodes, onTagClick, onTagClose } = useTag(props, { emit, treeRef })
const { clearable, onClear, modelValue: searchValue } = inputProps

const methods = reactive<any>({})
defineExpose(methods)
onMounted(() => {
  const treeMethods = pickBy(treeRef.value ?? {}, isFunction)
  const inputMethods = pickBy(inputRef.value ?? {}, isFunction)
  Object.assign(methods, treeMethods, inputMethods)
})
</script>

<template>
  <div class="pro-tree">
    <el-input ref="inputRef" v-bind="reactive(inputProps)" :clearable="false">
      <template #prefix>
        <slot name="prefix" />
        <el-space wrap>
          <el-tag
            v-for="item in checkedNodes" :key="item.key" closable :type="tagType" @click="onTagClick(item)"
            @close="onTagClose(item)"
          >
            {{ item.label }}
          </el-tag>
        </el-space>
      </template>
      <template #suffix>
        <slot name="suffix" />
        <Icon
          v-if="clearable && (checkedNodes.length || searchValue)" class="el-input__clear" icon="ep:circle-close"
          @click="onClear"
        />
      </template>
      <template v-if="$slots.prepend" #prepend>
        <slot name="prepend" />
      </template>
      <template v-if="$slots.append" #append>
        <slot name="append" />
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
