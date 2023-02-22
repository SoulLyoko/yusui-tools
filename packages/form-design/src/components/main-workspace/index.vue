<template>
  <draggable :list="list" class="draggable-list" :group="{ name: 'components' }" itemKey="prop" @change="onChange">
    <template #item="{ element, index }: { element: ResourceElement, index: number }">
      <el-col
        class="draggable-item"
        :class="{
          'is-active': activeElement.prop === element.prop,
          'is-hover': hoverElement.prop === element.prop
        }"
        :span="element.span || formOption.span || 24"
        @click.stop="activeElement = element"
        @mouseover="hoverElement = element || {}"
        @mouseleave="hoverElement = {}"
      >
        <avue-form :option="resolveItemOption(element)"></avue-form>
        <Workspace
          v-if="element.type === 'dynamic' && element.display"
          class="item-slot"
          :list="element.children?.column || []"
          @update:list="element.children!.column = $event"
        ></Workspace>
        <Workspace
          v-if="element.type === 'group' && element.display"
          class="item-slot"
          :list="element.column || []"
          @update:list="element.column = $event"
        ></Workspace>
        <div v-show="activeElement.prop === element.prop" class="item-tool">
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
      </el-col>
    </template>
  </draggable>
</template>

<script setup lang="ts">
import type { AvueFormOption } from "@smallwei/avue";
import type { ResourceElement } from "../../types";

import draggable from "vuedraggable";
import { useVModels } from "@vueuse/core";
import { cloneDeep, omit } from "lodash-unified";

import { useInjectState } from "../../composables";
import Workspace from "./index.vue";
import { getRandomId } from "../../utils";

const props = defineProps<{ list: ResourceElement[] }>();
const emit = defineEmits(["update:active", "update:list"]);
const { list } = useVModels(props, emit, { passive: true, deep: true });

const { activeElement, hoverElement, formOption, recordHistory } = useInjectState();

function resolveItemOption(element: ResourceElement): AvueFormOption {
  const common = { ...cloneDeep(formOption.value), menuBtn: false };
  if (element.type === "group") {
    return { ...common, tabs: false, group: [{ ...element, arrow: false, collapse: false }] };
  }
  if (element.type === "dynamic") {
    return { ...common, column: [{ ...element, children: { ...element.children, addBtn: false, type: "form" } }] };
  }
  return { ...common, column: [omit(element, "icon")] };
}

function onChange(operation: Record<string, { element?: ResourceElement }>) {
  const operationName = Object.keys(operation)[0];
  if (!operationName) return;
  activeElement.value = operation[operationName]?.element ?? {};
  // list.value.sort((a, b) => (b.type === "group" ? -1 : 1));
  recordHistory(operationName);
}

function handleCopyItem(element: ResourceElement) {
  const item = cloneDeep({ ...element, prop: getRandomId(element.type) });
  if (element.type === "group") {
    item.column = element.column?.map(e => ({ ...e, prop: getRandomId(element.type) }));
  }
  if (element.type === "dynamic") {
    item.children!.column = element.children?.column?.map(e => ({ ...e, prop: getRandomId(element.type) }));
  }
  list.value.push(item);
  activeElement.value = item;
  recordHistory("added");
}
function handleDelItem(index: number) {
  list.value.splice(index, 1);
  activeElement.value = list.value[index] ?? list.value[index - 1] ?? {};
  recordHistory("removed");
}
</script>
