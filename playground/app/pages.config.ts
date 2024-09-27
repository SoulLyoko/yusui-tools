import { defineUniPages } from '@uni-helper/vite-plugin-uni-pages'

export default defineUniPages({
  pages: [],
  easycom: {
    autoscan: true,
    custom: {
      '^u-(.*)': 'uview-plus/components/u-$1/u-$1.vue',
      '^up-(.*)': 'uview-plus/components/u-$1/u-$1.vue',
      '^uvue-(.*)': '@yusui/uvue/components/uvue-$1/uvue-$1.vue',
    },
  },
  globalStyle: {
    navigationBarTitleText: 'yusui-app',
    navigationBarBackgroundColor: '#fff',
    navigationBarTextStyle: 'black',
  },
})
