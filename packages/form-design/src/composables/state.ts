import type { AvueFormOption } from "@smallwei/avue";
import type { ElementTreeNode, Resource, History, Props, Emit, HistoryType } from "../types";

import { ref, computed, provide, inject, watch, nextTick } from "vue";
import { useVModels } from "@vueuse/core";
import { cloneDeep, isEqual, omit } from "lodash-unified";

import defaultResources from "../resources";
import { adapterIn, adapterOut } from "../utils";

const injectKey = Symbol("form-design-state");

export function useProvideState(props: Props, emit: Emit) {
  const vModels = useVModels(props);
  const { modelValue } = vModels as Required<typeof vModels>;

  const resources = computed(() => props.resources || defaultResources);
  const resourcesMap = computed<Record<string, Resource>>(() =>
    Object.fromEntries(resources.value.map(item => [item.name, item]))
  );

  const elementTree = ref<ElementTreeNode>({});
  const activeElement = ref<ElementTreeNode>({});
  const hoverElement = ref<ElementTreeNode>({});

  const formOption = computed<AvueFormOption>(() => omit(elementTree.value?.props, ["column", "group"]) ?? {});

  const historyList = ref<History[]>([]);
  const historyIndex = ref(0);

  const workType = ref("design");
  const deviceType = ref("pc");

  watch(
    modelValue,
    val => {
      if (isEqual(elementTree.value, adapterIn(val || {}))) return;
      elementTree.value = adapterIn(val || {});
      if (!Object.keys(activeElement.value).length) {
        setActiveElement();
      }
      if (!historyList.value.length) {
        recordHistory("init");
      }
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

  function setActiveElement(element?: ElementTreeNode) {
    activeElement.value = element ?? elementTree.value ?? {};
  }

  async function recordHistory(type: HistoryType) {
    // await nextTick();
    historyList.value.push({
      type: type,
      timestamp: Date.now(),
      active: cloneDeep(activeElement.value),
      tree: cloneDeep(elementTree.value),
      option: cloneDeep(modelValue.value ?? {})
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
    historyList.value = [];
    historyIndex.value = 0;
    elementTree.value = {};
    activeElement.value = {};
    emit("reset");
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
    setActiveElement,
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
