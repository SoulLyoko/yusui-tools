import type { HistoryTypeKey } from '../constants'
import type { ElementTreeNode, FormDesignEmit, FormDesignProps, History, Resource } from '../types'
import type { AvueFormOption } from '@smallwei/avue'

import { useVModels } from '@vueuse/core'
import { cloneDeep, isEqual, mergeWith, omit } from 'lodash-es'
import { computed, inject, provide, ref, watch } from 'vue'

import { advance as defaultAdvanceOption, base as defaultBaseOption, groupList as defaultGroupList } from '../options'
import * as defaultResources from '../resources'
import { adapterIn, adapterOut } from '../utils'

const injectKey = 'formDesignState'

export function useProvideState(props: FormDesignProps, emit: FormDesignEmit) {
  const vModels = useVModels(props)
  const { modelValue } = vModels as Required<typeof vModels>

  const groupList = computed(() => props.groupList || defaultGroupList)
  const resources = computed<Record<string, Resource>>(() =>
    mergeWith(cloneDeep({ ...defaultResources }), props.resources, props.resourcesMerger),
  )
  const baseOption = computed(() =>
    props.baseOption ? resolveSettings(props.baseOption) : resolveSettings(defaultBaseOption),
  )
  const advanceOption = computed(() =>
    props.advanceOption ? resolveSettings(props.advanceOption) : resolveSettings(defaultAdvanceOption),
  )

  const elementTree = ref<ElementTreeNode>({})
  const activeElement = ref<ElementTreeNode>({})
  const hoverElement = ref<ElementTreeNode>({})

  const formOption = computed<AvueFormOption>(() => omit(elementTree.value?.props, ['column', 'group']) ?? {})

  const historyList = ref<History[]>([])
  const historyIndex = ref(0)

  const workType = ref('design')
  const deviceType = ref('pc')

  watch(
    modelValue,
    (val) => {
      if (isEqual(elementTree.value, adapterIn(val || {})))
        return
      elementTree.value = adapterIn(val || {})
      if (!Object.keys(activeElement.value).length)
        setActiveElement()

      if (!historyList.value.length)
        recordHistory('init')
    },
    { immediate: true, deep: true },
  )
  watch(
    elementTree,
    () => {
      modelValue.value = adapterOut(elementTree.value)
    },
    { deep: true },
  )

  function getResource(name?: string) {
    if (name)
      return resources.value[name]
  }

  function setActiveElement(element?: ElementTreeNode) {
    activeElement.value = element ?? elementTree.value ?? {}
  }

  function resolveSettings(settings: Resource['settings']) {
    if (typeof settings === 'function') {
      const context = { elementTree: elementTree.value, activeElement: activeElement.value }
      return cloneDeep(settings(context) ?? [])
    }
    else {
      return cloneDeep(settings ?? [])
    }
  }

  async function recordHistory(type: HistoryTypeKey) {
    // await nextTick();
    historyList.value.push({
      type,
      timestamp: Date.now(),
      active: cloneDeep(activeElement.value),
      tree: cloneDeep(elementTree.value),
      option: cloneDeep(modelValue.value ?? {}),
    })
    historyIndex.value = historyList.value.length - 1
  }
  function restoreHistory(index: number) {
    const find = historyList.value.find((e, i) => i === index)
    if (!find)
      return
    elementTree.value = cloneDeep(find.tree)
    activeElement.value = cloneDeep(find.active)
    historyIndex.value = index
  }
  function resetHistory() {
    historyList.value = []
    historyIndex.value = 0
    elementTree.value = {}
    activeElement.value = {}
    emit('reset')
  }

  const state = {
    groupList,
    resources,
    elementTree,
    activeElement,
    hoverElement,
    formOption,
    historyList,
    historyIndex,
    workType,
    deviceType,
    modelValue,
    baseOption,
    advanceOption,
    resolveSettings,
    setActiveElement,
    recordHistory,
    restoreHistory,
    resetHistory,
    getResource,
  }

  provide(injectKey, state)

  return state
}

export function useInjectState() {
  return inject<ReturnType<typeof useProvideState>>(injectKey)!
}
