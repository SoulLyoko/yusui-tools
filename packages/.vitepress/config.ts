import { defineConfig } from 'vitepress'
import Inspect from 'vite-plugin-inspect'
import vueJsx from '@vitejs/plugin-vue-jsx'

import { mdDemoTransform } from './plugins/md-demo-transform'
import { avuePatch, loadProxy } from '../plugins/index'
import { alias } from '../../vite.config'
import pkg from '../../package.json'

export default defineConfig({
  base: `/${pkg.name}/`,
  title: pkg.upperName,
  description: pkg.description,
  themeConfig: {
    search: {
      provider: 'local',
    },
    socialLinks: [{ icon: 'github', link: pkg.homepage }],
    nav: [
      { text: 'Guide', link: '/guide/start' },
      {
        text: 'Packages',
        items: [
          { text: '@yusui/components', link: '/components/index' },
          { text: '@yusui/composables', link: '/composables/index' },
          { text: '@yusui/plugins', link: '/plugins/index' },
          { text: '@yusui/theme', link: '/theme/index' },
          { text: '@yusui/types', link: '/types/index' },
          { text: '@yusui/utils', link: '/utils/index' },
          { text: '@yusui/uvue', link: '/uvue/index' },
          { text: '@yusui/form-design 表单设计器', link: '/form-design/index' },
          { text: '@yusui/flow-design 流程设计器', link: '/flow-design/index' },
          { text: '@yusui/flow-pages 工作流页面', link: '/flow-pages/index' },
        ],
      },
    ],
    sidebar: {
      '/guide': [
        {
          text: 'Guide',
          items: [
            { text: 'Start', link: '/guide/start' },
            { text: 'CHANGELOG', link: '/guide/CHANGELOG' },
          ],
        },
      ],
      '/components': [
        {
          text: 'Components',
          items: [
            { text: 'Start', link: '/components/index' },
            { text: 'ContextMenu', link: '/components/context-menu/index' },
            { text: 'IconSelect', link: '/components/icon-select/index' },
            { text: 'ProCrud', link: '/components/pro-crud/index' },
            { text: 'ProDict', link: '/components/pro-dict/index' },
            { text: 'ProHtml', link: '/components/pro-html/index' },
            { text: 'ProMenu', link: '/components/pro-menu/index' },
            { text: 'ProText', link: '/components/pro-text/index' },
            { text: 'ProTree', link: '/components/pro-tree/index' },
          ],
        },
      ],
      '/composables': [
        {
          text: 'Composables',
          items: [
            { text: 'Start', link: '/composables/index' },
            { text: 'useCrud', link: '/composables/use-crud/index' },
            { text: 'useDict', link: '/composables/use-dict/index' },
            { text: 'useOverlay', link: '/composables/use-overlay/index' },
            { text: 'useRes', link: '/composables/use-res/index' },
          ],
        },
      ],
      '/plugins': [
        {
          text: 'Plugins',
          items: [
            { text: 'Start', link: '/plugins/index' },
            { text: 'avuePatch', link: '/plugins/avue-patch/index' },
            { text: 'createEnvDts', link: '/plugins/env-dts/index' },
            { text: 'loadProxy', link: '/plugins/load-proxy/index' },
            { text: 'setupExtend', link: '/plugins/setup-extend/index' },
            { text: 'setupRouterComponents', link: '/plugins/router/index' },
            { text: 'uniPatch', link: '/plugins/uni-patch/index' },
            { text: 'uniUIPatch', link: '/plugins/uni-ui-patch/index' },
            { text: 'uviewPatch', link: '/plugins/uview-patch/index' },
          ],
        },
      ],
      '/theme': [
        {
          text: 'Theme',
          items: [
            { text: 'Start', link: '/theme/index' },
          ],
        },
      ],
      '/types': [
        {
          text: 'Types',
          items: [
            { text: 'Start', link: '/types/index' },
            { text: 'avue', link: '/types/avue/index' },
            { text: 'helpers', link: '/types/helpers/index' },
          ],
        },
      ],
      '/utils': [
        {
          text: 'Utils',
          items: [
            { text: 'Start', link: '/utils/index' },
            {
              text: 'array',
              items: [
                { text: 'arrayToMap', link: '/utils/array/arrayToMap' },
              ],
            },
            {
              text: 'date',
              items: [
                { text: 'dateFormat', link: '/utils/date/dateFormat' },
                { text: 'durationFormat', link: '/utils/date/durationFormat' },
              ],
            },
            {
              text: 'emitter',
              items: [{ text: 'mittAsync', link: '/utils/emitter/mittAsync' }],
            },
            {
              text: 'math',
              link: '/utils/math/index',
            },
            {
              text: 'object',
              items: [
                { text: 'filterObj', link: '/utils/object/filterObj' },
                { text: 'filterObjDeep', link: '/utils/object/filterObjDeep' },
                { text: 'getDataType', link: '/utils/object/getDataType' },
              ],
            },
            {
              text: 'string',
              items: [
                { text: 'serialize', link: '/utils/string/serialize' },
                { text: 'deserialize', link: '/utils/string/deserialize' },
                { text: 'uuid', link: '/utils/string/uuid' },
              ],
            },
            {
              text: 'tool',
              items: [
                { text: 'awaitTo', link: '/utils/tool/awaitTo' },
                { text: 'sleep', link: '/utils/tool/sleep' },
                { text: 'enumToDic', link: '/utils/tool/enumToDic' },
              ],
            },
            {
              text: 'tree',
              items: [
                { text: 'buildTree', link: '/utils/tree/buildTree' },
                { text: 'flatTree', link: '/utils/tree/flatTree' },
                { text: 'filterTree', link: '/utils/tree/filterTree' },
                { text: 'findTree', link: '/utils/tree/findTree' },
                { text: 'treeMap', link: '/utils/tree/treeMap' },
              ],
            },
          ],
        },
      ],
      'uvue': [
        {
          text: 'Types',
          items: [
            { text: 'Start', link: '/uvue/index' },
            { text: 'UvueList', link: '/uvue/components/uvue-list/index' },
            { text: 'UvueForm', link: '/uvue/components/uvue-form/index' },
            { text: 'useCrud', link: '/uvue/composables/use-crud/index' },
          ],
        },
      ],
      '/form-design': [
        {
          text: '表单设计器',
          items: [
            { text: '开始', link: '/form-design/index' },
            { text: '表单设计器', link: '/form-design/demo' },
          ],
        },
      ],
      '/flow-design': [
        {
          text: '流程设计器',
          items: [
            { text: '开始', link: '/flow-design/index' },
            { text: '流程设计器', link: '/flow-design/demo' },
          ],
        },
      ],
      '/flow-pages': [
        {
          text: '工作流页面',
          items: [
            { text: '开始', link: '/flow-pages/index' },
            {
              text: '页面',
              items: [
                { text: '流程设计', link: '/flow-pages/pages/flow-manage/index' },
                { text: '流程运维', link: '/flow-pages/pages/flow-ops/index' },
                { text: '表单模板', link: '/flow-pages/pages/form-template/index' },
                { text: '流程模板', link: '/flow-pages/pages/flow-template/index' },
                { text: '建表设计', link: '/flow-pages/pages/table-template/index' },
                { text: '流程参数', link: '/flow-pages/pages/flow-param/index' },
                { text: '流程按钮', link: '/flow-pages/pages/flow-button/index' },
                { text: '工作台', link: '/flow-pages/pages/flow-workbench/index' },
                { text: '流程表单页', link: '/flow-pages/pages/flow-form/index?flowKey=test' },
              ],
            },
            {
              text: '组件及其它',
              items: [
                { text: 'FlowForm', link: '/flow-pages/flow-form/index' },
                { text: 'useFlowForm', link: '/flow-pages/composables/useFlowForm' },
              ],
            },
            {
              text: '接口',
              link: '/flow-pages/api/index',
            },
          ],
        },
      ],
    },
  },
  vite: {
    plugins: [vueJsx(), mdDemoTransform(), avuePatch(), loadProxy(), Inspect()],
    resolve: {
      alias,
    },
  },
})
