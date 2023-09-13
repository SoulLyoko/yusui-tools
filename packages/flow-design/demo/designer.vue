<script setup lang="ts">
import { useGraphData, useOptions } from './data'

const graphData = useGraphData()

const formOptions = useOptions()

const dataOptions = {
  buttonList: [
    { name: '保存草稿', buttonKey: 'flow_draft' },
    { name: '发送', buttonKey: 'flow_pass' },
  ],
  formPropertyList: [
    { label: '字段1', prop: 'field1' },
    { label: '字段2', prop: 'field2' },
    { label: '审批表单', prop: 'formTab' },
    { label: '附件资料', prop: 'fileTab' },
    { label: '流程跟踪', prop: 'trackTab' },
  ],
  fieldsDic: [
    { label: '字段1', value: 'field1' },
    { label: '字段2', value: 'field2' },
  ],
}
</script>

<template>
  <FlowDesign v-model="graphData" :form-options="formOptions" :data-options="dataOptions" style="height:800px" />
</template>
