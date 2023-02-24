<template>
  <el-row :gutter="20">
    <el-col :span="12" style="align-self: center">
      <el-button-group size="small">
        <el-button
          :disabled="historyIndex <= 0"
          title="撤回"
          icon="el-icon-arrow-left"
          @click="restoreHistory(historyIndex - 1)"
        >
        </el-button>
        <el-button
          :disabled="historyIndex === historyList.length - 1"
          title="重做"
          icon="el-icon-arrow-right"
          @click="restoreHistory(historyIndex + 1)"
        ></el-button>
        <el-button
          :disabled="!resourceElementList.length"
          title="清空"
          icon="el-icon-delete"
          @click="resourceElementList = []"
        ></el-button>
      </el-button-group>
    </el-col>
    <el-col :span="12" style="text-align: right">
      <el-radio-group v-model="activeWorkspace" size="small" style="font-size: unset">
        <el-radio-button v-for="item in workspaceTypes" :key="item.value" :label="item.value">
          <el-link :title="item.label" :icon="item.icon" :underline="false" style="color: inherit"></el-link>
        </el-radio-button>
      </el-radio-group>
    </el-col>
  </el-row>
</template>

<script setup lang="ts">
import { useInjectState } from "../../composables";

const { activeWorkspace, historyList, historyIndex, resourceElementList, restoreHistory, resetHistory } =
  useInjectState();

const workspaceTypes = [
  { label: "设计", value: "design", icon: "el-icon-brush" },
  { label: "源码", value: "source", icon: "el-icon-more" },
  { label: "预览", value: "preview", icon: "el-icon-view" }
];
</script>
