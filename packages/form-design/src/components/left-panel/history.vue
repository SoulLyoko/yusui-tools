<template>
  <div class="history-list">
    <el-tooltip v-for="(item, index) in historyList" :key="item.timestamp" effect="light">
      <template #content>
        <el-input
          type="textarea"
          :modelValue="json5Stringify(item.list)"
          :autosize="{ minRows: 10, maxRows: 20 }"
          style="width: 300px; height: 440px"
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
import { useInjectState } from "../../composables";
import { json5Stringify } from "../../utils";

const { historyList, historyIndex, restoreHistory } = useInjectState();

const historyTypeMap = {
  init: "初始化",
  added: "添加组件",
  moved: "移动组件",
  removed: "删除组件",
  property: "修改属性"
};
</script>
