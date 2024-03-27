import type { LogicFlow } from '@logicflow/core'

import { Control as _Control, bpmnUtils } from '@logicflow/extension'

export class Control extends _Control {
  constructor({ lf }: { lf: LogicFlow }) {
    super({ lf })
    const controls = [
      {
        key: 'clear',
        iconClass: 'lf-control-clear',
        title: '清空',
        text: '清空',
        onClick: () => {
          lf.clearData()
          lf.addNode({ type: 'process', id: `Process_${bpmnUtils.genBpmnId()}`, x: 0, y: 0 })
        },
      },
      {
        key: 'edit',
        iconClass: 'lf-control-edit',
        title: '编辑',
        text: '编辑',
        onClick: () => lf.emit('custom:edit-click', {}),
      },
      {
        key: 'process',
        iconClass: 'lf-control-setting',
        title: '流程配置',
        text: '流程配置',
        onClick: () => {
          const processNode = lf.graphModel.nodes.find(node => node.type === 'process')
          let data
          if (!processNode?.id)
            data = lf.addNode({ type: 'process', id: `Process_${bpmnUtils.genBpmnId()}`, x: 0, y: 0 })
          else
            data = lf.getNodeDataById(processNode!.id)
          lf.emit('element:click', { data })
        },
      },
      {
        key: 'mini-map',
        iconClass: 'lf-control-mini-map',
        title: '导航',
        text: '导航',
        onClick: () => {
          const { isShow, show, hide } = lf.extension.miniMap ?? {}
          isShow ? hide() : show()
        },
      },
      // {
      //   key: 'layout',
      //   iconClass: 'lf-control-layout',
      //   title: '自动布局',
      //   text: '自动布局',
      //   onClick: () => lf.extension.dagre.layout(),
      // },
    ]
    controls.forEach(item => this.addItem(item))
  }
}
