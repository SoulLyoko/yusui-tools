<script setup lang="ts" name="approval-form">
import type { AvueFormDefaults, AvueFormInstance } from '@smallwei/avue'
import type { ApprovalNode, FlowDetail, FlowVariable } from '../../api/flow-task'

import { ElTree } from 'element-plus'
import { nextTick, ref, watchEffect } from 'vue'
import { useVModels } from '@vueuse/core'
import { findTree, treeMap, uuid } from '@yusui/utils'

import { getApprovalNodes } from '../../api/flow-task'
import { asyncValidate } from '../../utils'

const props = defineProps<{
  modelValue?: any
  visible?: boolean
  variables?: FlowVariable[]
  flowDetail?: FlowDetail
}>()

const emit = defineEmits(['confirm'])

// import CommonComments from "./common-comments.vue";

const iconMap: Record<string, string> = {
  element: 'ep:flag',
  post: 'ep:share',
  dept: 'ep:share',
  user: 'ep:user',
}

const vModels = useVModels(props)
const { modelValue: formData, visible, flowDetail } = vModels as Required<typeof vModels>
// const { processDetail, activeBtn, activeBtnConfig, submitLoading } = useInject();

const approvalNodes = ref<ApprovalNode[]>([])
const approvalFormData = ref({ approver: [] as ApprovalNode[], copyUser: '', comment: '' })
const formRef = ref<AvueFormInstance>()
const defaults = ref<AvueFormDefaults>({})
const formOption = {
  menuBtn: false,
  labelWidth: 70,
  column: [
    { label: '审批人', prop: 'approver', span: 24, rules: [{ required: true, validator: approvalValidator }] },
    // { label: "抄送人", prop: "copyUser", span: 24, rules: [{ required: true, message: "请选择抄送人" }] },
    { label: '意见', prop: 'comment', span: 24, rules: [{ required: true, message: '请填写意见' }] },
  ],
}

function approvalValidator(rule: any, value: ApprovalNode[], callback: (error?: string) => void) {
  const isParallelGateway = approvalNodes.value[0].type === 'ParallelGateway'
  const isAllChecked = approvalNodes.value[0].children?.every((node) => {
    return findTree([node], item => value.some(e => e.id === item.id))
  })
  if (!value.length) {
    return callback('请选择审批人')
  }
  else if (isParallelGateway && !isAllChecked) {
    // 并行网关必须每个节点都选择审批人
    return callback('请在每个节点选择审批人')
  }
  return true
}

const treeRef = ref<InstanceType<typeof ElTree>>()

// const showApproval = computed(() => activeBtnConfig.value?.approval?.includes("approver"));
const showApproval = ref(true)
const submitLoading = ref(false)

watchEffect(async () => {
  if (!visible.value || !formRef.value)
    return
  const { flowKey } = flowDetail.value?.process || {}
  const { taskId } = flowDetail.value?.task || {}
  const defaultComment = taskId ? '' : '发起'
  approvalNodes.value = []
  approvalFormData.value = { approver: [], copyUser: '', comment: formData.value.comment || defaultComment }

  nextTick(() => {
    // defaults.value.approver!.display = showApproval.value;
    // defaults.value.copyUser!.display = activeBtnConfig.value?.approval?.includes("copyUser");
    // defaults.value.comment!.display = activeBtnConfig.value?.approval?.includes("comment");
  })

  if (showApproval.value) {
    console.log('🚀 ~ file: approval-form.vue:120 ~ watchEffect ~ flowDetail:', flowDetail)
    const res = await getApprovalNodes({ flowKey, variables: props.variables, taskId })
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
  approvalFormData.value.approver = checkedNodes.filter(e => e.type === 'user')
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
  treeRef.value?.setCheckedNodes(approvalFormData.value.approver as any)
}

async function onConfirm() {
  await asyncValidate(formRef)
  submitLoading.value = true
  const { approver, copyUser, comment } = approvalFormData.value
  const conditionSet: Record<string, Set<string>> = {}
  const conditionData: Record<string, string> = {}
  const outgoing = new Set<string>()
  approver.forEach((item) => {
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
  formData.value.assignee = conditionData
  // formData.value.copyUser = copyUser;
  formData.value.comment = comment
  formData.value.outgoing = [...outgoing]
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
  <el-dialog v-model="visible" :width="showApproval ? '800px' : '500px'" append-to-body>
    <el-row :gutter="20">
      <el-col v-if="showApproval" :span="10">
        <ElTree
          ref="treeRef"
          class="approval-tree"
          w-full
          h-400px
          overflow-y-scroll
          node-key="id"
          empty-text="无需选择审批人"
          default-expand-all
          show-checkbox
          check-on-click-node
          :data="approvalNodes"
          style="max-height: 600px; overflow: auto"
          @check-change="onCheckChange"
        >
          <template #default="{ data }">
            <div>
              <v-icon :icon="iconMap[data.type]" style="display: inline-block" />
              <span>{{ data.title }}</span>
            </div>
          </template>
        </ElTree>
      </el-col>
      <el-col :span="showApproval ? 14 : 24">
        <avue-form ref="formRef" v-model="approvalFormData" v-model:defaults="defaults" :option="formOption">
          <template #approver>
            <el-tag v-for="item in approvalFormData.approver" :key="item.id" type="info">
              {{ item.title }}
            </el-tag>
          </template>
          <template #copyUser>
            <!-- <user-select v-model="approvalFormData.c opyUser" w-full multiple></user-select> -->
          </template>
          <template #comment>
            <el-input v-model="approvalFormData.comment" type="textarea" />
            <!-- <common-comments v-model="approvalFormData.comment"></common-comments> -->
          </template>
        </avue-form>
      </el-col>
    </el-row>

    <template #footer>
      <el-button @click="visible = false">
        取 消
      </el-button>
      <el-button type="primary" @click="onConfirm">
        确 定
      </el-button>
    </template>
  </el-dialog>
</template>
