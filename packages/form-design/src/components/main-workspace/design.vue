<template>
  <draggable
    :list="list"
    class="el-row draggable-list"
    :class="{ 'is-empty': !list.length }"
    :group="{ name: 'components' }"
    itemKey="prop"
    :move="onMove"
    :componentData="componentData"
    @change="onChange"
  >
    <template #item="{ element, index }: { element: ElementTreeNode, index: number }">
      <el-col
        class="draggable-item"
        :class="{
          'is-active': activeElement.id === element.id,
          'is-hover': hoverElement.id === element.id,
          'is-form': element.name === 'form'
        }"
        :span="getItemSpan(element)"
        @click.stop="activeElement = element"
        @mouseover.stop="hoverElement = element || {}"
        @mouseleave.stop="hoverElement = {}"
      >
        <avue-form v-if="element.name !== 'form'" :option="resolveItemOption(element)"></avue-form>
        <Design
          v-if="getResource(element.name)?.isContainer"
          class="is-container"
          :list="element.children ?? []"
          :componentData="element"
        ></Design>
        <div v-show="element.name !== 'form' && activeElement.id === element.id" class="item-actions">
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
import type { ElementTreeNode } from "../../types";

import draggable from "vuedraggable";
import { useVModels } from "@vueuse/core";
import { cloneDeep } from "lodash-unified";

import { useInjectState } from "../../composables";
import Design from "./design.vue";
import { getRandomId, checkRules } from "../../utils";

const props = defineProps<{ list: ElementTreeNode[]; componentData: ElementTreeNode }>();
const emit = defineEmits(["update:active", "update:list"]);
const { list } = useVModels(props, emit, { passive: true, deep: true });

const { activeElement, hoverElement, formOption, recordHistory, getResource } = useInjectState();

function resolveItemOption(element: ElementTreeNode): AvueFormOption {
  const common = { ...cloneDeep(formOption.value), span: 24, menuBtn: false };
  if (getResource(element.name)?.isContainer) {
    return {
      ...common,
      column: [
        {
          label: element.settingsValue?.label,
          prop: element.settingsValue?.prop,
          type: "title",
          labelPosition: "top",
          span: 24
        }
      ]
    };
  }
  return { ...common, column: element.settingsValue ? [element.settingsValue] : [] };
}
function getItemSpan(element: ElementTreeNode) {
  if (getResource(element.name)?.isContainer) return 24;
  return element.settingsValue?.span || formOption.value.span || 24;
}

function onChange(operation: Record<string, { element?: ElementTreeNode }>) {
  const operationName = Object.keys(operation)[0];
  if (!operationName) return;
  activeElement.value = operation[operationName]?.element ?? {};
  recordHistory(operationName);
}

function copyItem(element: ElementTreeNode) {
  const item = cloneDeep({ ...element, id: getRandomId(element.name) });
  item.children = item.children?.map(copyItem) ?? [];
  return item;
}

function handleCopyItem(element: ElementTreeNode) {
  const item = copyItem(element);
  list.value.push(item);
  activeElement.value = item;
  recordHistory("added");
}
function handleDelItem(index: number) {
  list.value.splice(index, 1);
  activeElement.value = list.value[index] ?? list.value[index - 1] ?? {};
  recordHistory("removed");
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
</script>
