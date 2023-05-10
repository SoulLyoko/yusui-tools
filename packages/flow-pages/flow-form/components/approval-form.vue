<script setup lang="ts">
import type { AvueFormDefaults, AvueFormInstance } from '@smallwei/avue'
import type { ApprovalNode } from '../../api'

import { ElTree } from 'element-plus'
import { computed, nextTick, ref, watchEffect } from 'vue'
import { findTree, treeMap, uuid } from '@yusui/utils'
import { Icon } from '@iconify/vue'

import { useFlowTaskApi } from '../../api'
import { asyncValidate } from '../../utils'
import { useInjectState } from '../composables'
import CommonComments from './common-comments.vue'

const emit = defineEmits(['confirm'])

const { getApprovalNode } = useFlowTaskApi()

const iconMap: Record<string, string> = {
  element: 'ep:flag',
  post: 'ep:share',
  dept: 'ep:share',
  user: 'ep:user',
}

const { formData, approvalFormData, activeBtn, approvalVisible, formVariables, flowDetail } = useInjectState()

const approvalNodes = ref<ApprovalNode[]>([])
const checkedApprovalNodes = ref<ApprovalNode[]>([])
const copyUserNodes = ref<ApprovalNode[]>([])
const selectedCopyUser = ref<string[]>([])
const formRef = ref<AvueFormInstance>()
const defaults = ref<AvueFormDefaults>({})
const formOption = {
  menuBtn: false,
  labelWidth: 70,
  column: [
    { label: '审批人', prop: 'assignee', span: 24, rules: [{ required: true, validator: approvalValidator }] },
    { label: '传阅人', prop: 'circulate', span: 24 },
    { label: '抄送人', prop: 'copyUser', span: 24 /** rules: [{ required: true, message: '请选择抄送人' }] */ },
    { label: '意见', prop: 'comment', span: 24, rules: [{ required: true, message: '请填写意见' }] },
  ],
}

