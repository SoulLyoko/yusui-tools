<template>
  <draggable
    :list="list"
    class="el-row draggable-list"
    :class="{ 'is-empty': !list.length, 'is-root': componentData.isRoot }"
    :group="{ name: 'components' }"
    :componentData="componentData"
    itemKey="id"
    :move="onMove"
    @change="onChange"
  >
    <template #item="{ element, index }: { element: ElementTreeNode, index: number }">
      <el-col
        class="draggable-item"
        :class="{
          'is-active': activeElement.id === element.id,
          'is-hover': hoverElement.name && hoverElement.id === element.id
        }"
        :span="getItemSpan(element)"
        @click.stop="setActiveElement(element)"
        @mouseover.stop="hoverElement = element || {}"
        @mouseleave.stop="hoverElement = {}"
      >
        <avue-form v-if="element.name !== 'form'" :option="getItemOption(element)"></avue-form>
        <Design
          v-if="getResource(element.name)?.isContainer"
          class="is-container"
          :componentData="element"
          :list="element.children ?? []"
          @update:list="element.children = $event"
        ></Design>
        <div v-show="activeElement.id === element.id" class="item-actions">
          <el-button
            v-for="action in getActionList(element)"
            :key="action.name"
            v-bind="action"
            circle
            plain
            @click.stop="action.handler(element, index)"
          ></el-button>
        </div>
      </el-col>
    </template>
  </draggable>
</template>

<script setup lang="ts">
import type { AvueFormOption } from "@smallwei/avue";
import type { ElementTreeNode, HistoryType, DesignAction } from "../../types";

import draggable from "vuedraggable";
import { useVModels } from "@vueuse/core";
import { cloneDeep } from "lodash-unified";

import { useInjectState } from "../../composables";
import Design from "./design.vue";
import { checkRules, copyItem } from "../../utils";

const props = defineProps<{ list: ElementTreeNode[]; componentData: ElementTreeNode }>();
const emit = defineEmits(["update:active", "update:list"]);
const { list } = useVModels(props, emit, { passive: true, deep: true });

const { activeElement, hoverElement, formOption, setActiveElement, recordHistory, getResource } = useInjectState();

function getItemOption(element: ElementTreeNode): AvueFormOption {
  const common = { ...cloneDeep(formOption.value), span: 24, menuBtn: false };
  const designOption = getResource(element.name)?.designOption;
  if (typeof designOption === "object") {
    return { ...common, ...designOption };
  } else if (typeof designOption === "function") {
    return { ...common, ...designOption(element) };
  } else {
    return { ...common, column: element.props ? [element.props] : [] };
  }
}
function getItemSpan(element: ElementTreeNode) {
  if (getResource(element.name)?.isContainer) return 24;
  return element.props?.span || formOption.value.span || 24;
}

function onChange(operation: Record<string, { element?: ElementTreeNode }>) {
  const operationName = Object.keys(operation)[0] as HistoryType;
  if (!operationName) return;
  setActiveElement(operation[operationName]?.element);
  recordHistory(operationName);
}

function onCopy(element: ElementTreeNode) {
  const item = copyItem(element);
  list.value.push(item);
  setActiveElement(item);
  recordHistory("added");
}
function onRemove(element: ElementTreeNode, index: number) {
  list.value.splice(index, 1);
  setActiveElement(list.value[index] ?? list.value[index - 1]);
  recordHistory("removed");
}
function onClearChildren(element: ElementTreeNode) {
  if (!element.children?.length) return;
  element.children = [];
  setActiveElement(element);
  recordHistory("clear");
}

function onMove({
  draggedContext,
  relatedContext
}: {
  draggedContext: { element: ElementTreeNode };
  relatedContext: { component: { componentData?: ElementTreeNode } };
}) {
  return checkRules(
    getResource(draggedContext.element.name),
    getResource(relatedContext.component.componentData?.name)
  );
}

const actions = [
  { name: "copy", type: "primary", icon: "el-icon-copy-document", handler: onCopy },
  { name: "delete", type: "danger", icon: "el-icon-delete", handler: onRemove },
  { name: "clear", type: "warning", icon: "el-icon-folder-delete", handler: onClearChildren }
];
function getActionList(element: ElementTreeNode) {
  return actions.filter(e => showActions(element, e.name as DesignAction));
}
function showActions(element: ElementTreeNode, type: DesignAction) {
  const { disabledActions, isContainer } = getResource(element.name) ?? {};
  const enable = !disabledActions?.includes(type);
  if (type === "clear") {
    return isContainer && enable;
  }
  return enable;
}
</script>
