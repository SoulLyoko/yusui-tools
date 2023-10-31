import { mount } from '@vue/test-utils'
import { defineComponent, h } from 'vue'
import { sleep } from '@yusui/utils'

import { useOverlay } from '.'

const TestComponent = defineComponent({
  setup() {
    const { open, close } = useOverlay({
      header: () => h('div', { class: 'header' }, 'header'),
      content: () => h(
        'div',
        { class: 'content' },
        h('button', { class: 'close-btn', onClick: () => close() }, 'close'),
      ),
      footer: () => h('div', { class: 'footer' }, 'footer'),
    })

    open()
  },
})

describe('useOverlay', () => {
  mount(TestComponent)

  it('should be mounted', () => {
    const overlayDom = document.querySelector('.el-overlay')
    expect(overlayDom).not.toBeNull()
  })

  it('should render slots', () => {
    const header = document.querySelector('.header')
    const content = document.querySelector('.content')
    const footer = document.querySelector('.footer')
    expect(header).not.toBeNull()
    expect(content).not.toBeNull()
    expect(footer).not.toBeNull()
  })

  it('should be unmounted', async () => {
    const closeBtn = document?.querySelector('.close-btn') as HTMLButtonElement
    expect(closeBtn).not.toBeNull()
    closeBtn?.click()
    await sleep(330)
    expect(document.querySelector('.el-overlay')).toBeNull()
  })
})
