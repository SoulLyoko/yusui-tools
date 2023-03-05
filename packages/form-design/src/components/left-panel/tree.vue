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
          {{ data.label || getResource(data.name)?.title }}
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
import { getRandomId, checkRules } from "../../utils";

type ElementTreeNode = ResourceElement & { children?: ElementTreeNode[] };

const { resourceElementList, activeElement, hoverElement, recordHistory, getResource } = useInjectState();

const treeData = computed(() => {
  const children = buildComponentTree(cloneDeep(resourceElementList.value));
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
  if (type === "inner") {
    return checkRules(getResource(draggingNode.data.name), getResource(dropNode.data.name));
  }
  return true;
}
function onNodeClick(data: ResourceElement) {
  activeElement.value = data ?? {};
}

const treeRef = ref<InstanceType<typeof ElTree>>();

function onCopy(node: Node & { data: ElementTreeNode }) {
  const item = copyItem(node.data);
  treeRef.value?.append(item, node.parent);
  updateList();
  recordHistory("added");
}
function onRemove(node: Node & { data: ResourceElement }) {
  treeRef.value?.remove(node);
  updateList();
  recordHistory("removed");
}
function onNodeDrop() {
  updateList();
  recordHistory("moved");
}

function buildComponentTree(list: ResourceElement[]): ElementTreeNode[] {
  return list.map(item => {
    const { container } = getResource(item.name) ?? {};
    const children = container && get(item, container);
    return {
      ...item,
      children: children && buildComponentTree(children)
    };
  });
}
function buildElementTree(tree: ElementTreeNode[]): ResourceElement[] {
  return tree.map(item => {
    const temp = omit(item, ["children"]);
    const _children = item.children;
    const { container } = getResource(item.name) ?? {};
    container && _children && set(temp, container, buildElementTree(_children));
    return temp;
  });
}
function copyItem(element: ElementTreeNode) {
  const item = cloneDeep({ ...element, prop: getRandomId(element.name) });
  if (item.children) {
    item.children = item.children.map(copyItem);
  }
  return item;
}

function updateList() {
  resourceElementList.value = buildElementTree(cloneDeep(treeData.value[0].children));
}
</script>
