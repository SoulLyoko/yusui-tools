import { deserialize, getDataType, jsonClone, serialize } from '.'

describe('string utils', () => {
  const query = { 中文: '一', object: { a: 1, b: '2' }, array: [1, '2'] }
  const search = '%E4%B8%AD%E6%96%87=%E4%B8%80&object=%7B%22a%22%3A1%2C%22b%22%3A%222%22%7D&array=%5B1%2C%222%22%5D'

  it('serialize', () => {
    expect(serialize(query)).toBe(search)
    expect(serialize({})).toBe('')
  })

  it('deserialize', () => {
    expect(deserialize(search)).toEqual(query)
    expect(deserialize('')).toEqual({})
  })

  it('getDataType', () => {
    expect(getDataType(true)).toBe('Boolean')
    expect(getDataType(null)).toBe('Null')
    expect(getDataType(undefined)).toBe('Undefined')
    expect(getDataType(123)).toBe('Number')
    expect(getDataType('123')).toBe('String')
    expect(getDataType(Symbol('s'))).toBe('Symbol')
    expect(getDataType([])).toBe('Array')
    expect(getDataType({})).toBe('Object')
    expect(getDataType(() => { })).toBe('Function')
    expect(getDataType(new Date())).toBe('Date')
    expect(getDataType(/(?:)/)).toBe('RegExp')
  })

  it('jsonClone', () => {
    const a: any = [{}]
    a[0].a = a
    a.push(a)
    expect(jsonClone(a)).toMatchInlineSnapshot(`
      [
        {
          "a": [Circular],
        },
        [Circular],
      ]
    `)
  })
})
