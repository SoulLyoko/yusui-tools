import { createSSRApp } from 'vue'
import uviewPlus from 'uview-plus'
import Uvue from '@yusui/uvue'

import App from './App.vue'

const dicMap = {
  '/dict/single': [
    { label: '1', value: '1' },
    { label: '2', value: '2' },
  ],
  '/dict/tree': [
    {
      label: '1',
      value: '1',
      children: [
        { label: '1-1', value: '1-1' },
        { label: '1-2', value: '1-2' },
      ],
    },
    {
      label: '2',
      value: '2',
      children: [
        { label: '2-1', value: '2-1' },
        { label: '2-2', value: '2-2' },
      ],
    },
  ],
  '/dict/datetime': [
    { label: 'date', value: 'date' },
    { label: 'time', value: 'time' },
    { label: 'datetime', value: 'datetime' },
  ],
}

const request: any = ({ url }: { url: keyof typeof dicMap }) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ data: { data: dicMap[url] } })
    }, 1000)
  })
}

export function createApp() {
  const app = createSSRApp(App)
  app.use(uviewPlus)
  app.use(Uvue, { request })
  return {
    app,
  }
}
