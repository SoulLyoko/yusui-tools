import type { EdgeConfig, LogicFlow, NodeConfig } from '@logicflow/core'
import type { MenuItem } from '@logicflow/extension'

import { Menu as _Menu } from '@logicflow/extension'

export class Menu extends _Menu {
  constructor({ lf }: { lf: LogicFlow }) {
    super({ lf })

    const copy = {
      text: '复制',
      icon: true,
      className: 'lf-menu-copy',
      callback: (ele: NodeConfig) => lf.cloneNode(ele.id!),
    }
    const remove = {
      text: '删除',
      icon: true,
      className: 'lf-menu-delete',
      callback: (ele: NodeConfig | EdgeConfig) => {
        lf.deleteNode(ele.id!)
        lf.deleteEdge(ele.id!)
      },
    }
    const editText = {
      text: '编辑文本',
      icon: true,
      className: 'lf-menu-edit',
      callback: (ele: NodeConfig | EdgeConfig) => lf.graphModel.editText(ele.id!),
    }
    const removeText = {
      text: '删除文本',
      icon: true,
      className: 'lf-menu-delete',
      callback: (ele: NodeConfig | EdgeConfig) => lf.updateText(ele.id!, ''),
    }
    const select = {
      text: '框选',
      icon: true,
      className: 'lf-menu-select',
      callback() {
        lf.openSelectionSelect()
        lf.once('selection:selected', lf.closeSelectionSelect)
      },
    }
    const clear = {
      text: '清空',
      icon: true,
      className: 'lf-menu-clear',
      callback: () => lf.clearData(),
    }
    const back = {
      text: '',
      icon: true,
      className: 'lf-menu-back',
      // eslint-disable-next-line ts/no-use-before-define
      callback: (ele: NodeConfig) => this.changeMenuList(ele, defaultMenuConfig.nodeMenu),
    }

    const addUserTask = {
      text: '用户任务',
      icon: true,
      className: 'lf-menu-user-task',
      callback: (ele: NodeConfig) => this.addNode(ele, { type: 'userTask', x: ele.x + 200, y: ele.y }),
    }
    const addServiceTask = {
      text: '服务任务',
      icon: true,
      className: 'lf-menu-service-task',
      callback: (ele: NodeConfig) => this.addNode(ele, { type: 'serviceTask', x: ele.x + 200, y: ele.y }),
    }
    const addBranchTask = {
      text: '分办任务',
      icon: true,
      className: 'lf-menu-branch-task',
      callback: (ele: NodeConfig) => this.addNode(ele, { type: 'branchTask', x: ele.x + 200, y: ele.y }),
    }
    const addEndEvent = {
      text: '结束',
      icon: true,
      className: 'lf-menu-end-event',
      callback: (ele: NodeConfig) => this.addNode(ele, { type: 'endEvent', x: ele.x + 150, y: ele.y }),
    }
    const addExclusiveGateway = {
      text: '互斥网关',
      icon: true,
      className: 'lf-menu-exclusive-gateway',
      callback: (ele: NodeConfig) => this.addNode(ele, { type: 'exclusiveGateway', x: ele.x + 150, y: ele.y }),
    }
    const addParallelGateway = {
      text: '并行网关',
      icon: true,
      className: 'lf-menu-parallel-gateway',
      callback: (ele: NodeConfig) => this.addNode(ele, { type: 'parallelGateway', x: ele.x + 150, y: ele.y }),
    }
    const addNote = {
      text: '注释',
      icon: true,
      className: 'lf-menu-note',
      callback: (ele: NodeConfig) => this.addNode(ele, { type: 'note', x: ele.x, y: ele.y - 150 }),
    }
    // 添加节点
    const add = {
      text: '添加',
      icon: true,
      className: 'lf-menu-add',
      callback: (ele: NodeConfig) => {
        let menuList: MenuItem[] = []
        switch (ele.type) {
          case 'startEvent':
          case 'userTask':
          case 'branchTask':
          case 'exclusiveGateway':
          case 'parallelGateway':
            menuList = [back, addUserTask, addServiceTask, addBranchTask, addExclusiveGateway, addParallelGateway, addEndEvent, addNote]
            break
          case 'endEvent':
          case 'sequenceFlow':
          case 'group':
          case 'serviceTask':
            menuList = [back, addNote]
            break
          default:
            menuList = [back]
        }
        this.changeMenuList(ele, menuList)
      },
    }

    const changeToStartEvent = {
      text: '开始',
      icon: true,
      className: 'lf-menu-start-event',
      callback: (ele: NodeConfig) => this.changeNodeType(ele, 'startEvent'),
    }
    const changeToEndEvent = {
      text: '结束',
      icon: true,
      className: 'lf-menu-end-event',
      callback: (ele: NodeConfig) => this.changeNodeType(ele, 'endEvent'),
    }
    const changeToParallelGateway = {
      text: '并行网关',
      icon: true,
      className: 'lf-menu-parallel-gateway',
      callback: (ele: NodeConfig) => this.changeNodeType(ele, 'parallelGateway'),
    }
    const changeToExclusiveGateway = {
      text: '互斥网关',
      icon: true,
      className: 'lf-menu-exclusive-gateway',
      callback: (ele: NodeConfig) => this.changeNodeType(ele, 'exclusiveGateway'),
    }
    const changeToUserTask = {
      text: '用户任务',
      icon: true,
      className: 'lf-menu-user-task',
      callback: (ele: NodeConfig) => this.changeNodeType(ele, 'userTask'),
    }
    const changeToServiceTask = {
      text: '服务任务',
      icon: true,
      className: 'lf-menu-service-task',
      callback: (ele: NodeConfig) => this.changeNodeType(ele, 'serviceTask'),
    }
    const changeToBranchTask = {
      text: '分办任务',
      icon: true,
      className: 'lf-menu-branch-task',
      callback: (ele: NodeConfig) => this.changeNodeType(ele, 'branchTask'),
    }
    // 修改节点类型
    const change = {
      text: '切换类型',
      icon: true,
      className: 'lf-menu-switch',
      callback: (ele: NodeConfig) => {
        let menuList: MenuItem[] = []
        switch (ele.type) {
          case 'startEvent':
            menuList = [back, changeToEndEvent]
            break
          case 'endEvent':
            menuList = [back, changeToStartEvent]
            break
          case 'exclusiveGateway':
            menuList = [back, changeToParallelGateway]
            break
          case 'parallelGateway':
            menuList = [back, changeToExclusiveGateway]
            break
          case 'userTask':
            menuList = [back, changeToServiceTask, changeToBranchTask]
            break
          case 'serviceTask':
            menuList = [back, changeToUserTask, changeToBranchTask]
            break
          case 'branchTask':
            menuList = [back, changeToUserTask, changeToServiceTask]
            break
          default:
            menuList = [back]
        }
        this.changeMenuList(ele, menuList)
      },
    }

    const defaultMenuConfig = {
      nodeMenu: [add, copy, remove, change, editText, removeText],
      edgeMenu: [remove, editText, removeText],
      graphMenu: [select, clear],
    }

    this.setMenuConfig(defaultMenuConfig)
  }

  /** 改变当前显示的菜单 */
  changeMenuList(ele: NodeConfig | EdgeConfig, menuList: MenuItem[]) {
    setTimeout(() => {
      // @ts-ignore
      this.__currentData = ele
      // @ts-ignore
      const { left, top } = this.__menuDOM.style
      // @ts-ignore
      this.showMenu(left, top, menuList)
    })
  }

  /** 添加节点 */
  addNode(ele: NodeConfig, addConfig: NodeConfig) {
    const addedNode = this.lf.addNode(addConfig)
    const isNoteFlow = ['note', 'serviceTask', 'branchTask'].includes(addConfig.type)
    this.lf.addEdge({ type: isNoteFlow ? 'noteFlow' : undefined, sourceNodeId: ele.id!, targetNodeId: addedNode.id })
  }

  /** 修改节点类型 */
  changeNodeType(ele: NodeConfig | EdgeConfig, type: string) {
    this.lf.changeNodeType(ele.id!, type)
    Object.keys(ele.properties || {}).forEach(key => this.lf.deleteProperty(ele.id!, key))
    this.lf.emit('element:click', { data: { ...ele, type, properties: {} } })
  }
}
