export const listEmits = {
  'update:searchValue': (e: any) => e,
  'loadmore': () => true,
  'search': (e: string) => e,
  'searchChange': (e: string) => e,
  'searchCustom': (e: string) => e,
  'searchBlur': (e: string) => e,
  'searchFocus': (e: string) => e,
  'searchClear': () => true,
  'searchClick': () => true,
  'searchClickIcon': () => true,
  'itemClick': (row: any, index: number) => row && typeof index === 'number',
  'filterChange': (filterForm: object) => filterForm,
}
