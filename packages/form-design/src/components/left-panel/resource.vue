<template>
  <div class="resource-list">
    <el-input v-model="searchValue" suffix-icon="el-icon-search" placeholder="搜索组件"></el-input>
    <el-collapse :model-value="resourceList.map(e => e.label)">
      <el-collapse-item v-for="group in resourceList" :key="group.label" :title="group.label" :name="group.label">
        <Draggable
          :list="group.children"
          :group="{ name: 'components', pull: 'clone', put: false }"
          :clone="cloneItem"
          :sort="false"
          itemKey="name"
          :move="onMove"
        >
          <template #item="{ element }: { element: Resource }">
            <div class="resource-item" @click="addElement(element)">
              <el-button :icon="element.icon">{{ element.title }}</el-button>
            </div>
          </template>
        </Draggable>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script setup lang="ts">
import type { Resource, ElementTreeNode } from "../../types";

import { cloneDeep } from "lodash-unified";
import { ref, computed } from "vue";
import Draggable from "vuedraggable";

import { useInjectState } from "../../composables";
import { getRandomId, checkRules } from "../../utils";

const { resources, elementTree, activeElement, workType, recordHistory, getResource } = useInjectState();

const searchValue = ref("");
const resourceList = computed(() => {
  const filters = resources.value.filter(e => {
    const { name, title, keywords } = e;
    const searchKeys = [name, title, keywords].filter(e => e).join(",");
    return searchKeys?.includes(searchValue.value);
  });
  const groups = filters.map(e => e.group);
  const groupsSet = [...new Set(groups)];
  return groupsSet.map(group => {
    return {
      label: group,
      children: filters.filter(e => e.group === group)
    };
  });
});

function cloneItem(element: Resource) {
  const { name, settingsValue } = element;
  const id = getRandomId(name);
  return cloneDeep({ name, id, settingsValue: { ...settingsValue, name, prop: id } });
}

function addElement(element: Resource) {
  if (workType.value !== "design") return;
  const ele = cloneItem(element);
  elementTree.value[0]?.children?.push(ele);
  activeElement.value = ele;
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
