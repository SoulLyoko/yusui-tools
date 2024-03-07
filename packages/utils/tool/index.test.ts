import { enumToDic, sleep, to } from '.'

describe('tool utils', () => {
  it('sleep', async () => {
    const sleep100ms = async () => {
      await sleep(100)
      return 'success'
    }
    await expect(sleep100ms()).resolves.toBe('success')
  })

  it('awaitTo', async () => {
    const fail = async () => {
      const [err, res] = await to(Promise.reject('fail'))
      if (err)
        return err
      return res
    }
    expect(fail()).resolves.toBe('fail')
    const success = async () => {
      const [err, res] = await to(Promise.resolve('success'))
      if (err)
        return err
      return res
    }
    expect(success()).resolves.toBe('success')
  })

  it('enumToDic', () => {
    enum Status {
      失败 = 0,
      成功 = 1,
    }
    expect(enumToDic(Status)).toEqual([
      { label: '失败', value: 0 },
      { label: '成功', value: 1 },
    ])
  })

  it('enumToDic props', () => {
    enum Status {
      失败 = 0,
      成功 = 1,
    }
    expect(enumToDic(Status, { label: 'name', value: 'id' })).toEqual([
      { name: '失败', id: 0 },
      { name: '成功', id: 1 },
    ])
  })

  it('enumToDic empty entry', () => {
    expect(enumToDic()).toEqual([])
  })
})