function approvalValidator(rule: any, value: any, callback: (error?: string) => void) {
  const isParallelGateway = approvalNodes.value[0].type === 'ParallelGateway'
  const isAllChecked = approvalNodes.value[0].children?.every((node) => {
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

const treeRef = ref<InstanceType<typeof ElTree>>()

const showAssignee = computed(() => activeBtn.value?.approval?.includes('assignee'))
const showCirculate = computed(() => activeBtn.value?.approval?.includes('circulate'))
const showCopyUser = computed(() => activeBtn.value?.approval?.includes('copyUser'))
const submitLoading = ref(false)
const treeLoading = ref(false)

watchEffect(async () => {
  if (!approvalVisible.value || !formRef.value)
    return
  const { flowKey } = flowDetail.value?.process || {}
  const { taskId } = flowDetail.value?.task || {}
  approvalNodes.value = []
  checkedApprovalNodes.value = []
  copyUserNodes.value = []
  selectedCopyUser.value = []
  const defaultComment = taskId ? '' : '发起'
  approvalFormData.value = {
    assignee: {},
    outgoing: [],
    circulate: '',
    copyUser: '',
    comment: formData.value.comment || defaultComment,
  }

  nextTick(() => {
    defaults.value.assignee!.display = showAssignee.value
    defaults.value.circulate!.display = showCirculate.value
    defaults.value.copyUser!.display = showCopyUser.value
    defaults.value.comment!.display = activeBtn.value?.approval?.includes('comment')
  })

  if (showAssignee.value) {
    try {
      treeLoading.value = true
      const loadFromConfig = activeBtn.value.buttonKey !== 'flow_transfer'
      const res = await getApprovalNode({ flowKey, variables: formVariables.value, taskId, loadConfig: loadFromConfig })
      approvalNodes.value = treeMap(res.data ?? [], (item, index, parent) => {
        const id = item.id || uuid()
        item.taskNodeKey = parent?.taskNodeKey ?? item.taskNodeKey
        item.incoming = parent?.incoming ?? item.incoming
        return { ...item, id, disabled: item.type !== 'user' }
      })
      await nextTick()
      // 只有一个节点时自动选择
      const checkedNode = getUniqueNode(approvalNodes.value)
      checkedNode && treeRef.value?.setCheckedNodes([checkedNode] as any)
    }
    finally {
      treeLoading.value = false
    }
  }

  if (showCopyUser.value) {
    const res = await getApprovalNode({ flowKey, variables: formVariables.value, taskId, loadConfig: false })
    copyUserNodes.value = treeMap(res.data?.[0]?.children ?? [], (item) => {
      // TODO: 改用userId
      // const id = item.type === 'user' ? item.userId : (item.id || uuid())
      const id = item.id || uuid()
      return { ...item, label: item.title, disabled: item.type !== 'user' && !item.children?.length }
    })
  }
})

// 获取唯一的子节点
function getUniqueNode(data: ApprovalNode[]): ApprovalNode | undefined {
  if (data.length !== 1)
    return
  if (data[0].children?.length)
    return getUniqueNode(data[0].children)
  else
    return data[0]
}

async function onCheckChange(data: ApprovalNode, isChecked: boolean) {
  if (data.type !== 'user')
    return
  await nextTick()
  await nextTick()
  const checkedNodes = treeRef.value?.getCheckedNodes() as ApprovalNode[]
  checkedApprovalNodes.value = checkedNodes.filter(e => e.type === 'user')
  // if (!data.isMultiInstance && isChecked) {
  //   // 排除掉兄弟节点
  //   const currentNode = treeRef.value?.getNode(data);
  //   const siblingNodesData = (currentNode!.parent.data.children as ApprovalNode[]).filter(e => e.id !== data.id);
  //   approvalFormData.value.approver = differenceBy(approvalFormData.value.approver, siblingNodesData, "id");
  // }
  // if (approvalNodes.value[0].type === "ExclusiveGateway" && isChecked) {
  //   // 互斥网关，排除掉非相同父节点的节点
  //   const commonParentNodeData = approvalFormData.value.approver.filter(e => e.parentId === data.parentId);
  //   approvalFormData.value.approver = commonParentNodeData;
  // }
  treeRef.value?.setCheckedNodes(checkedApprovalNodes.value as any)
}

async function onConfirm() {
  await asyncValidate(formRef)
  submitLoading.value = true
  const conditionSet: Record<string, Set<string>> = {}
  const conditionData: Record<string, string> = {}
  const outgoing = new Set<string>()
  checkedApprovalNodes.value.forEach((item) => {
    const { taskNodeKey, incoming } = item
    if (!conditionSet[taskNodeKey!])
      conditionSet[taskNodeKey!] = new Set()

    // if (!conditionSet["condition"]) {
    //   conditionSet["condition"] = new Set();
    // }
    item.userId && conditionSet[taskNodeKey!].add(item.userId)
    // conditionSet["condition"].add(item.condition);
    conditionData[taskNodeKey!] = [...conditionSet[taskNodeKey!]].join(',')
    // conditionData["condition"] = [...conditionSet["condition"]].join(",");
    outgoing.add(incoming!)
  })
  approvalFormData.value.assignee = conditionData
  approvalFormData.value.outgoing = [...outgoing]
  console.log('🚀 ~ file: approval-form.vue:210 ~ onConfirm ~ formData:', formData)
  // updateFormData();
  emit('confirm')
}

function updateFormData() {
  // const upPass = processDetail.value.property?.find(e => e.name === "upPass")?.value;
  // const upReceive = approvalFormData.value.approver[0]?.form?.upReceive;
  // if (activeBtn.value === "flow_pass") {
  //   try {
  //     const data = { ...JSON.parse(upPass || "{}"), ...JSON.parse(upReceive || "{}") };
  //     Object.entries(data).forEach(([key, value]) => {
  //       formData.value[key] = value;
  //     });
  //   } catch {
  //     ElMessage.warning("节点扩展属性参数配置有误");
  //   }
  // }
}
</script>

<template>
  <el-dialog v-model="approvalVisible" :title="activeBtn.name" :width="showAssignee ? '800px' : '500px'" append-to-body>
    <el-row :gutter="20">
      <el-col v-if="showAssignee" :span="10">
        <ElTree
          ref="treeRef"
          v-loading="treeLoading"
          class="approval-tree"
          node-key="id"
          empty-text="无需选择审批人"
          default-expand-all
          show-checkbox
          check-on-click-node
          :data="approvalNodes"
          style="max-height: 500px; overflow: auto"
          @check-change="onCheckChange"
        >
          <template #default="{ data }">
            <div>
              <Icon :icon="iconMap[data.type]" style="display: inline-block" />
              <span>{{ data.title }}</span>
            </div>
          </template>
        </ElTree>
      </el-col>
      <el-col :span="showAssignee ? 14 : 24">
        <avue-form ref="formRef" v-model="approvalFormData" v-model:defaults="defaults" :option="formOption">
          <template #assignee>
            <el-tag v-for="item in checkedApprovalNodes" :key="item.id" type="info">
              {{ item.title }}
            </el-tag>
          </template>
          <template #copyUser>
            <el-tree-select
              v-model="selectedCopyUser"
              :data="copyUserNodes"
              node-key="id"
              multiple
              show-checkbox
              clearable
              @update:modelValue="approvalFormData.copyUser = $event.join(',')"
            />
          </template>
          <template #comment>
            <CommonComments v-model="approvalFormData.comment" />
          </template>
        </avue-form>
      </el-col>
    </el-row>

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
