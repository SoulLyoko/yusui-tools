import type { FlowDesignProps, FlowDesignState } from '../types'

import { nextTick, watch } from 'vue'
import { LogicFlow } from '@logicflow/core'
import { InsertNodeInPolyline, MiniMap, SelectionSelect } from '@logicflow/extension'

import { BpmnExtend, Control, Dagre, Group, Menu, Panel, Tooltip, TurboAdapter } from '../extensions'
import { defaultTheme } from '../constants'
import { useModelerListener } from '.'

export function useInit({ props, state }: { props: FlowDesignProps; state: FlowDesignState }) {
  const { lf, graphData } = state

  function initModeler(container: HTMLElement) {
    lf.value = new LogicFlow({
      container,
      grid: { type: 'dot', size: 10 },
      nodeTextDraggable: true,
      edgeTextDraggable: true,
      nodeTextEdit: true,
      edgeTextEdit: true,
      plugins: [Control, Panel, SelectionSelect, Menu, MiniMap, InsertNodeInPolyline, BpmnExtend, Group, TurboAdapter, Dagre],
      edgeGenerator: (sourceNode, targetNode) => {
        if (['note', 'serviceTask'].includes(targetNode.type))
          return 'noteFlow'
      },
      ...props.initOptions,
    })
    lf.value?.setTheme(defaultTheme)
    useModelerListener(state)
    watch(
      graphData,
      (val) => {
        // const eq = isEqual(val, lf.value?.getGraphData());
        const newVal = JSON.stringify(val)
        const oldVal = JSON.stringify(lf.value?.getGraphData())
        const eq = newVal === oldVal
        if (eq)
          return
        lf.value?.render(val)
        lf.value?.emit('element:click', { isForce: true })
      },
      { immediate: true },
    )
  }

  function initViewer(container: HTMLElement) {
    lf.value = new LogicFlow({
      container,
      grid: { type: 'dot', size: 10 },
      isSilentMode: true,
      plugins: [BpmnExtend, Group, TurboAdapter, Tooltip],
      ...props.initOptions,
    })
    lf.value?.setTheme(defaultTheme)
    watch(
      () => [graphData.value, props.styles, props.tooltips],
      async () => {
        lf.value?.render(graphData.value)
        await nextTick()
        props.styles?.forEach(({ id, style }) => {
          id && lf.value?.graphModel?.updateAttributes(id, { style })
        })
        lf.value?.extension.tooltip?.setTooltips(props.tooltips ?? [])
      },
      { immediate: true },
    )
  }

  return { initViewer, initModeler }
}
