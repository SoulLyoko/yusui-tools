<script setup lang="ts">
import { DiffEditor } from '@guolao/vue-monaco-editor'
import { useLocalStorage } from '@vueuse/core'
import { computed } from 'vue'

import { useInjectState } from '../../composables'
import { HistoryType } from '../../constants'
import { jsonStringify } from '../../utils'

const { historyList, historyIndex, restoreHistory } = useInjectState()

const showSource = useLocalStorage('history-show-source', false)

const diffOptions = {
  renderValidationDecorations: 'off' as const,
  readOnly: true,
}

const theme = computed(() => {
  const isDark = document.documentElement.className.includes('dark')
  return isDark ? 'vs-dark' : 'light'
})
</script>

<template>
  <div class="history-list">
    显示源码：<el-switch v-model="showSource" />
    <el-tooltip
      v-for="(item, index) in historyList" :key="item.timestamp" :disabled="!showSource" effect="light"
      placement="right"
    >
      <template #content>
        <DiffEditor
          :original="jsonStringify(historyList[index - 1])" :modified="jsonStringify(item)" :theme="theme"
          :options="diffOptions" language="javascript" width="800px" height="600px"
        />
        <!-- <el-input
          type="textarea"
          :model-value="jsonStringify(item)"
          :autosize="{ minRows: 1, maxRows: 20 }"
          style="width: 300px"
        /> -->
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
