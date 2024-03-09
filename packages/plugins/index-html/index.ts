import type { Plugin } from 'vite'

// head
const metaCharset = { tag: 'meta', attrs: { charset: 'UTF-8' } }
const metaViewport = { tag: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1.0' } }
const linkIcon = { tag: 'link', attrs: { rel: 'icon', href: '/favicon.ico', type: 'image/x-icon' } }
const title = { tag: 'title', children: '%VITE_APP_TITLE%' }
const scriptDark = {
  tag: 'script',
  children: `;(function () {
  if ('%VITE_PREFERS_DARK%' === 'false') return
  const prefersDark =
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches
  const setting = localStorage.getItem('vueuse-color-scheme') || 'auto'
  if (setting === 'dark' || (prefersDark && setting !== 'light'))
    document.documentElement.classList.toggle('dark', true)
})()`,
}
const styleLoading = {
  tag: 'style',
  children: `html,
body,
#app {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
}

html.dark {
  color-scheme: dark;
}

.page-loading {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.page-loading .icon {
  width: 40px;
  height: 40px;
  background-color: currentcolor;
  -webkit-mask: url('/img/page-loading.svg') no-repeat center / contain;
  mask: url('/img/page-loading.svg') no-repeat center / contain;
}`,
}

// body
const divApp = {
  tag: 'div',
  appendTo: 'body-prepend',
  attrs: { id: 'app' },
  children: `<div class="page-loading">
  <span class="icon"></span>
  <span class="text">正在加载中...</span>
</div>`,
}
const scriptMain = { tag: 'script', appendTo: 'body-prepend', attrs: { type: 'module', src: '/src/main.ts' } }
const noscript = { tag: 'noscript', appendTo: 'body-prepend', children: 'This website requires JavaScript to function properly. Please enable JavaScript to continue.' }

export function indexHtml(): Plugin {
  return {
    name: 'vite-plugin-index-html',
    enforce: 'pre',
    transformIndexHtml: {
      order: 'pre',
      handler(html) {
        console.log('🚀 ~ transformIndexHtml ~ html:', html)
        return {
          html,
          tags: [
            metaCharset,
            metaViewport,
            linkIcon,
            title,
            scriptDark,
            styleLoading,
            divApp,
            scriptMain,
            noscript,
          ],
        }
      },
    },

  }
}
