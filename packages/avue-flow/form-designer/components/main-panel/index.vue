<template>
  <draggable :list="list" class="draggable-list" :group="{ name: 'components' }" itemKey="prop" @change="onChange">
    <template #item="{ element, index }: { element: ResourceElement, index: number }">
      <div
        class="draggable-item"
        :class="{
          'is-active': activeItem === element.prop,
          'is-hover': hoverItem === element.prop
        }"
        @click.stop="onItemClick(element)"
        @mouseover="hoverItem = element.prop || ''"
        @mouseleave="hoverItem = ''"
      >
        <avue-form :option="resolveItemOption(element)"></avue-form>
        <MainPanel
          v-if="element.type === 'group' && element.display"
          class="item-slot"
          :list="element.column || []"
          @update:list="element.column = $event"
        ></MainPanel>
        <MainPanel
          v-if="element.type === 'dynamic' && element.display"
          class="item-slot"
          :list="element.children?.column || []"
          @update:list="element.children!.column = $event"
        ></MainPanel>
        <div v-show="activeItem === element.prop" class="item-tool">
          <el-button
            type="primary"
            size="mini"
            icon="el-icon-document"
            circle
            plain
            @click.stop="handleCopyItem(element)"
          ></el-button>
          <el-button
            type="danger"
            size="mini"
            icon="el-icon-delete"
            circle
            plain
            @click.stop="handleDelItem(index)"
          ></el-button>
        </div>
      </div>
    </template>
  </draggable>
</template>

<script setup lang="ts">
import type { AvueFormOption } from "@smallwei/avue";
import type { ResourceElement } from "../../types";

import draggable from "vuedraggable";
import { useVModels } from "@vueuse/core";
import { cloneDeep } from "lodash-es";

import { useInjectState } from "../../composables";
import MainPanel from "./index.vue";
import { getPropId } from "../../utils";

const props = defineProps<{
  list: ResourceElement[];
}>();
const emit = defineEmits(["update:active", "update:list"]);
const { list } = useVModels(props, emit, { passive: true, deep: true });

const { activeItem, hoverItem, formOption, recordHistory } = useInjectState();

function resolveItemOption(element: ResourceElement): AvueFormOption {
  const common = { ...cloneDeep(formOption.value), menuBtn: false, span: 24 };
  if (element.type === "group") {
    return { ...common, group: [{ ...element, arrow: false, collapse: false }] };
  }
  if (element.type === "dynamic") {
    return { ...common, column: [{ ...element, children: { ...element.children, addBtn: false, type: "form" } }] };
  }
  return { ...common, column: [element] };
}

function onChange(e: {
  added?: { element: ResourceElement };
  moved?: {
    element: ResourceElement;
  };
}) {
  const { added, moved } = e;
  if (added) {
    activeItem.value = added.element.prop ?? "";
  }
  if (moved) {
    activeItem.value = moved.element.prop ?? "";
  }
  // list.value.sort((a, b) => (b.type === "group" ? -1 : 1));
  recordHistory(Object.keys(e)[0]);
}

function handleCopyItem(element: ResourceElement) {
  const item = cloneDeep({ ...element, prop: getPropId(element.type) });
  if (element.type === "group") {
    item.column = element.column?.map(e => ({ ...e, prop: getPropId(element.type) }));
  }
  if (element.type === "dynamic") {
    item.children!.column = element.children?.column?.map(e => ({ ...e, prop: getPropId(element.type) }));
  }
  list.value = [...list.value, item];
  activeItem.value = item.prop;
  recordHistory("added");
}
function handleDelItem(index: number) {
  list.value = list.value.filter((e, i) => i !== index);
  activeItem.value = list.value[index]?.prop ?? list.value[index - 1]?.prop ?? "";
  recordHistory("removed");
}
function onItemClick(element: ResourceElement) {
  activeItem.value = element.prop ?? "";
}
</script>

<style lang="scss" scoped>
.draggable-list {
  height: 100%;
  .draggable-item {
    position: relative;
    padding: 1px;
    &.is-hover {
      outline: 1px dashed var(--el-color-primary);
    }
    &.is-active {
      outline: 1px solid var(--el-color-primary);
    }

    .item-slot {
      margin-top: 1px;
      min-height: 200px;
      outline: 1px dashed var(--el-color-info);
    }
    .item-tool {
      position: absolute;
      right: 10px;
      bottom: -16px;
      z-index: 1;
    }
  }
}
</style>
