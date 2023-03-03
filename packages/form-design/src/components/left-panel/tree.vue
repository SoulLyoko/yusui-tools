<template>
  <el-tree
    ref="treeRef"
    node-key="prop"
    :data="treeData"
    default-expand-all
    draggable
    :expand-on-click-node="false"
    :allow-drop="allowDrop"
    @node-click="onNodeClick"
    @node-drop="onNodeDrop"
  >
    <template #default="{ node, data }: { node: any, data: ResourceElement }">
      <el-row style="width: 100%" :gutter="20" @mouseover="hoverElement = data || {}" @mouseleave="hoverElement = {}">
        <el-col :span="18">
          {{ data.label || getResource(data.name).title }}
        </el-col>
        <el-col v-show="node.level != 1" :span="2">
          <el-link type="primary" icon="el-icon-copy-document" :underline="false" @click="onCopy(node)"></el-link>
        </el-col>
        <el-col v-show="node.level != 1" :span="2">
          <el-link type="danger" icon="el-icon-delete" :underline="false" @click="onRemove(node)"></el-link>
        </el-col>
      </el-row>
      <!-- <div style="width: 100%" :gutter="20" @mouseover="hoverElement = data || {}" @mouseleave="hoverElement = {}">
        {{ data.label || getResource(data.name).title }}
      </div> -->
    </template>
  </el-tree>
</template>

<script setup lang="ts">
import type { ElTree } from "element-plus";
import type Node from "element-plus/es/components/tree/src/model/node.d";
import type { ResourceElement } from "../../types";

import { computed, ref } from "vue";
import { cloneDeep, get, set, omit } from "lodash-unified";

import { useInjectState } from "../../composables";
import { getRandomId } from "../../utils";

const { resourceElementList, activeElement, hoverElement, recordHistory, getResource } = useInjectState();
const treeData = computed(() => {
  const children = cloneDeep<ResourceElement[]>(
    resourceElementList.value.map(item => {
      const { container } = getResource(item.name);
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

function allowDrop(
  draggingNode: { data: ResourceElement },
  dropNode: { data: ResourceElement; level: number },
  type: string
) {
  // 顶级不能被放置
  if (dropNode.level === 1) return false;
  const isDropContainer = !!getResource(dropNode.data.name).container;
  const isDraggingContainer = !!getResource(draggingNode.data.name).container;
  // 非容器节点不能被放置
  if (type === "inner" && !isDropContainer) return false;
  // 容器组件不能放置到容器节点内
  if (type === "inner" && isDraggingContainer && isDropContainer) return false;
  return true;
}
function onNodeClick(data: ResourceElement) {
  activeElement.value = data ?? {};
}
function onNodeDrop() {
  updateList();
  recordHistory("moved");
}

function updateList() {
  resourceElementList.value = cloneDeep(
    treeData.value[0].children.map(item => {
      const temp = omit(item, ["children"]);
      const _children = item.children;
      const { container } = getResource(item.name);
      container && set(temp, container, _children);
      return temp as ResourceElement;
    })
  );
}

const treeRef = ref<InstanceType<typeof ElTree>>();
function onCopy(node: Node & { data: ResourceElement }) {
  const { data } = node;
  const item = cloneDeep({ ...data, prop: getRandomId(data.type) });
  const { container } = getResource(node.data.name);
  if (container) {
    const setValue = get(item, container, []).map((e: any) => ({ ...e, prop: getRandomId(item.type) }));
    set(item, container, setValue);
  }
  treeRef.value?.append(item, node.parent);
  updateList();
  recordHistory("added");
}
function onRemove(node: Node & { data: ResourceElement }) {
  treeRef.value?.remove(node);
  updateList();
  recordHistory("removed");
}
</script>
