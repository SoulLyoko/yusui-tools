<script setup lang="ts">
import type { FlowDetail } from '../../api/flow-task'
import type { FlowButton } from '../../api/flow-button'
import type { ButtonItem } from '@yusui/flow-design/types'

import { computed } from 'vue'
import { pick } from 'lodash-es'

import { useFlowButtonList } from '../../api/flow-button'

const props = defineProps<{ flowDetail?: FlowDetail }>()
const emit = defineEmits<{ (e: 'click', btn: FlowButton): void }>()

const { data: allButtonList } = useFlowButtonList()

function mergeButton(button: FlowButton[], source: ButtonItem[]) {
  return button.map((btn) => {
    const findSource = source.find(e => e.buttonKey === btn.buttonKey)
    const result = { ...btn, ...pick(findSource, ['display', 'approval']) } as FlowButton
    return result
  })
}

// 显示的按钮
const displayButtonList = computed(() => {
  // const { userInfo } = useUserStore();
  const userInfo = { userId: '1' }
  const { assignee, status: taskStatus } = props.flowDetail?.task || {}
  const { createUser, flowInstanceId, status: flowStatus } = props.flowDetail?.flowInstance || {}
  const buttonCondition: Record<string, boolean> = {
    true: true,
    false: false,
    startUser: createUser == userInfo.userId,
    assignee: assignee == userInfo.userId,
    todo: taskStatus == 2,
    done: taskStatus == 1,
    notstarted: !flowInstanceId,
    started: !!flowInstanceId,
    finished: flowStatus === 1,
    unfinished: flowStatus === 2,
  }

  const filterBtn = mergeButton(allButtonList.value ?? [], props.flowDetail?.properties?.button ?? [])
    ?.filter((item) => {
      return item.display?.split(',')?.every(condition => buttonCondition[condition])
    })
  return filterBtn ?? []
})
</script>

<template>
  <el-button v-for="btn in displayButtonList" :key="btn.buttonKey" :type="btn.buttonType" @click="emit('click', btn)">
    <v-icon :icon="btn.icon" />
    {{ btn.name }}
  </el-button>
</template>
