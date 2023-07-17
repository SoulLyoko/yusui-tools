<script setup lang="ts">
import type { AvueFormDefaults, AvueFormInstance, AvueFormOption } from '@smallwei/avue'
import type { ApprovalNode } from '../../api'

import { nextTick, ref, watchEffect } from 'vue'
import { findTree } from '@yusui/utils'

import { useFlowParamApi, useFlowTaskApi } from '../../api'
import { asyncValidate } from '../../utils'
import { useInjectState } from '../composables'
import CommonComments from './common-comments.vue'
import ApprovalTree from './approval-tree.vue'
import NodeSelect from './node-select.vue'

const emit = defineEmits(['submit'])

const { getApprovalNode } = useFlowTaskApi()
const { useParam } = useFlowParamApi()

const { formData, approvalFormData, activeBtn, approvalVisible, formVariables, flowDetail } = useInjectState()

const approvalNodes = ref<ApprovalNode[]>([])
const checkedApprovalNodes = ref<ApprovalNode[]>([])
const circulateNodes = ref<ApprovalNode[]>([])
const checkedCirculateNodes = ref<ApprovalNode[]>([])

const submitLoading = ref(false)
const treeLoading = ref(false)

const formRef = ref<AvueFormInstance>()
const defaults = ref<AvueFormDefaults>()
const formOption: AvueFormOption<typeof approvalFormData.value> = {
  menuBtn: false,
  labelWidth: 100,
  column: [
    { label: '指定节点', prop: 'jumpTaskNodeKey', span: 24, rules: [{ required: true, message: '请选择指定节点' }] },
    { label: '审批人', prop: 'assignee', span: 24, rules: [{ required: true, validator: approvalValidator }] },
    { label: '传阅人', prop: 'circulate', span: 24 },
    { label: '意见', prop: 'comment', span: 24, rules: [{ required: true, message: '请填写意见' }] },
  ],
}

function approvalValidator(rule: any, value: any, callback: (msg?: string) => void) {
  const isParallelGateway = approvalNodes.value[0]?.type === 'parallelGateway'
  const isAllChecked = approvalNodes.value[0]?.children?.every((node) => {
    return findTree([node], item => checkedApprovalNodes.value.some(e => e.id === item.id))
  })
  if (!checkedApprovalNodes.value.length) {
    return callback('请选择审批人')
  }
  else if (isParallelGateway && !isAllChecked) {
    // 并行网关必须每个节点都选择审批人
    return callback('请在每个节点选择审批人')
  }
  return true
}

const { data: defaultComment } = useParam('flow.default.comment')
const { data: autoCheck } = useParam('flow.approval.autocheck')

watchEffect(async () => {
  /** 弹窗表单未加载完成 */
  if (!approvalVisible.value || !formRef.value || !defaults.value)
    return

  resetNodes()

  const { taskId } = flowDetail.value?.task || {}

  nextTick(() => {
    formRef.value!.resetFields()
    approvalFormData.value.comment = formData.value.comment || (taskId ? '' : defaultComment.value) || ''

    defaults.value!.jumpTaskNodeKey.display = checkField('specifyNode')
    defaults.value!.assignee.display = checkField('assignee')
    defaults.value!.circulate.display = checkField('circulate')
    defaults.value!.comment.display = checkField('comment')
  })
})
watchEffect(async () => {
  /** 弹窗表单未加载完成 */
  if (!approvalVisible.value)
    return

  /** 不显示审批人 */
  if (!checkField('assignee'))
    return
  /** 显示指定节点但未选择节点 */
  if (checkField('specifyNode') && !approvalFormData.value.jumpTaskNodeKey)
    return

  resetNodes()
  const { flowKey } = flowDetail.value?.process || {}
  const { taskId } = flowDetail.value?.task || {}
  try {
    treeLoading.value = true
    const res = await getApprovalNode({
      flowKey,
      taskId,
      variables: formVariables.value,
      buttonType: activeBtn.value.buttonKey,
      jumpTaskNodeKey: approvalFormData.value.jumpTaskNodeKey,
    })
    approvalNodes.value = res.data.approvalNodeList
    circulateNodes.value = res.data.circulateNodeList
  }
  finally {
    treeLoading.value = false
  }
})

function resetNodes() {
  approvalNodes.value = []
  checkedApprovalNodes.value = []
  circulateNodes.value = []
  checkedCirculateNodes.value = []
}

function checkField(key: string) {
  return activeBtn.value?.approval?.includes(key)
}

async function onConfirm() {
  await asyncValidate(formRef)
  submitLoading.value = true

  const { data: assigneeData, outgoing } = getApprovalSetData(checkedApprovalNodes.value)
  const { data: circulateData } = getApprovalSetData(checkedCirculateNodes.value)

  approvalFormData.value.assignee = assigneeData
  approvalFormData.value.outgoing = [...outgoing]
  approvalFormData.value.circulate = circulateData
  console.log('🚀 ~ file: approval-form.vue:133 ~ onConfirm ~ formData:', formData)
  emit('submit')
}

function getApprovalSetData(nodes: ApprovalNode[]) {
  const set: Record<string, Set<string>> = {}
  const data: Record<string, string> = {}
  const outgoing = new Set<string>()
  nodes.forEach((item) => {
    const { taskNodeKey, incoming } = item
    if (!set[taskNodeKey!])
      set[taskNodeKey!] = new Set()
    item.userId && set[taskNodeKey!].add(item.userId)
    data[taskNodeKey!] = [...set[taskNodeKey!]].join(',')
    incoming && outgoing.add(incoming)
  })
  return { set, data, outgoing }
}
</script>

<template>
  <el-dialog v-model="approvalVisible" class="approlval-form" :title="activeBtn.name" width="900px" append-to-body>
    <avue-form ref="formRef" v-model="approvalFormData" v-model:defaults="defaults" :option="formOption">
      <template #jumpTaskNodeKey>
        <NodeSelect v-model="approvalFormData.jumpTaskNodeKey" />
      </template>
      <template #assignee>
        <el-skeleton v-if="treeLoading" />
        <ApprovalTree v-else key="AssigneeTree" v-model="checkedApprovalNodes" :data="approvalNodes" :auto-check="autoCheck === 'true'" />
      </template>
      <template #circulate>
        <el-skeleton v-if="treeLoading" />
        <ApprovalTree v-else key="CirculateTree" v-model="checkedCirculateNodes" :data="circulateNodes" />
      </template>
      <template #comment>
        <CommonComments v-model="approvalFormData.comment" />
      </template>
    </avue-form>

    <template #footer>
      <el-button @click="approvalVisible = false">
        取 消
      </el-button>
      <el-button type="primary" @click="onConfirm">
        确 定
      </el-button>
    </template>
  </el-dialog>
</template>
