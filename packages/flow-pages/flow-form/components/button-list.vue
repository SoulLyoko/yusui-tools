<script setup lang="ts">
import type { FlowButton, FlowDetail } from '../../api'
import type { ButtonItem } from '@yusui/flow-design'

import { computed } from 'vue'
import { pick } from 'lodash-es'
import { Icon } from '@iconify/vue'

import { useFlowButtonApi } from '../../api'

const props = defineProps<{ flowDetail?: FlowDetail }>()
const emit = defineEmits<{ (e: 'click', btn: FlowButton): void }>()

const { data: allButtonList } = useFlowButtonApi().useList()

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
    <Icon :icon="btn.icon" />
    {{ btn.name }}
  </el-button>
</template>
