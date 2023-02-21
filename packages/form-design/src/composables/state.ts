import type { AvueFormOption } from "@smallwei/avue";
import type { ResourceElement, History, Resource } from "../types";

import { ref, computed, provide, inject } from "vue";
import { cloneDeep } from "lodash-es";

import * as defaultResourcesMap from "../resources";

const injectKey = Symbol("form-designer-state");

export function useProvideState(props?: any) {
  const resources = computed<Resource[]>(() => [...Object.values(defaultResourcesMap), ...(props.resources || [])]);
  const resourceElementList = ref<ResourceElement[]>([]);
  const activeElement = ref<ResourceElement>({});
  const hoverElement = ref<ResourceElement>({});
  const formOption = ref<AvueFormOption>({ menuBtn: false, span: 24, group: [], column: [] });
  const hitoryList = ref<History[]>([]);

  function recordHistory(type: string) {
    hitoryList.value.push({
      type: type,
      timestamp: Date.now(),
      active: activeElement.value,
      list: cloneDeep(resourceElementList.value)
    });
  }
  function restoreHistory(history: History) {
    activeElement.value = history.active;
    resourceElementList.value = history.list;
  }

  const state = {
    resources,
    resourceElementList,
    activeElement,
    hoverElement,
    formOption,
    hitoryList,
    recordHistory,
    restoreHistory
  };
  provide(injectKey, state);
  return state;
}

export function useInjectState() {
  return inject<ReturnType<typeof useProvideState>>(injectKey)!;
}
