import { sleep } from '@yusui/utils'

import { useDict } from '.'

const dicData = [
  { label: 'label1', value: 'value1' },
  { label: 'label2', value: 'value2' },
]

const dicMap = {
  '/dict/dicData': dicData,
}

// 模拟请求
function request({ url }: { url: keyof typeof dicMap }) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        data: {
          data: dicMap[url],
        },
      })
    })
  })
}

describe('useDict', () => {
  it('should return data from the provided URL', async () => {
    const { data } = useDict({
      request: request as any,
      dicUrl: '/dict/dicData',
    })
    await sleep()
    expect(data.value).toEqual(dicData)
  })

  it('should return selectedItem and selectedLabel based on dictValue', async () => {
    const { dictValue, selectedItem, selectedLabel } = useDict({ dicData })
    dictValue.value = 'value1'
    await sleep()
    expect(selectedItem.value).toEqual(dicData[0])
    expect(selectedLabel.value).toEqual(dicData[0].label)
  })

  it('should return selectedItem and selectedLabel based on dictValue array', async () => {
    const { dictValue, selectedItem, selectedLabel } = useDict({ dicData })
    dictValue.value = ['value1', 'value2']
    await sleep()
    expect(selectedItem.value).toEqual(dicData)
    expect(selectedLabel.value).toEqual(dicData.map(e => e.label).join(','))
  })

  it('should return selectedItem and selectedLabel from the provided props based on dictValue', async () => {
    const data = [
      { name: 'label1', id: 'value1' },
      { name: 'label2', id: 'value2' },
    ]
    const { dictValue, selectedItem, selectedLabel } = useDict({
      dicData: data,
      props: {
        value: 'id',
        label: 'name',
      },
    })
    dictValue.value = 'value1'
    await sleep()
    expect(selectedItem.value).toEqual(data[0])
    expect(selectedLabel.value).toEqual('label1')
  })
})
