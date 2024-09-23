<script setup lang="ts">
import { useVModels } from '@vueuse/core'
import { flatTree } from '@yusui/utils'
import { parse } from 'acorn'
import { generate } from 'astring'
import { computed, ref, watch } from 'vue'

import { useInjectState } from '../../composables'
import EditorSetter from '../editor-setter/index.vue'
import PropertySelect from './property-select.vue'

interface Control {
  field?: string
  property?: string
  value?: string
}

const props = withDefaults(
  defineProps<{ modelValue?: string }>(),
  { modelValue: '' },
)
const { modelValue } = useVModels(props)
const { elementTree } = useInjectState()

const visible = ref(false)
const controlList = ref<Control[]>([])
watch(
  modelValue,
  () => {
    if (!modelValue.value) {
      controlList.value = []
      return
    }
    try {
      const ast = parse(modelValue.value, { ecmaVersion: 'latest' }) as any
      const returnObject = ast.body[0]?.expression?.body?.properties ?? []
      if (returnObject?.length) {
        controlList.value = returnObject
          .map((p: any) => {
            return p.value.properties.map((p2: any) => {
              const value = generate(p2.value)
              return { field: p.key.name, property: p2.key.name, value }
            })
          })
          .flat()
      }
    }
    catch {}
  },
  { immediate: true },
)
watch(
  controlList,
  () => {
    if (!visible.value)
      return
    const fieldSet = [...new Set(controlList.value?.map(e => e.field))]
    const fn = `(val, form) => ({
    ${fieldSet
        .map((field) => {
          const result = controlList.value?.filter(e => e.field === field)
          return `${field}: { ${result?.map(f => `${f.property}: ${f.value}`).join(', ')} }`
        })
        .join(',\n    ')}
})`
    modelValue.value = fn
  },
  { deep: true },
)

const fieldDic = computed(() => {
  const allElementList = flatTree(elementTree.value?.children ?? [])
  return allElementList.map((e) => {
    const { label, prop } = e.props ?? {}
    return { label, value: prop, desc: prop }
  })
})

const dynamicOption = computed(() => {
  return {
    column: [
      {
        label: '受控字段',
        prop: 'field',
        type: 'select',
        dicData: fieldDic.value,
        rules: { required: true },
      },
      {
        label: '受控属性',
        prop: 'property',
        component: PropertySelect,
        rules: { required: true },
      },
      {
        label: '表达式/值',
        prop: 'value',
        component: EditorSetter,
        tooltip: true,
        rules: { required: true },
      },
    ],
  }
})
</script>

<template>
  <el-button @click="visible = true">
    编辑代码
  </el-button>
  <el-dialog v-model="visible" title="控制字段属性">
    <avue-dynamic v-model="controlList" :children="dynamicOption" />
    代码：
    <EditorSetter v-model="modelValue" value-type="function" height="200px" />
  </el-dialog>
</template>
