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

  const wrapper = mount(ProTree, {
    props: { data: treeData },
    global: { stubs: { transition: false } }, // solve el-tag error
  })

  it('mount', async () => {
    expect(wrapper.find('.pro-tree').html()).toContain('一级 1')
  })

  it('show tag', async () => {
    await wrapper.setProps({ modelValue: '1-1' })
    expect(wrapper.find('.el-select__selection').html()).toContain('二级 1-1')
  })

  it('show multi tag', async () => {
    await wrapper.setProps({ modelValue: ['1-1', '2-1'], multiple: true })
    expect(wrapper.find('.el-select__selection').html()).and.contain('二级 1-1').contain('二级 2-1')
  })
})
