import { mergeWith } from 'lodash-unified'

export function mergeConfig<TObject, TSource>(object: TObject, source: TSource) {
  return mergeWith(object, source, (obj, src) => {
    if (Array.isArray(obj))
      return obj.concat(src)
  })
}
