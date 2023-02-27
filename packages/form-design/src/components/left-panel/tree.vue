<template>
  <el-tree
    :data="treeData"
    default-expand-all
    draggable
    node-key="prop"
    :expand-on-click-node="false"
    :allow-drop="allowDrop"
    @node-click="onNodeClick"
    @node-drop="onNodeDrop"
  >
    <template #default="{ data }">
      <div style="width: 100%" @mouseover="hoverElement = data || {}" @mouseleave="hoverElement = {}">
        {{ data.label || data.resource?.title }}
      </div>
    </template>
  </el-tree>
</template>

<script setup lang="ts">
import type { ResourceElement } from "../../types";

import { computed } from "vue";
import { cloneDeep, get, set, omit } from "lodash-unified";

import { useInjectState } from "../../composables";

const { resourceElementList, activeElement, hoverElement, recordHistory } = useInjectState();
const treeData = computed(() => {
  const children = cloneDeep<ResourceElement[]>(
    resourceElementList.value.map(item => {
      const { container } = item.resource ?? {};
      return {
        ...item,
        children: container && get(item, container)
      };
    })
  );
  return [
    {
      label: children.length ? "表单" : "表单(空)",
      children
    }
  ];
});
function onNodeClick(data: ResourceElement) {
  activeElement.value = data ?? {};
}
function allowDrop(draggingNode: any, dropNode: { data: ResourceElement }, type: string) {
  if (dropNode.data.label === "表单") return false;
  return type !== "inner" || dropNode.data.resource?.container;
}

function onNodeDrop() {
  resourceElementList.value = cloneDeep(
    treeData.value[0].children.map(item => {
      const temp = omit(item, ["children"]);
      const _children = item.children;
      const { container } = item.resource ?? {};
      container && set(temp, container, _children);
      return temp as ResourceElement;
    })
  );
  recordHistory("moved");
}
</script>
