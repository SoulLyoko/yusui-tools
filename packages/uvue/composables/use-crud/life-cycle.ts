import { onPageScroll, onPullDownRefresh, onReachBottom } from '@dcloudio/uni-app'

export function useLifeCycle({ crudState, loadMore, handleRefresh }: any) {
  /** 触底加载更多数据 */
  onReachBottom(() => {
    const { isReachBottom } = crudState.crudOption
    isReachBottom && loadMore()
  })
  /** 下拉刷新 */
  onPullDownRefresh(() => {
    const { isPullDown } = crudState.crudOption
    isPullDown && handleRefresh()
  })
  /** 返回顶部按钮 */
  onPageScroll((e) => {
    if (crudState.crudOption.isSrollTop)
      crudState.scrollTop = e.scrollTop
  })
}
