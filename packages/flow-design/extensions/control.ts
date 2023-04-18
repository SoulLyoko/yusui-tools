import type { LogicFlow } from '@logicflow/core'

import { Control as _Control } from '@logicflow/extension'

export class Control extends _Control {
  constructor({ lf }: { lf: LogicFlow }) {
    super({ lf })
    // this.addItem({
    //   key: "layout",
    //   iconClass: "lf-control-layout",
    //   title: "自动布局",
    //   text: "自动布局",
    //   onClick: () => lf.extension.dagre.layout()
    // });
    this.addItem({
      key: 'clear',
      iconClass: 'lf-control-clear',
      title: '清空',
      text: '清空',
      onClick: () => lf.clearData(),
    })
    this.addItem({
      key: 'edit',
      iconClass: 'lf-control-edit',
      title: '编辑',
      text: '编辑',
      onClick: () => lf.emit('custom:edit-click', {}),
    })
    this.addItem({
      key: 'mini-map',
      iconClass: 'lf-control-mini-map',
      title: '导航',
      text: '导航',
      onClick: () => {
        const { isShow, show, hide } = lf.extension.miniMap ?? {}
        isShow ? hide() : show()
      },
    })
  }
}
