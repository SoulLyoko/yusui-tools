import { mount } from '@vue/test-utils'

import ProCrud from './index.vue'

// import './styles/pro-crud.scss'

describe('test ProCrud', () => {
  const wrapper = mount(ProCrud)

  it('mount', async () => {
    expect(wrapper.find('.pro-crud').exists()).toBeTruthy()
  })

  it('card type', async () => {
    await wrapper.setProps({ option: { type: 'card' } })
    expect(wrapper.find('.pro-crud__card').exists()).toBeTruthy()
  })

  it('list type', async () => {
    await wrapper.setProps({ option: { type: 'list' } })
    expect(wrapper.find('.pro-crud__list').exists()).toBeTruthy()
  })
})
