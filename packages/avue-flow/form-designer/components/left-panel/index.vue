<template>
  <el-tabs tab-position="top" stretch>
    <el-tab-pane>
      <template #label>
        <el-link title="组件" icon="el-icon-menu" :underline="false"></el-link>
      </template>
      <Resource></Resource>
    </el-tab-pane>
    <el-tab-pane>
      <template #label>
        <el-link title="大纲" icon="el-icon-operation" :underline="false"></el-link>
      </template>
      <el-tree
        :data="treeData"
        default-expand-all
        draggable
        :expand-on-click-node="false"
        :allow-drop="allowDrop"
        @node-click="onNodeClick"
        @node-drop="onNodeDrop"
      >
        <template #default="{ node, data }">
          <div style="width: 100%" @mouseover="hoverItem = data.prop || ''" @mouseleave="hoverItem = ''">
            {{ node.label }}
          </div>
        </template>
      </el-tree>
    </el-tab-pane>
    <el-tab-pane>
      <template #label>
        <el-link title="历史记录" icon="el-icon-clock" :underline="false"></el-link>
      </template>
      <ul>
        <li v-for="item in hitoryList" :key="item.timestamp" @click="restoreHistory(item)">
          {{ item.type }}
          {{ new Date(item.timestamp).toLocaleString() }}
        </li>
      </ul>
    </el-tab-pane>
    <el-tab-pane>
      <template #label>
        <el-link title="代码" icon="el-icon-more-filled" :underline="false"></el-link>
      </template>
      <el-input v-model="code" type="textarea" :autosize="{ minRows: 30 }"></el-input>
    </el-tab-pane>
  </el-tabs>
</template>

<script setup lang="ts">
import type { ResourceElement } from "../../types";

import { computed } from "vue";

import Resource from "./components/resource/index.vue";
import { useInjectState } from "../../composables";
import {
  formOptionStringify,
  formOptionParse,
  transformResouceToFormOption,
  transformFormOptionToResouce
} from "../../utils";

const { resourceElementList, formOption, hitoryList, activeItem, hoverItem, recordHistory, restoreHistory } =
  useInjectState();

const treeData = computed(() => {
  return [
    {
      label: "表单",
      children: resourceElementList.value.map(item => {
        return {
          ...item,
          children: item.children?.column ?? item.column ?? []
        };
      })
    }
  ];
});
function onNodeClick(data: ResourceElement) {
  activeItem.value = data.prop ?? "";
}
function allowDrop(draggingNode: any, dropNode: { data: ResourceElement }, type: string) {
  if (dropNode.data.label === "表单") return false;
  return type !== "inner" || ["group", "dynamic"].includes(dropNode.data.type!);
}

function onNodeDrop() {
  resourceElementList.value = treeData.value[0].children.map(item => {
    if (item.type === "group") {
      return { ...item, column: item.children, children: [] };
    }
    if (item.type === "dynamic") {
      return { ...item, children: { column: item.children } };
    }
    return item;
  }) as ResourceElement[];
  recordHistory("moved");
}

const code = computed({
  get() {
    const option = {
      ...formOption.value,
      ...transformResouceToFormOption(resourceElementList.value)
    };
    return formOptionStringify(option);
  },
  set(val) {
    formOption.value = formOptionParse(val);
    resourceElementList.value = transformFormOptionToResouce(formOption.value);
  }
});
</script>
