<script setup lang="ts">
import type { FormDesignProps } from './types'

import { useProvideState } from './composables'
import LeftPanel from './components/left-panel/index.vue'
import MainWorkspace from './components/main-workspace/index.vue'
import RightPanel from './components/right-panel/index.vue'
import MainHeader from './components/main-header/index.vue'
import { adapterIn, adapterOut } from './utils'

const props = withDefaults(
  defineProps<FormDesignProps>(),
  { adapterIn, adapterOut },
)
const emit = defineEmits<{ reset: [] }>()
const { workType, deviceType } = useProvideState(props, emit)
</script>

<template>
  <el-container class="form-design">
    <el-aside class="left-panel" :width="leftWidth">
      <LeftPanel />
    </el-aside>
    <el-container>
      <el-header class="main-header" height="auto">
        <MainHeader>
          <template #header-left>
            <slot name="header-left" />
          </template>
          <template #header-right>
            <slot name="header-right" />
          </template>
        </MainHeader>
      </el-header>
      <el-main class="main-workspace">
        <MainWorkspace :class="`device-${deviceType}`" />
      </el-main>
    </el-container>
    <el-aside v-show="workType === 'design'" class="right-panel" :width="rightWidth">
      <RightPanel />
    </el-aside>
  </el-container>
</template>
