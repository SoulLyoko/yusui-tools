<script setup lang="ts">
import type { AvueTreeEmits } from '@smallwei/avue'

import { ref } from 'vue'
import { useVModels } from '@vueuse/core'

import { getRandomId } from '../../utils'

const props = withDefaults(
  defineProps<{ modelValue?: any[], setterType?: string }>(),
  { modelValue: () => [] },
)
const { modelValue: dicData } = useVModels(props)

// dynamic
const dynamicOption = {
  column: [
    { label: '名称', prop: 'label' },
    { label: '值', prop: 'value' },
  ],
}

// tree
const treeOption = {
  props: {
    value: 'id',
  },
  formOption: {
    column: [
      { label: '名称', prop: 'label' },
      { label: '值', prop: 'value' },
    ],
  },
}

const treeFormData = ref<any>({})
function beforeOpen(done: () => void, type: string) {
  done()
  setTimeout(() => {
    if (type === 'add' || type === 'parentAdd')
      treeFormData.value.id = getRandomId()
  }, 100)
}

const onSave: AvueTreeEmits['save'] = (node, data, done) => done()
const onUpdate: AvueTreeEmits['update'] = (node, data, done) => done()
const onDel: AvueTreeEmits['del'] = (data, done) => done()
</script>

<template>
  <avue-tree
    v-if="setterType === 'tree'"
    v-model="treeFormData"
    :data="dicData"
    :option="treeOption"
    :before-open="beforeOpen"
    @save="onSave"
    @update="onUpdate"
    @del="onDel"
  />
  <avue-dynamic
    v-else
    v-model="dicData"
    :children="dynamicOption"
  />
</template>
