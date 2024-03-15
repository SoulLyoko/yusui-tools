import { mount } from '@vue/test-utils'

import ProText from './index.vue'

describe('test ProText', () => {
  const wrapper = mount(ProText)

  it('mount', async () => {
    expect(wrapper.find('span').exists()).toBeTruthy()
  })

  it('reactive modelValue', async () => {
    await wrapper.setProps({ modelValue: 'test' })
    expect(wrapper.find('span').html()).toContain('test')
  })
})
