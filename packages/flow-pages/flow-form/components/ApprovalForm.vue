<script setup lang="ts">
import type { AvueFormInstance, AvueFormOption } from '@smallwei/avue'
import type { ApprovalFormData, ApprovalNode } from '@yusui/flow-pages'

import { computed, nextTick, ref, watchEffect } from 'vue'
import { findTree } from '@yusui/utils'
import { asyncValidate, isMobile, useConfigProvider, useFlowParamApi, useFlowTaskApi } from '@yusui/flow-pages'

import { useInjectState } from '../composables'
import CommonComments from './CommonComments.vue'
import ApprovalTree from './ApprovalTree.vue'
import NodeSelect from './NodeSelect.vue'

const emit = defineEmits(['submit'])

const { request } = useConfigProvider()
const { getApprovalNode } = useFlowTaskApi(request)
const { useParam } = useFlowParamApi(request)

const { formData, approvalFormData, activeBtn, approvalVisible, formVariables, flowDetail } = useInjectState()

const approvalNodes = ref<ApprovalNode[]>([])
const checkedApprovalNodes = ref<ApprovalNode[]>([])
const circulateNodes = ref<ApprovalNode[]>([])
const checkedCirculateNodes = ref<ApprovalNode[]>([])

const submitLoading = ref(false)
const treeLoading = ref(false)

const formRef = ref<AvueFormInstance>()
const formOption = computed<AvueFormOption<ApprovalFormData>>(() => {
  const validateAssignee = approvalNodes.value.length
  const validateCirculate = circulateNodes.value.length && !approvalNodes.value.length
  return {
    menuBtn: false,
    labelWidth: 'auto',
    span: 24,
    column: [
      {
        label: '指定节点',
        prop: 'jumpTaskNodeKey',
        display: checkField('specifyNode'),
        rules: [{ required: true, message: '请选择指定节点' }],
      },
      {
        label: '审批人',
        prop: 'assignee',
        display: checkField('assignee'),
        rules: validateAssignee ? [{ required: true, validator: approvalValidator }] : [],
      },
      {
        label: '传阅人',
        prop: 'circulate',
        display: checkField('circulate'),
        rules: validateCirculate ? [{ required: true, validator: circulateValidator }] : [],
      },
      {
        label: '意见',
        prop: 'comment',
        display: checkField('comment'),
        rules: [{ required: true, message: '请填写意见' }],
      },
    ],
  }
})

function checkField(key: string) {
  return activeBtn.value?.approval?.includes(key)
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

function circulateValidator(rule: any, value: any, callback: (msg?: string) => void) {
  if (checkedCirculateNodes.value.length)
    return true
  else
    return callback('请选择传阅人')
}

const { data: autoCheck } = useParam('flow.approval.autocheck')
const { data: autoComment } = useParam('flow.approval.autocomment')

watchEffect(async () => {
  /** 弹窗表单未加载完成 */
  if (!approvalVisible.value || !formRef.value)
    return
  nextTick(() => {
    formRef.value!.resetForm()
    approvalFormData.value.comment = formData.value.comment || (autoComment.value === 'true' && activeBtn.value.name) || ''
  })

  resetNodes()
})

/** 分开监听jumpTaskNodeKey，不然会导致jumpTaskNodeKey被清空 */
watchEffect(async () => {
  /** 不显示审批人 */
  if (!checkField('assignee'))
    return
  /** 显示指定节点但未选择节点 */
  if (checkField('specifyNode') && !approvalFormData.value.jumpTaskNodeKey)
    return

  resetNodes()
  /** 获取审批人和传阅人节点数据 */
  try {
    treeLoading.value = true
    const { taskId } = flowDetail.value?.task || {}
    const { flowKey } = flowDetail.value?.process || {}
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

async function onConfirm() {
  await asyncValidate(formRef)
  submitLoading.value = true

  const { data: assigneeData, outgoing } = getApprovalDataSet(checkedApprovalNodes.value)
  const { data: circulateData } = getApprovalDataSet(checkedCirculateNodes.value)

  approvalFormData.value.assignee = assigneeData
  approvalFormData.value.circulate = circulateData
  approvalFormData.value.outgoing = [...outgoing]
  emit('submit')
}

function getApprovalDataSet(nodes: ApprovalNode[]) {
  const dataSet: Record<string, Set<string>> = {}
  const data: Record<string, string> = {}
  const outgoing = new Set<string>()
  nodes.forEach((item) => {
    const { taskNodeKey, incoming } = item
    if (!dataSet[taskNodeKey!])
      dataSet[taskNodeKey!] = new Set()
    item.userId && dataSet[taskNodeKey!].add(item.userId)
    data[taskNodeKey!] = [...dataSet[taskNodeKey!]].join(',')
    incoming && outgoing.add(incoming)
  })
  return { dataSet, data, outgoing }
}
</script>

<template>
  <component
    :is="isMobile() ? 'el-drawer' : 'el-dialog'" v-model="approvalVisible" class="approval-form-overlay"
    :title="activeBtn.name" append-to-body width="900px" size="50%" direction="btt" destroy-on-close
  >
    <avue-form ref="formRef" v-model="approvalFormData" class="approval-form" :option="formOption">
      <template #jumpTaskNodeKey>
        <NodeSelect v-model="approvalFormData.jumpTaskNodeKey" />
      </template>
      <template #assignee>
        <el-skeleton v-if="treeLoading" />
        <ApprovalTree
          v-else key="AssigneeTree" v-model="checkedApprovalNodes" :data="approvalNodes"
          :auto-check="autoCheck === 'true'" :mode="isMobile() ? 'vertical' : 'horizontal'"
        />
      </template>
      <template #circulate>
        <el-skeleton v-if="treeLoading" />
        <ApprovalTree
          v-else key="CirculateTree" v-model="checkedCirculateNodes" :data="circulateNodes"
          :mode="isMobile() ? 'vertical' : 'horizontal'"
        />
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
  </component>
</template>

<style lang="scss">
.approval-form-overlay {

  .el-drawer__header,
  .el-dialog__header {
    margin-bottom: 0;
    padding-bottom: 0;
  }

  .approval-form {
    padding: 0
  }
}
</style>
