<script setup lang="ts">
import { ref } from 'vue'
import { useDictConfigProvider } from '@yusui/composables'

const single = ref('')
const multiple = ref([])
const singletree = ref('')
const multipletree = ref([])

const dicData = [
  {
    label: 'label1',
    value: 'value1',
  },
  {
    label: 'label2',
    value: 'value2',
  },
]
const treeData = [
  {
    label: 'label1',
    value: 'value1',
    children: [
      { label: 'label1-1', value: 'value1-1' },
      { label: 'label1-2', value: 'value1-2' },
    ],
  },
  {
    label: 'label2',
    value: 'value2',
    children: [
      { label: 'label2-1', value: 'value2-1' },
      { label: 'label2-2', value: 'value2-2' },
    ],
  },
]

const dicMap = {
  '/dict/dicData': dicData,
  '/dict/treeData': treeData,
}

// 注入请求实例
useDictConfigProvider({ request: request as any })
// 模拟请求
function request({ url }: { url: keyof typeof dicMap }) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        data: {
          data: dicMap[url],
        },
      })
    }, 1000)
  })
}
</script>

<template>
  Single Value:
  <br>
  request: <VDict v-model="single" dic-url="/dict/dicData" />
  <br>
  radio: <VDict v-model="single" :dic-data="dicData" type="radio" />
  <br>
  select: <VDict v-model="single" :dic-data="dicData" type="select" />
  <br>
  switch: <VDict v-model="single" :dic-data="dicData" type="switch" />
  <br>
  text: <VDict :model-value="single" :dic-data="dicData" type="text" />
  <br>

  <br>
  Multiple Value:
  <br>
  request: <VDict v-model="multiple" dic-url="/dict/dicData" multiple />
  <br>
  checkbox: <VDict v-model="multiple" :dic-data="dicData" type="checkbox" multiple style="display:inline-block" />
  <br>
  multile select: <VDict v-model="multiple" :dic-data="dicData" type="select" multiple />
  <br>
  multiple text: <VDict :model-value="multiple" :dic-data="dicData" type="text" multiple />
  <br>

  <br>
  Tree Single Value:
  <br>
  request: <VDict v-model="singletree" dic-url="/dict/treeData" type="tree-select" />
  <br>
  cascader: <VDict v-model="singletree" :dic-data="treeData" type="cascader" :props="{ emitPath: false }" :show-all-levels="false" />
  <br>
  tree-select: <VDict v-model="singletree" :dic-data="treeData" type="tree-select" />
  <br>
  tree text: <VDict :model-value="singletree" :dic-data="treeData" type="text" />
  <br>

  <br>
  Tree Multiple Value:
  <br>
  request: <VDict v-model="multipletree" dic-url="/dict/treeData" type="tree-select" multiple show-checkbox />
  <br>
  multiple cascader: <VDict v-model="multipletree" :dic-data="treeData" type="cascader" multiple :props="{ emitPath: false }" :show-all-levels="false" />
  <br>
  multiple tree-select: <VDict v-model="multipletree" :dic-data="treeData" type="tree-select" multiple show-checkbox />
  <br>
  multiple tree text: <VDict :model-value="multipletree" :dic-data="treeData" type="text" multiple />
  <br>
</template>
