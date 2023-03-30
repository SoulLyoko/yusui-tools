<template>
  <div class="resource-list">
    <el-input v-model="searchValue" suffix-icon="el-icon-search" placeholder="搜索组件"></el-input>
    <el-collapse :model-value="resourcesList.map(e => e.label)">
      <el-collapse-item v-for="group in resourcesList" :key="group.label" :title="group.label" :name="group.label">
        <Draggable
          :list="group.children"
          :group="{ name: 'components', pull: 'clone', put: false }"
          :clone="cloneItem"
          :sort="false"
          itemKey="name"
          :move="onMove"
        >
          <template #item="{ element }: { element: Resource }">
            <div class="resource-item">
              <el-button :icon="element.icon" @click="addElement(element)">{{ element.title }}</el-button>
            </div>
          </template>
        </Draggable>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script setup lang="ts">
import type { Resource, ElementTreeNode } from "../../types";

import { ref, computed } from "vue";
import Draggable from "vuedraggable";

import { useInjectState } from "../../composables";
import { checkRules, cloneItem } from "../../utils";

const { groupList, resources, elementTree, workType, setActiveElement, recordHistory, getResource } = useInjectState();

const searchValue = ref("");
const resourcesList = computed(() => {
  const filters = Object.values(resources.value).filter(e => {
    const { name, title, keywords } = e;
    const searchKeys = [name, title, keywords].filter(e => e).join(",");
    return !e.disabled && searchKeys?.includes(searchValue.value);
  });
  return groupList.value
    .map(group => {
      return {
        label: group,
        children: filters
          .filter(e => e.group === group)
          .map((e, i) => {
            return {
              ...e,
              priority: e.priority ?? i
            };
          })
          .sort((a, b) => a.priority - b.priority)
      };
    })
    .filter(e => e.children.length);
});

function addElement(element: Resource) {
  if (workType.value !== "design") return;
  const ele = cloneItem(element);
  elementTree.value?.children?.push(ele);
  setActiveElement(ele);
  recordHistory("added");
}

function onMove({
  draggedContext,
  relatedContext
}: {
  draggedContext: { element: Resource };
  relatedContext: { component: { componentData?: ElementTreeNode } };
}) {
  return checkRules(
    getResource(draggedContext.element.name),
    getResource(relatedContext.component.componentData?.name)
  );
}
</script>
