import { isFunctionString, isJSON } from '.'

describe('assert utils', () => {
  it('isJSON', () => {
    const obj = {
      a: 1,
    }
    const array = [
      obj,
      { a: 2 },
    ]
    const stringify = (e: any) => JSON.stringify(e, null, 2)
    expect(isJSON(stringify(obj))).toBeTruthy()
    expect(isJSON(stringify(array))).toBeTruthy()
    expect(isJSON('{}')).toBeTruthy()
    expect(isJSON('[]')).toBeTruthy()

    expect(isJSON('1')).toBeFalsy()
    expect(isJSON('false')).toBeFalsy()
  })

  it('isFunctionString', () => {
    function fn() {}
    const arrowFn = () => {}
    expect(isFunctionString(fn.toString())).toBeTruthy()
    expect(isFunctionString(arrowFn.toString())).toBeTruthy()

    expect(isFunctionString(`array.map(e=>e)`)).toBeFalsy()
    expect(isFunctionString(`switch () {}`)).toBeFalsy()
  })
})
