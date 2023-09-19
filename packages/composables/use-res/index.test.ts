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
  it('should return modify fn without no options by default', async () => {
    const useData = useRes(request)
    const { data } = useData()
    await sleep()
    expect(data.value).toEqual(resRecords)
  })

  it('should return modify fn with original options', async () => {
    const useData = useRes(request, { initialData: { data: { records: [] } } })
    const { data } = useData()
    await sleep()
    expect(data.value).toEqual(resRecords)
  })

  it('should return final data when path in options', async () => {
    const useData = useRes(request, { res: 'data.records', initialData: [] })
    const { data } = useData()
    await sleep()
    expect(data.value).toEqual(result)
  })

  it('should return modify fn when modify is true', async () => {
    const useData = useRes(request, { res: 'data.records', modify: true })
    const { data, runAsync } = useData({ manual: true, initialData: [] })
    await runAsync()
    expect(data.value).toEqual(result)
  })

  it('should return result when modify is false', async () => {
    const { data } = useRes(request, { res: 'data.records', modify: false })
    await sleep()
    expect(data.value).toEqual(result)
  })
})
