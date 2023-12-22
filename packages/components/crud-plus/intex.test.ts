import { mount } from '@vue/test-utils'

import CrudPlus from './index.vue'

import './styles/crud-plus.scss'

describe('test CrudPlus', () => {
  const wrapper = mount(CrudPlus)

  it('mount', async () => {
    expect(wrapper.find('.crud-plus').exists()).toBeTruthy()
  })

  it('card type', async () => {
    await wrapper.setProps({ option: { type: 'card' } })
    expect(wrapper.find('.crud-plus__card').exists()).toBeTruthy()
  })

  it('list type', async () => {
    await wrapper.setProps({ option: { type: 'list' } })
    expect(wrapper.find('.crud-plus__list').exists()).toBeTruthy()
  })
})
