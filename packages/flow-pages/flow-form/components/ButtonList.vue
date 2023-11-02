<script setup lang="ts">
import type { FlowButton, FlowButtonDisplay } from '@yusui/flow-pages'
import type { ButtonItem } from '@yusui/flow-design'

import { computed } from 'vue'
import { pick } from 'lodash-es'
import { Icon } from '@iconify/vue'
import { FlowStatus, TaskStatus, useConfigProvider, useFlowButtonApi } from '@yusui/flow-pages'

import { useInjectState } from '../composables'

const emit = defineEmits<{ (e: 'click', btn: FlowButton): void }>()

const { userInfo, request } = useConfigProvider()
const { flowDetail } = useInjectState()

const { data: allButtonList } = useFlowButtonApi(request).useList()

function mergeButton(button: FlowButton[], source: ButtonItem[]) {
  return button.map((btn) => {
    const findSource = source.find(e => e.buttonKey === btn.buttonKey)
    const result = { ...btn, ...pick(findSource, ['display', 'approval', 'validate']) } as FlowButton
    return result
  })
}

type OrConditionKey = 'true' | 'notstarted'
type AndConditionKey = Exclude<FlowButtonDisplay, OrConditionKey>

// 显示的按钮
const displayButtonList = computed(() => {
  const user = typeof userInfo === 'function' ? userInfo() : userInfo
  const { assignee, status: taskStatus } = flowDetail.value?.task || {}
  const { createUser, flowInstanceId, status: flowStatus } = flowDetail.value?.flowInstance || {}

  const andCondition: Record<AndConditionKey, boolean> = {
    false: false,
    startUser: createUser === String(user?.userId),
    assignee: assignee === String(user?.userId),
    todo: taskStatus === TaskStatus['待办'],
    done: taskStatus === TaskStatus['已办'],
    unfinished: flowStatus === FlowStatus['未办结'],
    finished: flowStatus === FlowStatus['已办结'],
    started: !!flowInstanceId,
  }
  const orCondition: Record<OrConditionKey, boolean> = {
    true: true,
    notstarted: !flowInstanceId,
  }

  const { button: buttonProperties } = flowDetail.value?.properties || {}
  const filterBtn = mergeButton(allButtonList.value ?? [], buttonProperties ?? [])?.filter((item) => {
    const displayList = item.display?.split(',')
    const and = displayList?.filter(condition => condition in andCondition).every(condition => andCondition[condition as AndConditionKey])
    const or = displayList?.filter(condition => condition in orCondition).some(condition => orCondition[condition as OrConditionKey])
    return and || or
  })
  return filterBtn ?? []
})
</script>

<template>
  <el-button v-for="btn in displayButtonList" :key="btn.buttonKey" :type="btn.buttonType" @click="emit('click', btn)">
    <Icon v-if="btn.icon" :icon="btn.icon" />
    {{ btn.name }}
  </el-button>
</template>
