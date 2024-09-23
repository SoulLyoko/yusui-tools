import vueJsx from '@vitejs/plugin-vue-jsx'
import Inspect from 'vite-plugin-inspect'
import { defineConfig } from 'vitepress'

import pkg from '../../package.json'
import { alias } from '../../vite.config'
import { mdDemoTransform } from './plugins/md-demo-transform'

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
          { text: '@yusui/theme', link: '/theme/index' },
          { text: '@yusui/types', link: '/types/index' },
          { text: '@yusui/utils', link: '/utils/index' },
          { text: '@yusui/uvue', link: '/uvue/index' },
          { text: '@yusui/form-design 表单设计器', link: '/form-design/index' },
          { text: '@yusui/flow-design 流程设计器', link: '/flow-design/index' },
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
      '/uvue': [
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
    },
  },
  vite: {
    plugins: [vueJsx(), mdDemoTransform(), Inspect()],
    resolve: {
      alias,
    },
    css: {
      preprocessorOptions: {
        scss: {
          silenceDeprecations: ['legacy-js-api'],
        },
      },
    },
  },
})
