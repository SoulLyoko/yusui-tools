import { mount } from '@vue/test-utils'

import ProTree from './index.vue'

describe('test ProTree', () => {
  const treeData = [
    {
      value: '1',
      label: '一级 1',
      children: [
        {
          value: '1-1',
          label: '二级 1-1',
        },
      ],
    },
    {
      value: '2',
      label: '一级 2',
      children: [
        {
          value: '2-1',
          label: '二级 2-1',
        },
      ],
    },
  ]

  const wrapper = mount(ProTree, { props: { data: treeData } })

  it('mount', async () => {
    expect(wrapper.find('.pro-tree').html()).toContain('一级 1')
  })

  it('show tag', async () => {
    await wrapper.setProps({ modelValue: '1-1' })
    expect(wrapper.find('.el-tag').html()).toContain('二级 1-1')
  })

  it('show multi tag', async () => {
    await wrapper.setProps({ modelValue: ['1-1', '2-1'], multiple: true })
    await wrapper.vm.$nextTick()
    await wrapper.vm.$nextTick()
    expect(wrapper.find('.el-input').html()).and.contain('二级 1-1').contain('二级 2-1')
  })
})
