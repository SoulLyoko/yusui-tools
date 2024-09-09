import type { AxiosInstance } from 'axios'
import type { UvueFormOption, UvueListOption } from '../components'

export interface UvueConfig {
  request?: AxiosInstance
  listOption?: UvueListOption
  formOption?: UvueFormOption
}
