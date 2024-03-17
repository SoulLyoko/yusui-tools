import type { AxiosError, AxiosResponse } from 'axios'
import type { RequestConfig } from '.'

import { sleep } from '@yusui/utils'

import { handleDecryption, handleEncryption, handleError, handleHeaders } from '.'

describe('test request handler', () => {
  vi.mock('axios', async () => {
    class AxiosError { }
    return { AxiosError }
  })

  it('should handle headers', () => {
    const token = 'token'
    const clientId = 'clientId'
    const version = 'version'
    const config: RequestConfig = {
      withToken: true,
      withVersion: true,
      withClientID: true,
      token: () => token,
      clientId,
      version,
    }
    handleHeaders(config)
    expect(config.headers).toEqual({
      Authorization: token,
      Clientid: clientId,
      VERSION: version,
    })
  })

  it('should handle encryption', () => {
    const params = { params1: 'params1' }
    const data = { data1: 'data1' }
    const config: RequestConfig = {
      withCrypto: true,
      encrypt: data => data,
      headers: {},
      params,
      data,
    }
    handleEncryption(config)
    expect(config.params).toEqual({ data: JSON.stringify(params) })
    expect(config.data).toEqual(JSON.stringify(data))
    expect(config.headers).toEqual({ 'Content-Type': 'text/plain' })
  })

  it('should handle decryption', () => {
    const data = { data1: 'data1' }
    const config: RequestConfig = {
      withCrypto: true,
      decrypt: data => data,
    }
    const response = {
      config,
      data: JSON.stringify(data),
    } as AxiosResponse
    handleDecryption(response)
    expect(response.data).toEqual(data)
  })

  it('should handle error', async () => {
    let isLogout = false
    const config: RequestConfig = {
      withMessage: true,
      withLogout: true,
      withLogoutConfirm: true,
      logout: () => {
        isLogout = true
      },
    }
    const error = {
      response: {
        config,
        status: 401,
        data: { msg: 'token已过期' },
      },
    } as AxiosError

    expect(() => handleError(error)).rejects.toThrowError()
    expect(document.querySelector('.el-message')).not.toBeNull()
    expect(document.querySelector('.el-message__content')?.innerHTML).toEqual('token已过期')

    await sleep()
    expect(document.querySelector('.el-message-box')).not.toBeNull()
    const logoutBtn = document.querySelector('.el-message-box__btns>.el-button') as HTMLButtonElement
    logoutBtn?.click()
    await sleep()
    expect(isLogout).toBeTruthy()
  })
})
