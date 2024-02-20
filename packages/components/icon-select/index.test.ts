import { mount } from '@vue/test-utils'

import IconSelect from './index.vue'

describe('test IconSelect', () => {
  const wrapper = mount(IconSelect)

  it('mount', async () => {
    expect(wrapper.find('.icon-select-input').exists()).toBeTruthy()
  })

  it('with modelValue', async () => {
    await wrapper.setProps({ modelValue: 'ep:plus' })
    expect(wrapper.find('.el-input__icon').html()).toContain('svg')
  })

  it('click open popover', async () => {
    await wrapper.find('.icon-select-input').trigger('click')
    expect(document.querySelector('.icon-select-popper')).not.toBeNull()
  })

  it('should sorted by collections', async () => {
    await wrapper.setProps({ collections: 'icon-park,ant-design' })
    await wrapper.find('.icon-select-input').trigger('click')
    const tabs = document.querySelectorAll('.el-tabs__item')
    expect(tabs.item(0).id).toEqual('tab-icon-park')
    expect(tabs.item(1).id).toEqual('tab-ant-design')
  })
})
