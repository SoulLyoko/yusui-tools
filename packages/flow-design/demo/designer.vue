<script setup lang="ts">
import { defaultOptions } from '../options'
import { useGraphData } from './data'

const graphData = useGraphData()

const formOptions = defaultOptions

const dataOptions = {
  formPropertyList: [
    { label: '字段1', value: 'field1' },
    { label: '字段2', value: 'field2' },
    { label: '审批表单', prop: 'formTab' },
    { label: '附件资料', prop: 'fileTab' },
    { label: '流程跟踪', prop: 'trackTab' },
  ],
  buttonList: [
    { name: '保存草稿', buttonKey: 'flow_draft' },
    { name: '发送', buttonKey: 'flow_pass' }],
  fieldsDic: [
    { label: '字段1', value: 'field1' },
    { label: '字段2', value: 'field2' },
  ],
  // flowButtonDisplayDic: enumToDic(FlowButtonDisplay),
  // flowButtonApprovalDic: enumToDic(FlowButtonApproval),
}
</script>

<template>
  <FlowDesign v-model="graphData" :form-options="formOptions" :data-options="dataOptions" form-width="30%" style="height:650px" />
</template>
