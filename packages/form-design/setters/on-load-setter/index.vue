<script setup lang="ts">
// import { parse } from "acorn";
import { ref, watch } from 'vue'
import { useVModels } from '@vueuse/core'

import EditorSetter from '../editor-setter/index.vue'

interface OnLoadData {
  url?: string
  method?: string
  isPage?: boolean
  currentPageKey?: string
  pageSizeKey?: string
  totalPath?: string
  dataPath?: string
  codeMode?: boolean
}

const props = withDefaults(
  defineProps<{ modelValue?: string; tableData?: { row: any } }>(),
  { modelValue: '' },
)
const { modelValue } = useVModels(props)

const visible = ref(false)
const onLoadData = ref<OnLoadData>({})
watch(
  modelValue,
  () => {
    if (!modelValue.value)
      return
    onLoadData.value = props.tableData?.row?.onLoadData ?? {}
    // try {
    //   const ast = parse(modelValue.value, { ecmaVersion: "latest" }) as any;
    //   const dataCacheAst = ast.body[0]?.expression?.body?.body?.find(
    //     (e: any) => e.declarations?.[0]?.id?.name === "dataCache"
    //   );
    //   const dataCacheStr = dataCacheAst?.declarations?.[0]?.init?.value ?? "{}";
    //   onLoadData.value = JSON.parse(dataCacheStr);
    // } catch {}
  },
  { immediate: true },
)
watch(
  onLoadData,
  () => {
    if (!visible.value)
      return
    if (!props.tableData?.row)
      return
    props.tableData!.row.onLoadData = onLoadData.value
    if (onLoadData.value.codeMode)
      return
    const { url, method, isPage, currentPageKey, pageSizeKey, totalPath, dataPath } = onLoadData.value
    const fn = `({ page, value, data }, callback) => {
    const params = page && ${isPage} ? { ${currentPageKey}: page.currentPage, ${pageSizeKey}: page.pageSize } : {};
    this.$axios({ url: "${url}", method: "${method}", params }).then(res => {
        const data = this.getAsVal({ res }, "${dataPath}");
        const total = this.getAsVal({ res }, "${totalPath}");
        callback({ data, total });
    });
}`
    modelValue.value = fn
  },
  { deep: true },
)

const option = {
  span: 24,
  menuBtn: false,
  labelWidth: 100,
  column: [
    {
      label: '请求地址',
      prop: 'url',
    },
    {
      label: '请求方法',
      prop: 'method',
      type: 'radio',
      button: true,
      value: 'get',
      dicData: [
        { label: 'GET', value: 'get' },
        { label: 'POST', value: 'post' },
      ],
    },
    {
      label: '是否分页',
      prop: 'isPage',
      type: 'switch',
      value: true,
    },
    {
      label: '当前页键名',
      prop: 'currentPageKey',
      value: 'current',
    },
    {
      label: '每页条数键名',
      prop: 'pageSizeKey',
      value: 'size',
    },
    {
      label: '总条数路径',
      prop: 'totalPath',
      value: 'res.data.total',
    },
    {
      label: '返回数据路径',
      prop: 'dataPath',
      value: 'res.data.records',
    },
    {
      label: '编辑代码模式',
      prop: 'codeMode',
      type: 'switch',
      value: false,
      span: 4,
      tip: '关闭时，代码根据以上参数自动生成。开启时，可自由编辑代码',
    },
  ],
}
</script>

<template>
  <el-button @click="visible = true">
    编辑代码
  </el-button>
  <el-dialog v-model="visible" title="加载数据函数">
    <avue-form v-model="onLoadData" :option="option" />
    代码：
    <EditorSetter v-model="modelValue" value-type="function" height="200px" disabled />
  </el-dialog>
</template>
