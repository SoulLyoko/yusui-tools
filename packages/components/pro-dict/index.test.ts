import { mount } from '@vue/test-utils'

import ProDict from './index.vue'

describe('test ProDict', () => {
  it('renders DictSelect component by default', () => {
    const wrapper = mount(ProDict)
    expect(wrapper.find('.el-select').exists()).toBeTruthy()
  })

  it('renders DictCascader component when type prop is "cascader"', () => {
    const wrapper = mount(ProDict, { props: { type: 'cascader' } })
    expect(wrapper.find('.el-cascader').exists()).toBeTruthy()
  })

  it('renders DictCheckbox component when type prop is "checkbox"', () => {
    const wrapper = mount(ProDict, { props: { type: 'checkbox' } })
    expect(wrapper.find('.el-checkbox-group').exists()).toBeTruthy()
  })

  it('renders DictRadio component when type prop is "radio"', () => {
    const wrapper = mount(ProDict, { props: { type: 'radio' } })
    expect(wrapper.find('.el-radio-group').exists()).toBeTruthy()
  })

  it('renders DictSwitch component when type prop is "switch"', () => {
    const wrapper = mount(ProDict, { props: { type: 'switch' } })
    expect(wrapper.find('.el-switch').exists()).toBeTruthy()
  })

  it('renders DictText component when type prop is "text"', () => {
    const wrapper = mount(ProDict, { props: { type: 'text' } })
    expect(wrapper.find('.el-text').exists()).toBeTruthy()
  })

  it('renders DictTreeSelect component when type prop is "tree-select"', () => {
    const wrapper = mount(ProDict, { props: { type: 'tree-select' } })
    expect(wrapper.find('.el-select').exists()).toBeTruthy()
    expect(document.querySelector('.el-tree')).not.toBeNull()
  })
})
