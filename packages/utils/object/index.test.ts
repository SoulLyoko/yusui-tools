import { filterObj, filterObjDeep } from '.'

describe('object utils', () => {
  it('filterObj', () => {
    const testData = { a: 1, b: 'b', c: undefined, d: null }
    expect(filterObj(null)).toBeNull()
    expect(filterObj(testData)).toEqual({ a: 1, b: 'b' })
    expect(filterObj(testData, [])).toEqual(testData)
    expect(filterObj(testData, undefined, ['a', 'b'])).toEqual({})
  })
  it('filterObjDeep', () => {
    const testData = { a: [{ aa: 1 }], b: { bb: '1' }, c: undefined, d: null }
    expect(filterObjDeep(testData)).toEqual({ a: [{ aa: 1 }], b: { bb: '1' } })
    expect(filterObjDeep(testData, [])).toEqual(testData)
    expect(filterObjDeep(testData, undefined, ['aa', 'bb'])).toEqual({ a: [{}], b: {} })
  })
})
