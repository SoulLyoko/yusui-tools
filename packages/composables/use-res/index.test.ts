import { sleep } from '@yusui/utils'

import { useRes } from '.'

const result = [
  { label: 'label1', value: 'value1' },
  { label: 'label2', value: 'value2' },
]
const resRecords = {
  data: {
    records: result,
  },
}

// 模拟请求
async function request() {
  return resRecords
}

describe('useRes', () => {
  it('no options', async () => {
    const { data } = useRes(request)
    await sleep()
    expect(data.value).toEqual(resRecords)
  })

  it('original options', async () => {
    const { data } = useRes(request, { initialData: { data: { records: [] } } })
    await sleep()
    expect(data.value).toEqual(resRecords)
  })

  it('path in options', async () => {
    const { data } = useRes(request, { res: 'data.records', initialData: [] })
    await sleep()
    expect(data.value).toEqual(result)
  })

  it('modify in options', async () => {
    const useData = useRes(request, { res: 'data.records', modify: true })
    const { data, runAsync } = useData({ manual: true, initialData: [] })
    await runAsync()
    expect(data.value).toEqual(result)
  })
})
