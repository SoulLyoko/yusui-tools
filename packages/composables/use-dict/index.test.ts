import { sleep } from '@yusui/utils'
import { reactive, ref } from 'vue'

import { useDict } from '.'

const dicData = [
  { label: 'label1', value: 'value1' },
  { label: 'label2', value: 'value2' },
]

const dicMap = {
  '/dict/dicData': dicData,
}

// 模拟请求
async function request({ url }: { url: keyof typeof dicMap }) {
  await sleep()
  return {
    data: {
      data: dicMap[url],
    },
  }
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

  it('should return data with reactive options', async () => {
    const reactiveOptions = reactive({
      dicData: [] as any[],
    })
    setTimeout(() => {
      reactiveOptions.dicData = dicData
    }, 100)
    const { data } = useDict(reactiveOptions)
    await sleep(100)
    expect(data.value).toEqual(dicData)
  })

  it('should return data with ref dicData', async () => {
    const refDicData = ref<any[]>([])
    setTimeout(() => {
      refDicData.value = dicData
    }, 100)
    const { data } = useDict({
      dicData: refDicData,
    })
    await sleep(100)
    expect(data.value).toEqual(dicData)
  })

  it('should return selectedItem and selectedLabel based on modelValue', async () => {
    const modelValue = ref('value1')
    const { selectedItem, selectedLabel } = useDict({ modelValue, dicData })
    await sleep()
    expect(selectedItem.value).toEqual(dicData[0])
    expect(selectedLabel.value).toEqual(dicData[0].label)
  })

  it('should return selectedItem and selectedLabel based on modelValue array', async () => {
    const modelValue = ref(['value1', 'value2'])
    const { selectedItem, selectedLabel } = useDict({ modelValue, dicData })
    await sleep()
    expect(selectedItem.value).toEqual(dicData)
    expect(selectedLabel.value).toEqual(dicData.map(e => e.label).join(','))
  })

  it('should return selectedItem and selectedLabel from the provided props based on dictValue', async () => {
    const data = [
      { name: 'label1', id: 'value1' },
      { name: 'label2', id: 'value2' },
    ]
    const modelValue = ref('value1')
    const { selectedItem, selectedLabel } = useDict({
      modelValue,
      dicData: data,
      props: {
        value: 'id',
        label: 'name',
      },
    })
    await sleep()
    expect(selectedItem.value).toEqual(data[0])
    expect(selectedLabel.value).toEqual('label1')
  })
})
