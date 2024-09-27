import type { UvueFilterOption } from '../../uvue-filter/types'
import type { listEmits, listProps } from '../constants'
import type { BackTopProps } from 'uview-plus/types/comps/backTop'
import type { CellProps } from 'uview-plus/types/comps/cell'
import type { CellGroupProps } from 'uview-plus/types/comps/cellGroup'
import type { EmptyProps } from 'uview-plus/types/comps/empty'
import type { LoadMoreProps } from 'uview-plus/types/comps/loadMore'
import type { SearchProps } from 'uview-plus/types/comps/search'
import type { StickyProps } from 'uview-plus/types/comps/sticky'
import type { ExtractPropTypes, SetupContext } from 'vue'

export type UvueListProps = ExtractPropTypes<typeof listProps>
export type UvueListEmitFn = SetupContext<typeof listEmits>['emit']

export interface UvueListOption<T = any> {
  /** 唯一键 */
  rowKey?: string
  /** [吸顶属性](https://uiadmin.net/uview-plus/components/sticky.html#props) */
  sticky?: StickyProps | false
  /** [搜索栏属性](https://uiadmin.net/uview-plus/components/search.html#props) */
  search?: SearchProps | false
  /** 筛选栏属性 */
  filter?: UvueFilterOption | false
  /** [空数据属性](https://uiadmin.net/uview-plus/components/empty.html#props) */
  empty?: EmptyProps | false
  /** [加载更多属性](https://uiadmin.net/uview-plus/components/loadMore.html#props) */
  loadmore?: LoadMoreProps | false
  /** [返回顶部属性](https://uiadmin.net/uview-plus/components/backTop.html#props) */
  backTop?: BackTopProps | false
  /** [单元格组属性](https://uiadmin.net/uview-plus/components/cell.html#cellgroup-props) */
  cellGroup?: CellGroupProps
  /** [单元格属性](https://uiadmin.net/uview-plus/components/cell.html#cell-props) */
  cell?: CellProps
  /** 对列表数据格式化 */
  formatter?: (row: T) => object
}
