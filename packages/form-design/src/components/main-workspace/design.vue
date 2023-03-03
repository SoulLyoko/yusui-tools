<template>
  <draggable
    :list="list"
    class="el-row draggable-list"
    :class="{ 'is-empty': !list.length }"
    :group="{ name: 'components' }"
    itemKey="prop"
    @change="onChange"
  >
    <template #item="{ element, index }: { element: ResourceElement, index: number }">
      <el-col
        class="draggable-item"
        :class="{
          'is-active': activeElement.prop === element.prop,
          'is-hover': hoverElement.prop === element.prop
        }"
        :span="getItemSpan(element)"
        @click.stop="activeElement = element"
        @mouseover.stop="hoverElement = element || {}"
        @mouseleave.stop="hoverElement = {}"
      >
        <avue-form :option="resolveItemOption(element)"></avue-form>
        <Design
          v-if="getResource(element.name).container"
          class="item-container"
          :list="get(element, getResource(element.name).container!, [])"
          @update:list="set(element, getResource(element.name).container!, $event)"
        ></Design>
        <div v-show="activeElement.prop === element.prop" class="item-actions">
          <el-button
            type="primary"
            size="mini"
            icon="el-icon-copy-document"
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
import { cloneDeep, omit, get, set } from "lodash-unified";

import { useInjectState } from "../../composables";
import Design from "./design.vue";
import { getRandomId } from "../../utils";

const props = defineProps<{ list: ResourceElement[] }>();
const emit = defineEmits(["update:active", "update:list"]);
const { list } = useVModels(props, emit, { passive: true, deep: true });

const { activeElement, hoverElement, formOption, recordHistory, getResource } = useInjectState();

function resolveItemOption(element: ResourceElement): AvueFormOption {
  const common = { ...cloneDeep(formOption.value), menuBtn: false };
  if (getResource(element.name).container) {
    return { ...common, column: [{ label: element.label, prop: element.prop, type: "title" }] };
  }
  return { ...common, column: [omit(element, "icon")] };
}
function getItemSpan(element: ResourceElement) {
  if (getResource(element.name).container) return 24;
  return element.span || formOption.value.span || 24;
}

function onChange(operation: Record<string, { element?: ResourceElement }>) {
  console.log("🚀 ~ file: design.vue:83 ~ onChange ~ operation:", operation);
  const operationName = Object.keys(operation)[0];
  if (!operationName) return;
  activeElement.value = operation[operationName]?.element ?? {};
  recordHistory(operationName);
}

async function handleCopyItem(element: ResourceElement) {
  const item = cloneDeep({ ...element, prop: getRandomId(element.type) });
  const { container } = getResource(item.name);
  if (container) {
    const setValue = get(item, container, []).map((e: any) => ({ ...e, prop: getRandomId(item.type) }));
    set(item, container, setValue);
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
