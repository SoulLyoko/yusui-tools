import { mount } from '@vue/test-utils'

import EpMenu from './index.vue'

describe('EpMenu', () => {
  const wrapper = mount(EpMenu)

  it('mount', async () => {
    expect(wrapper.find('.el-menu').exists()).toBeTruthy()
  })
})
