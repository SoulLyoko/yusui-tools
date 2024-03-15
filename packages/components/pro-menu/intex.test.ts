import { mount } from '@vue/test-utils'

import ProMenu from './index.vue'

describe('test ProMenu', () => {
  const wrapper = mount(ProMenu)

  it('mount', async () => {
    expect(wrapper.find('.el-menu').exists()).toBeTruthy()
  })
})
