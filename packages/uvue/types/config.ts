import type { UvueFormOption, UvueListOption } from '../components'
import type { AxiosInstance } from 'axios'

export interface UvueConfig {
  request?: AxiosInstance
  listOption?: UvueListOption
  formOption?: UvueFormOption
}
