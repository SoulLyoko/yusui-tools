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
  const historyList = ref<History[]>([{ type: "init", timestamp: Date.now(), active: {}, list: [] }]);
  const historyIndex = ref(-1);
  const workType = ref("design");
  const deviceType = ref("pc");

  function recordHistory(type: string) {
    // resourceElementList.value.sort((a, b) => (b.type === "group" ? -1 : 1));
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
    resourceElementList.value = cloneDeep(find.list);
    activeElement.value = cloneDeep(find.active);
    historyIndex.value = index;
  }
  function resetHistory() {
    resourceElementList.value = [];
    activeElement.value = {};
    historyIndex.value = -1;
    historyList.value = [];
  }

  const state = {
    resources,
    resourceElementList,
    activeElement,
    hoverElement,
    formOption,
    historyList,
    historyIndex,
    workType,
    deviceType,
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
