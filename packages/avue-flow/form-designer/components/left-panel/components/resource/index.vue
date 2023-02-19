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
          <div class="resource-item" @click="onItemClick(element)">
            <el-button :icon="element.icon">{{ element.label }}</el-button>
          </div>
        </template>
      </Draggable>
    </el-collapse-item>
  </el-collapse>
</template>

<script setup lang="ts">
import type { ResourceElement } from "../../../../types";

import { ref, computed } from "vue";
import Draggable from "vuedraggable";
import { cloneDeep } from "lodash-es";

import { defaultResourceList } from ".";
import { useInjectState } from "../../../../composables";
import { getPropId } from "../../../../utils";

const searchValue = ref("");
const resourceList = computed(() => {
  return defaultResourceList
    .map(group => {
      const children = group.children?.filter(e => e.label?.includes(searchValue.value));
      return {
        ...group,
        children
      };
    })
    .filter(e => e.children?.length);
});

const { resourceElementList, activeItem, recordHistory } = useInjectState();
function cloneItem(element: ResourceElement) {
  return cloneDeep({ ...element, prop: getPropId(element.type) });
}
function onItemClick(element: ResourceElement) {
  const ele = cloneItem(element);
  resourceElementList.value.push(ele);
  activeItem.value = ele.prop ?? "";
  recordHistory("added");
}
</script>

<style lang="scss" scoped>
.resource-item {
  width: 50%;
  padding: 5px;
  display: inline-block;

  .el-button {
    width: 100%;
    justify-content: left;

    :deep(span) {
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      display: block;
      font-size: 12px;
    }
  }
}
</style>
