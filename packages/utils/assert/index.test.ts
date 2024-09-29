import { isJSON } from '.'

describe('assert utils', () => {
  it('isJSON', () => {
    expect(isJSON('{}')).toBeTruthy()
    expect(isJSON('{ "a": 1 }')).toBeTruthy()
    expect(isJSON('[1,2]')).toBeTruthy()
    expect(isJSON('1')).toBeFalsy()
    expect(isJSON('false')).toBeFalsy()
  })
})
