import type { FlowDesignProps, FlowDesignState } from '../types'

import { LogicFlow } from '@logicflow/core'
import { InsertNodeInPolyline, MiniMap, SelectionSelect } from '@logicflow/extension'
import { defu } from 'defu'
import { nextTick, watch } from 'vue'

import { useModelerListener } from '.'
import { defaultTheme } from '../constants'
import { BpmnElements, Control, Menu, Panel, Styles, Tooltips, TurboAdapter } from '../extensions'

export function useInit({ props, state }: { props: FlowDesignProps, state: FlowDesignState }) {
  const { lf, graphData } = state

  function initModeler(container: HTMLElement) {
    const defaultOptions: LogicFlow.Options = {
      container,
      grid: { type: 'dot', size: 10 },
      nodeTextDraggable: true,
      edgeTextDraggable: true,
      nodeTextEdit: true,
      edgeTextEdit: true,
      plugins: [Control, Panel, SelectionSelect, Menu, MiniMap, InsertNodeInPolyline, BpmnElements, TurboAdapter],
      pluginsOptions: {
        miniMap: { isShowCloseIcon: true, showEdge: true, width: 200, height: 150 },
      },
      edgeGenerator: (sourceNode, targetNode) => {
        if (['note', 'serviceTask', 'branchTask'].includes(targetNode.type))
          return 'noteFlow'
      },
    }
    const options = defu(props.initOptions, defaultOptions)
    lf.value = new LogicFlow(options)
    lf.value?.setTheme(defaultTheme)
    useModelerListener(state)
    watch(
      graphData,
      (val) => {
        // const eq = isEqual(val, lf.value?.getGraphData());
        const newVal = JSON.stringify(val)
        const oldVal = JSON.stringify(lf.value?.getGraphData())
        if (newVal !== oldVal)
          lf.value?.render(val as any)
      },
      { immediate: true },
    )
  }

  function initViewer(container: HTMLElement) {
    const defaultOptions: LogicFlow.Options = {
      container,
      grid: { type: 'dot', size: 10 },
      isSilentMode: true,
      plugins: [BpmnElements, TurboAdapter, Tooltips, Styles],
    }
    const options = defu(props.initOptions, defaultOptions)
    lf.value = new LogicFlow(options)
    lf.value?.setTheme(defaultTheme)
    watch(
      () => [graphData.value, props.styles, props.tooltips],
      async () => {
        lf.value?.render(graphData.value as any)
        await nextTick();
        (lf.value?.extension?.styles as Styles)?.setStyles(props.styles ?? []);
        (lf.value?.extension?.tooltips as Tooltips)?.setTooltips(props.tooltips ?? [])
      },
      { immediate: true },
    )
  }

  return { initViewer, initModeler }
}
