<script setup lang="ts">
import { useLocalStorage } from '@vueuse/core'

import { useInjectState } from '../../composables'
import { jsonStringify } from '../../utils'
import { HistoryTypeMap } from '../../types'

const { historyList, historyIndex, restoreHistory } = useInjectState()

const showSource = useLocalStorage('history-show-source', false)
</script>

<template>
  <div class="history-list">
    显示源码：<el-switch v-model="showSource" />
    <el-tooltip
      v-for="(item, index) in historyList"
      :key="item.timestamp"
      :disabled="!showSource"
      effect="light"
      placement="right"
    >
      <template #content>
        <el-input
          type="textarea"
          :model-value="jsonStringify(item)"
          :autosize="{ minRows: 1, maxRows: 20 }"
          style="width: 300px"
        />
      </template>
      <div class="history-item" :class="{ 'is-active': index === historyIndex }" @click="restoreHistory(index)">
        <span>
          {{ HistoryTypeMap[item.type] }}
        </span>
        <span>
          {{ new Date(item.timestamp).toLocaleString() }}
        </span>
      </div>
    </el-tooltip>
  </div>
</template>
