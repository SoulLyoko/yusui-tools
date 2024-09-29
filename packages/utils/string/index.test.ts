import { uuid } from '.'

describe('string utils', () => {
  it('uuid', () => {
    expect(uuid().length).toBe(16)
    expect(uuid(8).length).toBe(8)
    expect(/[0-9]|[A-Z]|[a-z]/.test(uuid())).toBeTruthy()
    expect(/[0-9]|[A-F]/.test(uuid(16, 16))).toBeTruthy()
    expect(/[A-Z]|[a-z]/.test(uuid(16, 10))).toBeFalsy()
  })
})
