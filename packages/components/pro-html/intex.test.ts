import { mount } from '@vue/test-utils'

import ProText from './index.vue'

describe('test ProHtml', () => {
  const wrapper = mount(ProText)

  it('mount', async () => {
    expect(wrapper.find('div').exists()).toBeTruthy()
  })

  it('reactive modelValue', async () => {
    await wrapper.setProps({ modelValue: '<div>HTML content</div>' })
    expect(wrapper.find('div').html()).toContain('<div>HTML content</div>')
  })
})
