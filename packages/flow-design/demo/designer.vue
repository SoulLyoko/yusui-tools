<script setup lang="ts">
import { defaultGraphData } from '../constants'
import { defaultOptions } from '../options'

const graphData = defaultGraphData()

const formOptions = defaultOptions

const dataOptions = {
  buttonList: [
    { name: '保存草稿', key: 'flow_draft' },
    { name: '发送', key: 'flow_pass' },
  ],
  formPropertyList: [
    { label: '字段1', prop: 'field1', type: 'dynamic', children: { column: [{ label: '字段5', prop: 'field5' }] } },
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
    { label: '用户3', value: 'user3', id: 'user3', type: 'user' },
    { label: '用户4', value: 'user4', id: 'user4', type: 'user' },
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
    { label: '打印模板1', value: 'print1', id: 'print1', children: [{ label: 'label1', value: 'value1', defaultValue: 'default1' }] },
    { label: '打印模板2', value: 'print2', id: 'print2', children: [{ label: 'label2', value: 'value2', defaultValue: 'default2' }] },
  ],
  redTemplateDic: [
    { label: '套红模板1', value: 'red1', id: 'red1', children: [{ label: 'label1', value: 'value1', defaultValue: 'default1' }] },
    { label: '套红模板2', value: 'red2', id: 'red2', children: [{ label: 'label2', value: 'value2', defaultValue: 'default2' }] },
  ],
  noticeTypeDic: [
    { label: '通知类型1', value: 'notice1', id: 'notice1' },
    { label: '通知类型2', value: 'notice2', id: 'notice2' },
  ],
  formOptions: [
    {
      label: '表单1',
      prop: 'form1',
      column: [
        { label: '字段1', prop: 'field1', type: 'dynamic', children: { column: [{ label: '字段5', prop: 'field5' }] } },
        { label: '字段2', prop: 'field2' },
      ],
      group: [
        {
          label: '分组1',
          prop: 'group1',
          column: [{ label: '字段6', prop: 'field6' }, { label: '字段7', prop: 'field7' }],
        },
      ],
    },
    { label: '表单2', prop: 'form2', column: [{ label: '字段3', prop: 'field3' }, { label: '字段4', prop: 'field4' }] },
  ],
  formPropertyExtra: [
    { label: '通过时更新值', prop: 'upSend' },
    { label: '接收时更新值', prop: 'upReceive' },
  ],
}
</script>

<template>
  <FlowDesign v-model="graphData" :form-options="formOptions" :data-options="dataOptions" style="height:700px" />
</template>
