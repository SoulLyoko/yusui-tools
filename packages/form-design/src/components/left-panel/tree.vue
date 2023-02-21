<template>
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
      <div style="width: 100%" @mouseover="hoverElement = data || {}" @mouseleave="hoverElement = {}">
        {{ node.label }}
      </div>
    </template>
  </el-tree>
</template>

<script setup lang="ts">
import type { ResourceElement } from "../../types";

import { computed } from "vue";

import { useInjectState } from "../../composables";

const { resourceElementList, activeElement, hoverElement, recordHistory } = useInjectState();
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
  activeElement.value = data ?? {};
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
</script>
