import type { AvueFormOption } from "@smallwei/avue";
import type { Resource, History, Props, ElementTreeNode } from "../types";

import { ref, computed, provide, inject, watch, nextTick } from "vue";
import { useVModels } from "@vueuse/core";
import { cloneDeep, isEqual, omit } from "lodash-unified";

import defaultResources from "../resources";
import { adapterIn, adapterOut } from "../utils";

const injectKey = Symbol("form-design-state");

export function useProvideState(props: Props) {
  const vModels = useVModels(props);
  const { modelValue } = vModels as Required<typeof vModels>;

  const resources = computed(() => props.resources || defaultResources);
  const resourcesMap = computed<Record<string, Resource>>(() =>
    Object.fromEntries(resources.value.map(item => [item.name, item]))
  );

  const elementTree = ref<ElementTreeNode[]>([]);
  const activeElement = ref<ElementTreeNode>(adapterIn(modelValue.value ?? {})[0]);
  const hoverElement = ref<ElementTreeNode>({});

  const formOption = computed<AvueFormOption>(
    () => omit(elementTree.value[0]?.settingsValue, ["column", "group"]) ?? {}
  );

  const initialHistory = { type: "init", timestamp: Date.now(), active: {}, tree: adapterIn(modelValue.value ?? {}) };
  const historyList = ref<History[]>([initialHistory]);
  const historyIndex = ref(0);

  const workType = ref("design");
  const deviceType = ref("pc");

  watch(
    modelValue,
    val => {
      if (isEqual(elementTree.value, adapterIn(val || {}))) return;
      elementTree.value = adapterIn(val || {});
    },
    { immediate: true, deep: true }
  );
  watch(
    elementTree,
    () => {
      modelValue.value = adapterOut(elementTree.value);
    },
    { deep: true }
  );

  function getResource(name?: string) {
    if (name) {
      return resourcesMap.value[name];
    } else {
      return;
    }
  }

  async function recordHistory(type: string) {
    // resourceElementList.value.sort((a, b) => (b.type === "group" ? -1 : 1));
    await nextTick();
    historyList.value.push({
      type: type,
      timestamp: Date.now(),
      active: cloneDeep(activeElement.value),
      tree: cloneDeep(elementTree.value)
    });
    historyIndex.value = historyList.value.length - 1;
  }
  function restoreHistory(index: number) {
    const find = historyList.value.find((e, i) => i === index);
    if (!find) return;
    elementTree.value = cloneDeep(find.tree);
    activeElement.value = cloneDeep(find.active);
    historyIndex.value = index;
  }
  function resetHistory() {
    elementTree.value = [];
    activeElement.value = {};
    historyIndex.value = 0;
    historyList.value = [initialHistory];
  }

  const state = {
    resources,
    resourcesMap,
    elementTree,
    activeElement,
    hoverElement,
    formOption,
    historyList,
    historyIndex,
    workType,
    deviceType,
    modelValue,
    recordHistory,
    restoreHistory,
    resetHistory,
    getResource
  };

  provide(injectKey, state);

  return state;
}

export function useInjectState() {
  return inject<ReturnType<typeof useProvideState>>(injectKey)!;
}
