import { arrayToMap } from '.'

describe('array utils', () => {
  it('arrayToMap', () => {
    const list = [{ label: 'label1', value: 'value1' }, { label: 'label2', value: 'value2' }]
    const result = {
      value1: { label: 'label1', value: 'value1' },
      value2: { label: 'label2', value: 'value2' },
    }
    expect(arrayToMap(list, 'value')).toEqual(result)
  })
})
