<template>
  <ul class="history-list">
    <li
      v-for="(item, index) in historyList"
      :key="item.timestamp"
      class="history-item"
      :class="{ 'is-active': index === historyIndex }"
      @click="restoreHistory(index)"
    >
      <span>
        {{ historyTypeMap[item.type as keyof typeof historyTypeMap] }}
      </span>
      <span>
        {{ new Date(item.timestamp).toLocaleString() }}
      </span>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { useInjectState } from "../../composables";

const { historyList, historyIndex, restoreHistory } = useInjectState();

const historyTypeMap = {
  added: "添加组件",
  moved: "移动组件",
  removed: "删除组件",
  property: "修改属性"
};
</script>
