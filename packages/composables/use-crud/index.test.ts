import type { Res } from '@yusui/types'

import { useCrud } from '.'

interface RowData {
  id?: string
  name?: string
  age?: number
}
function resolve<T>(data?: T) {
  return Promise.resolve({ code: 200, msg: 'success', data })
}

function useRows(): RowData[] {
  return [
    { id: '1', name: '刘一', age: 10 },
    { id: '2', name: '陈二', age: 20 },
    { id: '3', name: '张三', age: 30 },
    { id: '4', name: '李四', age: 40 },
    { id: '5', name: '王五', age: 50 },
  ]
}

window.console.log = () => {}

function done() {}
function loading() {}

describe('useCrud', () => {
  const rows = useRows()
  function getList() {
    return resolve({ rows, size: 10, current: 1, total: rows.length })
  }
  function create(row: RowData) {
    rows.push({ id: `${rows.length + 1}`, ...row })
    return resolve(row)
  }
  function update(row: RowData) {
    const index = rows.findIndex(e => e.id === row.id)
    rows.splice(index, 1, row)
    return resolve(row)
  }
  function remove(ids: string) {
    const idsArr = ids.split(',')
    idsArr.forEach((id) => {
      const index = rows.findIndex(e => id === e.id)
      index >= 0 && rows.splice(index, 1)
    })
    return resolve(ids)
  }

  const crudOption = {
    rowKey: 'id',
    getList,
    create,
    update,
    remove,
    dataPath: 'res.data.rows',
    totalPath: 'res.data.total',
  }
  const {
    crudState,
    getDataList,
    beforeGetList,
    afterGetList,
    handleSave,
    beforeSave,
    afterSave,
    handleUpdate,
    beforeUpdate,
    afterUpdate,
    beforeSubmit,
    afterSubmit,
    handleDel,
    beforeDel,
    afterDel,
    batchDel,
    beforeBatchDel,
    afterBatchDel,
  } = useCrud({
    crudOption,
  })

  it('getDataList success', async () => {
    let searchParams, getListRes
    beforeGetList(params => (searchParams = params))
    afterGetList(res => (getListRes = res))
    await getDataList()
    expect(searchParams).not.toBeUndefined()
    expect(getListRes).not.toBeUndefined()
    expect(crudState.tableData).toEqual(rows)
    expect(crudState.pageOption.total).toBe(rows.length)
  })

  it('handleSave success', async () => {
    const saveRow = { name: '赵六', age: 0 }
    const newAge = 60
    let saveRes: Res = {}
    beforeSave(row => (row.age = newAge))
    beforeSubmit(row => (row.age = newAge))
    afterSave(res => (saveRes = res))
    afterSubmit(res => (saveRes = res))
    await handleSave(saveRow, done, loading)
    expect(saveRes.msg).toBe('success')
    expect(saveRes.data.age).toEqual(newAge)
    expect(crudState.tableData).toEqual([...useRows(), { id: '6', name: '赵六', age: 60 }])
  })

  it('handleUpdate success', async () => {
    const updateRow = { id: '6', name: '赵六', age: 60 }
    const newAge = 66
    let updateRes: Res = {}
    beforeUpdate(row => (row.age = newAge))
    beforeSubmit(row => (row.age = newAge))
    afterUpdate(res => (updateRes = res))
    afterSubmit(res => (updateRes = res))
    await handleUpdate(updateRow, 0, done, loading)
    expect(updateRes.msg).toBe('success')
    expect(updateRes.data.age).toEqual(newAge)
    expect(crudState.tableData).toEqual([...useRows(), { ...updateRow, age: newAge }])
  })

  it('handleDel success', async () => {
    const delRow = { id: '10' }
    const newDelId = '6'
    let delRes: Res = {}
    beforeDel(row => (row.id = newDelId))
    afterDel(res => (delRes = res))
    await handleDel(delRow, 0)
    expect(delRes.msg).toBe('success')
    expect(delRes.data).toEqual(newDelId)
    expect(crudState.tableData.length).toBe(useRows().length)
  })

  it('batchDel success', async () => {
    const delRows = [{ id: '9' }, { id: '10' }]
    const newDelRows = [{ id: '1' }, { id: '2' }]
    let delRes: Res = {}
    crudState.dataSelections = delRows
    beforeBatchDel((rows) => {
      rows[0] = newDelRows[0]
      rows[1] = newDelRows[1]
    })
    afterBatchDel(res => (delRes = res))
    await batchDel()
    expect(delRes.msg).toBe('success')
    expect(delRes.data).toEqual(newDelRows.map(e => e.id).join(','))
    expect(crudState.tableData.length).toBe(useRows().length - 2)
  })

  it('getDataList reject', async () => {
    beforeGetList(() => {
      crudState.tableData = []
      crudState.pageOption.total = 0
      return Promise.reject()
    })
    await getDataList()
    expect(crudState.tableData).toEqual([])
    expect(crudState.pageOption.total).toBe(0)
  })

  it('handleSave reject', async () => {
    let isReject = false
    beforeSave(() => Promise.reject('reject'))
    await handleSave({}, done, () => (isReject = true))
    expect(isReject).toBeTruthy()
  })

  it('handleUpdate reject', async () => {
    let isReject = false
    beforeUpdate(() => Promise.reject('reject'))
    await handleUpdate({}, 0, done, () => (isReject = true))
    expect(isReject).toBeTruthy()
  })

  it('handleDel reject', async () => {
    let isReject = true
    beforeDel(() => Promise.reject('reject'))
    afterDel(() => (isReject = false))
    await handleDel({}, 0)
    expect(isReject).toBeTruthy()
  })

  it('batchDel reject', async () => {
    let isReject = true
    beforeBatchDel(() => Promise.reject('reject'))
    afterDel(() => (isReject = false))
    await batchDel()
    expect(isReject).toBeTruthy()
  })
})

describe('useCrud mock', () => {
  const rows = useRows()
  const { crudState, getDataList, handleSave, handleUpdate, handleDel, batchDel } = useCrud({
    mockData: rows,
    mockCache: 'test',
  })

  it('getDataList', async () => {
    await getDataList()
    expect(crudState.tableData).toEqual(rows)
  })

  it('handleSave', async () => {
    const saveRow = { name: '赵六', age: 60 }
    await handleSave(saveRow, done, loading)
    expect(crudState.tableData.length).toBe(useRows().length + 1)
  })

  it('handleUpdate', async () => {
    const updateRow = { id: '1', name: '刘一', age: 11 }
    await handleUpdate(updateRow, 0, done, loading)
    expect(crudState.tableData[0]).toEqual(updateRow)
  })

  it('handleDel', async () => {
    const delRow = crudState.tableData[crudState.tableData.length - 1]
    await handleDel(delRow, 0)
    expect(crudState.tableData.length).toEqual(useRows().length)
  })

  it('batchDel', async () => {
    const delRows = crudState.tableData.filter((e, i) => i < 2)
    crudState.dataSelections = delRows
    await batchDel()
    expect(crudState.tableData.length).toEqual(useRows().length - 2)
  })
})
