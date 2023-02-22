<template>
  <el-input v-model="searchValue" suffix-icon="el-icon-search" placeholder="搜索组件"></el-input>
  <el-collapse :model-value="resourceList.map(e => e.label)">
    <el-collapse-item v-for="group in resourceList" :key="group.label" :title="group.label" :name="group.label">
      <Draggable
        :list="group.children"
        :group="{ name: 'components', pull: 'clone', put: false }"
        :clone="cloneItem"
        :sort="false"
        itemKey="label"
      >
        <template #item="{ element }: { element: (typeof group.children)[number] }">
          <div class="resource-item" @click="addElement(element)">
            <el-button :icon="element.icon">{{ element.label }}</el-button>
          </div>
        </template>
      </Draggable>
    </el-collapse-item>
  </el-collapse>
</template>

<script setup lang="ts">
import type { Resource } from "../../types";

import { cloneDeep, omit } from "lodash-unified";
import { ref, computed } from "vue";
import Draggable from "vuedraggable";

import { useInjectState } from "../../composables";
import { getRandomId } from "../../utils";

const { resources, resourceElementList, activeElement, recordHistory } = useInjectState();

const searchValue = ref("");
const resourceList = computed(() => {
  const groups = resources.value.map(e => e.group);
  const groupsSet = [...new Set(groups)];
  return groupsSet.map(group => {
    return {
      label: group,
      children: resources.value.filter(e => e.group === group)
    };
  });
});

function cloneItem(element: Resource) {
  return cloneDeep(omit({ ...element, prop: getRandomId(element.type) }, ["icon", "group", "settings"]));
}

function addElement(element: Resource) {
  const ele = cloneItem(element);
  resourceElementList.value.push(ele);
  activeElement.value = ele;
  recordHistory("added");
}
</script>
