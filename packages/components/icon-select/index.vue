<script setup lang="ts">
import type { IconSelectProps } from './types'

import { Icon } from '@iconify/vue'
import { useVModel } from '@vueuse/core'
import { computed } from 'vue'

import { useDisplayIcons, useIframeSrc, useLocalIcons, usePopCliboard, useRemoteIcons } from './composables'

const props = withDefaults(
  defineProps<IconSelectProps>(),
  { modelValue: '', source: 'iconify', width: 800, height: 600 },
)
const modelValue = useVModel(props, 'modelValue')

const { iframeSrc } = useIframeSrc(props)

const { popVisible, onPopShow, onPopHide } = usePopCliboard(props, modelValue)

const isLocal = computed(() => Array.isArray(props.collections))
const { value: { iconInfoList, icons, loading, activeTab } } = computed(() => {
  return isLocal.value ? useLocalIcons(props, popVisible) : useRemoteIcons(props, popVisible)
})

const { searchValue, displayIcons, resetDisplayIcons, loadDisplayIcons } = useDisplayIcons(props, icons)
</script>

<template>
  <el-popover popper-class="icon-select-popper" trigger="click" :width="width" @show="onPopShow" @hide="onPopHide">
    <template #reference>
      <el-input v-model="modelValue" class="icon-select-input" placeholder="选择图标" v-bind="$attrs">
        <template #suffix>
          <Icon class="el-input__icon" :icon="modelValue!" />
        </template>
      </el-input>
    </template>

    <template v-if="collections">
      <el-tabs v-model="activeTab" class="icon-select-tabs" @tab-change="resetDisplayIcons">
        <el-tab-pane v-for="iconInfo in iconInfoList" :key="iconInfo.name" :label="iconInfo.name" :name="iconInfo.prefix" />
      </el-tabs>
      <el-input v-model="searchValue" class="icon-select-search" placeholder="输入图标名称搜索" prefix-icon="el-icon-search" clearable />
      <el-skeleton :loading="loading" :count="10">
        <template #template>
          <el-skeleton-item variant="h3" style="margin: 8px 0" />
        </template>
        <template #default>
          <el-scrollbar :height="height">
            <div v-infinite-scroll="loadDisplayIcons" class="icon-select-list" :infinite-scroll-distance="height! / 2">
              <el-button v-for="icon in displayIcons" :key="icon" :title="icon" size="large" text style="margin: 0" @click="modelValue = icon">
                <Icon :icon="icon" width="32px" />
              </el-button>
            </div>
          </el-scrollbar>
        </template>
      </el-skeleton>
    </template>

    <template v-else>
      <el-divider>在{{ source }}中查找图标，复制名称到输入框中</el-divider>
      <iframe class="icon-select-iframe" :src="iframeSrc" frameborder="0" width="100%" :height="height" />
    </template>
  </el-popover>
</template>
