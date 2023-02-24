// @ts-nocheck
import type { AvueFormOption } from "@smallwei/avue";
import type { ResourceElement, History, Resource } from "../types";

import { ref, computed, provide, inject } from "vue";
import { cloneDeep } from "lodash-unified";

import defaultResources from "../resources";

const injectKey = Symbol("form-design-state");

export function useProvideState(props?: any) {
  const resources = computed<Resource[]>(() => [...defaultResources, ...(props.resources || [])]);
  const resourceElementList = ref<ResourceElement[]>([]);
  const activeElement = ref<ResourceElement>({});
  const hoverElement = ref<ResourceElement>({});
  const formOption = ref<AvueFormOption>({ menuBtn: false, span: 24, group: [], column: [] });
  const historyList = ref<History[]>([]);
  const historyIndex = ref(-1);
  const activeWorkspace = ref("design");

  function recordHistory(type: string) {
    historyList.value.push({
      type: type,
      timestamp: Date.now(),
      active: activeElement.value,
      list: cloneDeep(resourceElementList.value)
    });
    historyIndex.value = historyList.value.length - 1;
  }
  function restoreHistory(index: number) {
    const find = historyList.value.find((item, i) => i === index);
    if (!find) return;
    activeElement.value = find.active;
    resourceElementList.value = find.list;
    historyIndex.value = index;
  }
  function resetHistory() {
    historyIndex.value = -1;
    historyList.value = [];
    activeElement.value = {};
  }

  const state = {
    resources,
    resourceElementList,
    activeElement,
    hoverElement,
    formOption,
    historyList,
    historyIndex,
    activeWorkspace,
    recordHistory,
    restoreHistory,
    resetHistory
  };

  provide(injectKey, state);

  return state;
}

export function useInjectState() {
  return inject<ReturnType<typeof useProvideState>>(injectKey)!;
}
