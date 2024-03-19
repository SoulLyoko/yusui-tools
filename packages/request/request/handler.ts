/* eslint-disable import/newline-after-import */
import type { AxiosResponse } from 'axios'
import type { RequestConfig } from '../types'

import { AxiosError } from 'axios'
import { debounce } from 'lodash-es'
// #ifdef H5
import { ElMessage, ElMessageBox } from 'element-plus'
// #endif

/** 处理请求头 */
export function handleHeaders(config: RequestConfig) {
  if (!config.headers)
    config.headers = {}
  const { withToken, withVersion, withClientID, clientId, version, token } = config ?? {}
  withClientID && (config.headers.Clientid = clientId || '')
  withToken && (config.headers.Authorization = config.headers.Authorization || token?.() || '')
  withVersion && (config.headers.VERSION = version || '')
}

/** 处理响应状态 */
export function handleResponseCode(response: AxiosResponse) {
  const { code, msg } = response.data
  response.status = code || 200
  if (/404/.test(msg))
    response.status = 404
  // 登录状态已过期
  else if (/过期/.test(msg))
    response.status = 401
}

/** 退出登录 */
const handleLogout = debounce((config: RequestConfig) => {
  const { withLogoutConfirm, logout } = config
  if (!withLogoutConfirm || !logout)
    return logout?.()

  const title = '提示'
  const content = '登录状态已失效，请重新登录'
  const btnText = '重新登录'
  if (config.isApp) {
    uni.showModal({
      title,
      content,
      showCancel: false,
      confirmText: btnText,
      success: config.logout,
    })
  }
  else {
    ElMessageBox.close()
    ElMessageBox.confirm(content, title, {
      type: 'info',
      confirmButtonText: btnText,
      showCancelButton: false,
      showClose: false,
    }).then(config.logout)
  }
})

/** 处理错误 */
export function handleError(error: Partial<AxiosError<any, any>>) {
  const { response } = error
  if (!response) {
    console.error(error)
    return
  }
  const { status, data, config, request } = response
  const { url, withMessage, withLogout, isApp } = config as RequestConfig
  const { msg } = data
  const errorCode: Record<number, string> = {
    400: '请求错误',
    401: '登录状态已失效，请重新登录',
    403: '当前操作没有权限',
    404: `请求的地址不存在：${url}`,
    405: '请求方法不正确',
    408: '请求超时',
    500: '内部服务器错误',
    501: '请求方法未实现',
    502: '网络错误',
    503: '服务不可用',
    504: '网络超时',
    505: 'HTTP版本不受支持',
  }
  const errMsg = msg || errorCode[status] || '未知错误'
  withMessage && (isApp ? uni.showToast({ title: errMsg, icon: 'none' }) : ElMessage.error({ message: errMsg, grouping: true, repeatNum: -99 }))
  withLogout && status === 401 && handleLogout(config)
  return Promise.reject(new AxiosError(errMsg, `${status}`, config, request, response))
}

/** 处理加密 */
export function handleEncryption(config: RequestConfig) {
  const { withCrypto, encrypt } = config
  if (!withCrypto || !encrypt)
    return
  if (config.params)
    config.params = { data: encrypt(JSON.stringify(config.params)) }
  if (config.data) {
    config.data = encrypt(JSON.stringify(config.data))
    config.headers!['Content-Type'] = 'text/plain'
  }
}
/** 处理解密 */
export function handleDecryption(response: AxiosResponse) {
  const config = response.config as RequestConfig
  const { withCrypto, decrypt } = config
  if (!withCrypto || !decrypt)
    return
  if (typeof response.data === 'string')
    response.data = JSON.parse(decrypt(response.data))
}
