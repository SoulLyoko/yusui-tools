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
  flowAssigneeUserDic: [
    { label: '用户1', value: 'user1', id: 'user1', type: 'user' },
    { label: '用户2', value: 'user2', id: 'user2', type: 'user' },
  ],
  flowAssigneeDeptDic: [
    { label: '部门1', value: 'dept1', id: 'dept1', type: 'dept' },
    { label: '部门2', value: 'dept2', id: 'dept2', type: 'dept' },
  ],
  flowAssigneePostDic: [
    { label: '岗位1', value: 'post1', id: 'post1', type: 'post' },
    { label: '岗位2', value: 'post2', id: 'post2', type: 'post' },
  ],
  flowAssigneeRoleDic: [
    { label: '角色1', value: 'role1', id: 'role1', type: 'role' },
    { label: '角色2', value: 'role2', id: 'role2', type: 'role' },
  ],
  flowAssigneeDynamicDic: [
    { label: '动态1', value: 'dynamic1', id: 'dynamic1' },
    { label: '动态2', value: 'dynamic2', id: 'dynamic2' },
  ],
  snTemplateDic: [
    { label: '流水号模板1', value: 'sn1', id: 'sn1' },
    { label: '流水号模板2', value: 'sn2', id: 'sn2' },
  ],
  printTemplateDic: [
    { label: '打印模板1', value: 'print1', id: 'print1' },
    { label: '打印模板2', value: 'print2', id: 'print2' },
  ],
  noticeTypeDic: [
    { label: '通知类型1', value: 'notice1', id: 'notice1' },
    { label: '通知类型2', value: 'notice2', id: 'notice2' },
  ],
}
</script>

<template>
  <FlowDesign v-model="graphData" :form-options="formOptions" :data-options="dataOptions" form-width="400px" style="height:800px" />
</template>
