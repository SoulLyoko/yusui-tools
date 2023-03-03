<template>
  <div class="history-list">
    显示源码：<el-switch v-model="showTooltip"></el-switch>
    <el-tooltip
      v-for="(item, index) in historyList"
      :key="item.timestamp"
      :disabled="!showTooltip"
      effect="light"
      placement="right"
    >
      <template #content>
        <el-input
          type="textarea"
          :modelValue="jsonStringify(item)"
          :autosize="{ minRows: 1, maxRows: 20 }"
          style="width: 300px"
        />
      </template>
      <div class="history-item" :class="{ 'is-active': index === historyIndex }" @click="restoreHistory(index)">
        <span>
          {{ historyTypeMap[item.type as keyof typeof historyTypeMap] }}
        </span>
        <span>
          {{ new Date(item.timestamp).toLocaleString() }}
        </span>
      </div>
    </el-tooltip>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

import { useInjectState } from "../../composables";
import { jsonStringify } from "../../utils";

const { historyList, historyIndex, restoreHistory } = useInjectState();

const historyTypeMap = {
  init: "初始化",
  added: "添加组件",
  moved: "移动组件",
  removed: "删除组件",
  property: "修改属性"
};

const showTooltip = ref(false);
</script>
