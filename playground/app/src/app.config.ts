import { defineAppConfig } from 'vixt'

const dicMap = {
  single: [
    { label: '1', value: '1' },
    { label: '2', value: '2' },
  ],
  tree: [
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
  datetime: [
    { label: 'date', value: 'date' },
    { label: 'time', value: 'time' },
    { label: 'datetime', value: 'datetime' },
  ],
}

function request({ url }: { url: keyof typeof dicMap }) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ data: { data: dicMap[url] } })
    }, 1000)
  })
}

export default defineAppConfig({
  uvue: {
    request: request as any,
  },
})
