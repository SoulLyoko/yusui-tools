<template>
  <el-row :gutter="20">
    <el-col :span="8" style="align-self: center">
      <el-button-group size="small">
        <el-button
          :disabled="historyIndex === 0"
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
          :disabled="!elementTree.children?.length"
          title="清空"
          icon="el-icon-delete"
          @click="resetHistory()"
        ></el-button>
      </el-button-group>
    </el-col>
    <el-col :span="8" style="text-align: center">
      <el-radio-group v-model="deviceType" size="small" style="font-size: unset">
        <el-radio-button v-for="item in deviceTypes" :key="item.value" :label="item.value">
          <el-link
            :title="item.label"
            :icon="item.icon"
            :underline="false"
            style="color: inherit"
            @click="deviceType = item.value"
          ></el-link>
        </el-radio-button>
      </el-radio-group>
    </el-col>
    <el-col :span="8" style="text-align: right">
      <el-radio-group v-model="workType" size="small" style="font-size: unset">
        <el-radio-button v-for="item in workTypes" :key="item.value" :label="item.value">
          <el-link
            :title="item.label"
            :icon="item.icon"
            :underline="false"
            style="color: inherit"
            @click="workType = item.value"
          ></el-link>
        </el-radio-button>
      </el-radio-group>
    </el-col>
  </el-row>
</template>

<script setup lang="ts">
import { useInjectState } from "../../composables";

const { elementTree, workType, deviceType, historyList, historyIndex, restoreHistory, resetHistory } = useInjectState();

const deviceTypes = [
  { label: "PC端", value: "pc", icon: "el-icon-monitor" },
  { label: "移动端", value: "mobile", icon: "el-icon-cellphone" }
];

const workTypes = [
  { label: "设计", value: "design", icon: "el-icon-brush" },
  { label: "源码", value: "source", icon: "el-icon-more" },
  { label: "预览", value: "preview", icon: "el-icon-view" }
];
</script>
