<script setup lang="ts">
import type { AvueFormOption } from '@smallwei/avue'
import type { ElementTreeNode, Resource } from './types'

import { useProvideState } from './composables'
import LeftPanel from './components/left-panel/index.vue'
import MainWorkspace from './components/main-workspace/index.vue'
import RightPanel from './components/right-panel/index.vue'
import MainHeader from './components/main-header/index.vue'
import { adapterIn, adapterOut } from './utils'

const props = withDefaults(
  defineProps<{
    modelValue?: AvueFormOption
    groupList?: string[]
    resources?: Record<string, Resource>
    baseOption?: Resource['settings']
    advanceOption?: Resource['settings']
    leftWidth?: string
    rightWidth?: string
    adapterIn?: (option: AvueFormOption) => ElementTreeNode
    adapterOut?: (tree: ElementTreeNode) => AvueFormOption
  }>(),
  { adapterIn, adapterOut },
)
const emit = defineEmits(['reset'])
const { workType, deviceType } = useProvideState(props, emit)
</script>

<template>
  <el-container class="form-design">
    <el-aside class="left-panel" :width="leftWidth">
      <LeftPanel />
    </el-aside>
    <el-container>
      <el-header class="main-header" height="auto">
        <MainHeader />
      </el-header>
      <el-main class="main-workspace">
        <MainWorkspace :class="`device-${deviceType}`" />
      </el-main>
    </el-container>
    <el-aside v-show="workType == 'design'" class="right-panel" :width="rightWidth">
      <RightPanel />
    </el-aside>
  </el-container>
</template>
