<script setup lang="ts">
import type { FlowButton } from '@yusui/flow-pages'
import type { ButtonItem } from '@yusui/flow-design'

import { computed } from 'vue'
import { pick } from 'lodash-es'
import { Icon } from '@iconify/vue'
import { FlowStatus, TaskStatus, useConfigProvider, useFlowButtonApi } from '@yusui/flow-pages'

import { useInjectState } from '../composables'

const emit = defineEmits<{ (e: 'click', btn: FlowButton): void }>()

const { userInfo, request } = useConfigProvider()
const { flowDetail, circulateId } = useInjectState()

const { data: allButtonList } = useFlowButtonApi(request).useList()

function mergeButton(button: FlowButton[], source: ButtonItem[]) {
  return button.map((btn) => {
    const findSource = source.find(e => e.buttonKey === btn.buttonKey)
    const result = { ...btn, ...pick(findSource, ['display', 'approval']) } as FlowButton
    return result
  })
}

// 显示的按钮
const displayButtonList = computed(() => {
  if (circulateId?.value) {
    const circulateBtn = allButtonList.value?.find(e => e.buttonKey === 'flow_circulate')
    return circulateBtn ? [circulateBtn] : []
  }
  const user = typeof userInfo === 'function' ? userInfo() : userInfo
  const { assignee, status: taskStatus } = flowDetail.value?.task || {}
  const { createUser, flowInstanceId, status: flowStatus } = flowDetail.value?.flowInstance || {}
  const buttonCondition: Record<string, boolean> = {
    true: true,
    false: false,
    startUser: createUser == user?.userId,
    assignee: assignee == user?.userId,
    todo: taskStatus == TaskStatus['待办'],
    done: taskStatus == TaskStatus['已办'],
    notstarted: !flowInstanceId,
    started: !!flowInstanceId,
    finished: flowStatus === FlowStatus['已办结'],
    unfinished: flowStatus === FlowStatus['未办结'],
  }

  const buttonList = allButtonList.value?.filter(e => e.buttonKey !== 'flow_circulate') ?? []
  const { button: buttonProperties } = flowDetail.value?.properties || {}
  const filterBtn = mergeButton(buttonList, buttonProperties ?? [])?.filter((item) => {
    return item.display?.split(',')?.every(condition => buttonCondition[condition])
  })
  return filterBtn ?? []
})
</script>

<template>
  <el-button v-for="btn in displayButtonList" :key="btn.buttonKey" :type="btn.buttonType" @click="emit('click', btn)">
    <Icon :icon="btn.icon!" />
    {{ btn.name }}
  </el-button>
</template>
