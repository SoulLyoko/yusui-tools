<script setup lang="ts">
import { useLocalStorage } from '@vueuse/core'

import { useInjectState } from '../../composables'
import { HistoryType } from '../../constants'
import { DiffSetter } from '../../setters'
import { jsonStringify } from '../../utils'

const { historyList, historyIndex, restoreHistory } = useInjectState()

const showSource = useLocalStorage('history-show-source', false)
</script>

<template>
  <div class="history-list">
    显示源码：<el-switch v-model="showSource" />
    <el-tooltip
      v-for="(item, index) in historyList" :key="item.timestamp" :disabled="!showSource" effect="light"
      placement="right"
    >
      <template #content>
        <DiffSetter
          :original="jsonStringify(historyList[index - 1])" :modified="jsonStringify(item)" width="800px"
          height="600px"
        />
      </template>
      <div class="history-item" :class="{ 'is-active': index === historyIndex }" @click="restoreHistory(index)">
        <span>
          {{ HistoryType[item.type] }}
        </span>
        <span>
          {{ new Date(item.timestamp).toLocaleString() }}
        </span>
      </div>
    </el-tooltip>
  </div>
</template>
