<script setup lang="ts">
import type { ProTreeProps } from './types'
import type { TreeInstance } from 'element-plus'

import { ElTree, ElTreeV2 } from 'element-plus'
import { isFunction, pickBy } from 'lodash-es'
import { computed, onMounted, reactive, ref } from 'vue'

import { useSelect, useTree } from './composables'

const props = withDefaults(
  defineProps<ProTreeProps>(),
  {
    autoExpandParent: true,
    clearable: true,
    expandOnClickNode: true,
    filterable: true,
    renderAfterExpand: true,
    reserveKeyword: true,
    teleported: true,
    persistent: true,
    nodeKey: 'value',
    placeholder: '输入关键字搜索',
  },
)
const emit = defineEmits(['update:modelValue'])

const treeComponent = computed(() => props.virtualized ? ElTreeV2 : ElTree)

const selectRef = ref()
const treeRef = ref<TreeInstance>()
const selectProps = useSelect(props, { emit, selectRef, treeRef })
const treeProps = useTree(props, { emit, treeRef })

const methods = reactive<any>({})
defineExpose(methods)
onMounted(() => {
  const selectMethods = pickBy(selectRef.value ?? {}, isFunction)
  const treeMethods = pickBy(treeRef.value ?? {}, isFunction)
  Object.assign(methods, selectMethods, treeMethods)
})
</script>

<template>
  <div class="pro-tree">
    <el-select-v2 ref="selectRef" v-bind="reactive(selectProps)" popper-class="pro-tree__select-popper" />
    <component :is="treeComponent" ref="treeRef" v-bind="reactive(treeProps)">
      <template v-if="$slots.default" #default="slotProps">
        <slot name="default" v-bind="slotProps" />
      </template>
      <template v-if="$slots.empty" #empty>
        <slot name="empty" />
      </template>
    </component>
  </div>
</template>
