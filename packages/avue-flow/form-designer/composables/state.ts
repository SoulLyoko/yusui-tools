import type { AvueFormOption } from "@smallwei/avue";
import type { ResourceElement, History } from "../types";

import { ref, computed, provide, inject } from "vue";
import { cloneDeep } from "lodash-es";

const injectKey = Symbol("form-designer-state");

export function useProvideState() {
  const resourceElementList = ref<ResourceElement[]>([]);
  const activeItem = ref("");
  const hoverItem = ref("");
  const formOption = ref<AvueFormOption>({ menuBtn: false, span: 24, group: [], column: [] });
  const hitoryList = ref<History[]>([]);
  const activeElement = computed(() => {
    let element: ResourceElement = {};
    resourceElementList.value.forEach((item, index) => {
      if (item.prop === activeItem.value) {
        element = cloneDeep(item);
        element.path = [index];
      } else if (item.type === "group") {
        item.column?.forEach((e, i) => {
          if (e.prop === activeItem.value) {
            element = cloneDeep(e);
            element.path = [index, "column", i];
          }
        });
      } else if (item.type === "dynamic") {
        item.column?.forEach((e, i) => {
          if (e.prop === activeItem.value) {
            element = cloneDeep(e);
            element.path = [index, "children", "column", i];
          }
        });
      }
    });
    return element;
  });

  function recordHistory(type: string) {
    hitoryList.value.push({
      type: type,
      timestamp: Date.now(),
      active: activeItem.value,
      list: cloneDeep(resourceElementList.value)
    });
  }
  function restoreHistory(history: History) {
    activeItem.value = history.active;
    resourceElementList.value = history.list;
  }

  const state = {
    resourceElementList,
    activeItem,
    activeElement,
    hoverItem,
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
