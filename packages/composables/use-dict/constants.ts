import type { DicProps } from '@smallwei/avue'

const defaultDicProps: DicProps = {
  label: 'label',
  value: 'value',
  children: 'children',
  disabled: 'disabled',
  desc: 'desc',
  res: 'data',
}

export function mergeDicProps(props?: DicProps) {
  return { ...defaultDicProps, ...props }
}
