import type { Plugin } from 'vite'

const styleStr = `<style>
#compatible-body { display: none; cursor: default; position: fixed; left: 50%; top: 50%; margin: -300px 0 0 -400px; width: 798px; height: 598px; border-radius: 5px; -webkit-border-radius: 5px; -moz-border-radius: 5px; background: #ffffe0; border: 1px solid #ee2c2c; text-align: center; font-family: Helvetica, '微软雅黑'; user-select: none; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; -o-user-select: none; user-select: none; box-sizing: border-box; -webkit-touch-callout: none; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; -webkit-tap-highlight-color: transparent }
#compatible-body p{margin:0;letter-spacing:1px}
#compatible-body img{border-style:none}
#compatible-body .upgrade-danger{height:80px;padding:30px 0 20px}
#compatible-body .text-red { color: #ee2c2c; font-weight: 600 }
#compatible-body .upgrade-text { height: 80px; line-height: 40px; color: #454545 }
#compatible-body .upgrade-browser{margin:10px auto;width:560px;height:180px}
#compatible-body .upgrade-browser a{cursor:pointer;text-decoration:none}
#compatible-body .browser-item{float:left;width:118px;height:158px;margin:10px;border:1px solid #ddd;-webkit-border-radius:5px;-moz-border-radius:5px;border-radius:5px;color:#454545}
#compatible-body .browser-item:hover{color:#409eff;border-color:#409eff}
#compatible-body .browser-logo{height:60px;margin:18px 0 10px;text-align:center}
#compatible-body .browser-name{line-height:20px;font-size:12px;color:#454545}
#compatible-body .browser-link{height:40px;margin-top:10px;-webkit-border-radius:0 0 5px 5px;-moz-border-radius:0 0 5px 5px;border-radius:0 0 5px 5px;background-color:#eee;line-height:40px;font-size:14px}
#compatible-body .browser-recommend{color:#409eff}
#compatible-body .upgrade-explain{width:520px;margin:20px auto;padding-left:20px;text-indent:-1.4em;text-align:left;line-height:24px;font-size:14px;color:#666}
#compatible-body .upgrade-explain img{width:20px;height:20px;vertical-align:middle;display:inline}
</style>`

const compatibleImgList = {
  'danger': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAB+1BMVEUAAAD/AAD/gID/Var/gID/Zpn/bZL/gID/cY7/gID/dIv/gID/don/gID/d4j/gID/eIf/eYb/c4D/eoX/eoX/doD/e4T/doD/e4T/d4D/e4T/fIP/eID/fIP/eID/fIP/fIP/eYD/eYD/d4L/eoD/d4L/eIL/e4D/e4D/eYL/e4D/eYL/d4D/eYL/d4D/eYL/eID/eoH/eID/eoH/eID/eoH/eID/eoH/eID/eoH/eYD/d4H/eYD/eoD/eoD/eoD/eYH/eoD/eoD/eYH/eID/eYH/eID/eYH/eID/eYH/eID/eYD/eoH/eYD/eoH/eYD/eoH/eIH/eIH/eYD/eIH/eYD/eoD/eoD/eoD/eoD/eYD/eYD/eYD/eID/eID/eYD/eoD/eYD/eoD/eYD/eoD/eYD/eYD/eYD/eID/eID/eYD/eYD/eYD/eYD/eoD/eYD/eoD/eYD/eoD/eID/eYD/eID/eYD/eID/eYD/eYD/eYD/eYD/eYD/eYD/eYD/eID/eYD/eYD/eYD/eYD/eYD/eYD/eYD/eYD/eYD/eYD/eID/eID/eYD/eYD/eYD/eYD/eYD/eYD/eYD/eYD/eYD/eoD/eYD/eYD/eYD/eYD/eYD/eYD/eYD/eYD/eYD/eYD/eYD/eYD/eYD/eYD/eYD/eYD/eYD/eYD///85lojOAAAAp3RSTlMAAQIDBAUHCAkKCwwNDg8QERMUFxkaGxwdHh8hIiMkJScoKissLzE0ODk6Ozw9Pj9AQUJDREVGR0hJSk9UVlpcXV5gYWJjZGVmZ2xwcXJzdHV3eXp7foCChIaHiYuOkJGVlpeYmZqcnp+hpKanqKqrrK2usrO0tba3uLy/wsTGx8nKy8zP0NHS1dfY2tze4ePl5ujp6uvt7u/w8fLz9PX29/n6+/z9/j6kuW0AAAABYktHRKhQCDaSAAACt0lEQVRYw+2Z6V8SQRjHAZPooKgsUjO1slPLLjtNO8yyMjKvLrOEosMOS7svQw27NUuJU1zm36ymZWGX2dnZmeelv9ffz5fPwu7O8/ywWNiSv9ACGk9M6nXC6fJ96G+GV0D51r1HOJMnQHTOzgRKp79MWOdonkBZSfqLhXTL238gTWYe77LyXmtd/wwiJXi+1Lyt8FhfHOlnqG3zHGaXrby+exQZJvTIU210a84v23f6+ospxBwpeP/CkS2FdoLr0NPXoxHEm58f3l6xqXz2BBJNlUq4WNiH9s8KZ4VZ+X0uEwlCmMxTsKUwl5w5S9bDCDcq2AEYYa2CNcEImxXsEoywS8HuwAgfKtgrGOGggn2BEY6lqbxpGGEqfWa4oZ7lEpnaBCWslqlaKGG9TJ2FErbK1FUoYY9M9UEJB2RqEEo4IlPjUMJJebxIgZ0p/6es1XCH1BoMbYcT7sXQYThhI4ZaGT40nXl0YQeGvFSmUiW0SlTYj6EnVKZCPcHS5+DnmBlBbIctzjAV/oiZEA2JaLYX6mOKYv9oJxUJaIb2dvqvctPr9d6lEj6NsEZ0+KrT7mHTYr6UW7uoPNNlv67KJKoHvcnZfBp1hZ+zqLAedCpHuCgsIowvy13OrokIbxC2vdIkv1BaS9pFe/iFfuJyWzDFK4y5yetyA6/wjM7+bR3gE7606W30rk88wvEiSocUNS9MVNJah6OkN929TAi31kl6j3HL7FvhtkExsiBozhdwGLU2xRNmfN9WGvdAVSYKklAFS7N0nNkX2crWVbUw+qI7WNuvi0y+2E72bq6LxbfbTNvXYeiL7zHXHzalDL6/GrON5MEwzfdrG0fZTBl3hkq46vA2nVM40TmXs9Yt6Cb0sFJvuUDvvMQTUOu+XxbR4RQ1+N6N4Rsl+KBlgw3o7wC7y+VgI/8A332OE1ZMmhwAAAAASUVORK5CYII=',
  'chrome': 'data:image/png;base64,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',
  'edge': 'data:image/png;base64,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',
  '360ee': 'data:image/png;base64,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',
  'qq': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAACxFBMVEUAAAAA//////8Aqv8AgP////8Amf////8AgP////8kkv8ggP////8cjv////8Xi/8Vlf////8Uif8Skv8RiP////8Ph/8Ojv8Nhv8Yhv////8Xi/8WkP8Uj/8Uif8Sif8Sjf////////8SjP8SiPkRi/kRjvkRi/n///8VivoVjfoUivoUjPr///8TjPoTi/r///8SjfsRivsRjPsVivsUi/v///8Ti/sSjPsSivsSivsVivz///9fsfwUivwTjPwSivwSivz///8SivwUi/wUjPwUi/z///+NyPwTjPwTivzh7/8TjPwTivwSi/z///////8Si/wUjP0Ui/0UjP0bjv0Tiv3///8SjP3///8UjP0Ui/0Ti/3///////8Ti/3///8Ui/sTivv///8Ti/sTi/v///8TjPv///8Ti/v///8Si/sSivv///8Ui/sUi/sTi/sTjPwTi/wSivz///8Uivz///9Hpfz///8Ti/wTi/wTi/wTivwSivwUjPwUjPwTi/wTi/wTi/wTivwTi/wTi/wSi/wUi/wTi/wTivwTivwTi/z///8Ti/yq1v6s1v6w2P4Ti/zD4v/////K5f8Si/yHxPzU6v8Ui/zY6/8Tivzg8P////8Ti/zj8f8TjPxuuPzk8v8Ti/xqtv4Ti/zm8v8Ti/1hsv7///8Si/0Si/0Ui/3v+P////8Tiv3v9/4Ti/1Tqv0TjP1Pqv4Ti/sTi/sTi/v3+/8Ti/tEo/0Ti/z3+v////8Ui/z///////////8Ti/w2nPw2nP0Ti/wTi/wTi/wTi/z///8Ti/wTivwTi/z///8Ui/wTi/wolf3+//8Ti/wTi/wTi/z///8Ti/wTi/wfkPz+/v////8Ti/wTi/wTi/z///////8Ti/wYjfz///8Ti/z///////8Ti/wVjPz///8Ti/wUi/wTi/z///+f4JMqAAAA6nRSTlMAAQIDBAQFBQYGBwgICQkLDAwNDg8PERITFRUWFxkaHB0dJCorLC0uLjAxMjMzNTc5Ojs8PUBAREVGSEpKS0xQU1VWV1hZWlpcXV5eX2BhYWJjZmdoaGlrb3BzdXd3eHl5gIODhIaGh4eIiIuMjI2PkZKTmZqbnZ6foaKjpKaoqqytrq+wsrW3ubq8vb2/v7+/wMDAwcLDw8TEx8fHyMjJycnKysvLzM3Nz9DR0dHS0tPT1NTV19jZ2trb293e3t/g4eLi4+Tl5ubn6Orq6+zu7/Dx8vLz9PT19fb3+Pj5+vr6+/v8/f39/v7pNwzCAAAAAWJLR0Trv90muAAAAuZJREFUGBmlwYdflVUABuAXcuB1QLmuiuDemibumTmL3JoDNUfuCZqW4iJRc68yysqFliPce1A2JCWcJajXAYrv+Se6gw/O+db9+Pk8sBTepNN7gwe927VuWRRPrf6J6dTkn07oVRMORQz/mXr5X/Z0IbjoebdpKnPCW7AXHnePljLjXLDR7nfaSqsHK6Vm5DGI7MEwV3EtHfi8BExEHaIjK8Ng4D5Jh1aXh07ED3QsKQSqRBbDOCiGsDjyOkJSP5vFcjMSRXbSxL3UxISExakemliCQt1pcGdB+zfgV7bNkoc0aIUCYeep44mvBkm1+DzqbEGB96lzqSF0Wp+lzjsI2EnVBjcMqqZQtQx+9anaFw4T4fuo8LjhM5OK9JowFfUHFUPhk0ZFJ1joRkUyvCLzKUuGpWTK7rsA9KKiKSzFUPE2gGmUHYKNo5QNB7CUstGw8QllcwHsoiwGNtpQ9gWADEryK8FGDcpSANynJBN2QnIoOQ7gFiUZsPU3JacAZFLyJ2xlU7IHQAYlz8Jgw0XZOgBplDWAjWaUJQFYQVksLFSo07z2MMrmAJhCWRLMlB647bEQ4sH3e1+x0IcAYinLdsOo5UWhOfwrNY0B1KJiEgwGPBVFsk4wICcMXscpux0Nnc7PhSzrN/qtgs8MKtaEQFH5hlD98oo+sfBpQdUkKKYLvR/p5akCv11UjYIk9C+ht5teKxDQjzoLXPBqNPG7i5fXfyoMHj0h2QIBrmvUSY1B9UUvhZVj5FpoetNg4RVhI+vrvtCE7KDOvxeEvdypoSjQ1EPVVhHUfGhGUPHPfyK4PtB8RtlXwoGroSgQkUbJduFEW2gij7LIt8KJsShUdQ8LfSOcmIUiVVKo2SycmAhJifF5DDgmnOgBRYfr9HtxRgR3902o3LNz6HNABDcZBtFzH9JrkwjmSDmYiBr1E8mNT4Wtg9VhoV7c8vRz+3OFpRsfl4GdyJguH4wcY+qjtiXx2v4HyOWcWeAvQRIAAAAASUVORK5CYII=',
  'trident': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAABmJLR0QA/wD/AP+gvaeTAAACHElEQVQ4jc2SO2iTURTHf+cmpm1SbR6KxQ5dRPGBEKXtJmosuCiZAiKalIBjHVzUTUQHwdFJsaQ+iVCxIIiS4iA6OTi0DlJEirTGmLTURxL5vuNgki8va936hwv3/u85v3Mu58Jal/xX9NiHTthwFGOOoLoDQVEekwheXR0w9WUb6j4N7AfdAvgBH1ACuQL2NEgUkQnigUcApi0orS7G8pdR1wzoWdABoK8CA+gAjaJmFm8gCTpYTW0Fqgo/CncQLgCuFfoPIzpFMX8QWP47cHxxFBgGcnXuJ+ABolOAXecHsGUSlZftgem5LlRPAhlgY8WdxJS3kwgeJx6KoBIBSnVZHpS97YFF3z7QJ0Cs4lh43ElO9X6vxYwEXqByvSHPaKK6bZzyzUI/bn0L9FRLgPMcR9oL7K4zyngDXmJiuRvi1ukltAYD6AQ93ApskYfitxCQdYC3l7ZiWSeaAvPA+VUAYbF7CcAB2laS1qn7wWRI+Gcb3FtfdyLsqp1dMs+olGgAKMeAN8BcXapB7bvc+Ly55qQKYYxkEEnXlrKnev1nKOMLPmzPMipnEM0B95o6/Qn6CpVuhIGml8zgDYSJSdnp0DLrAcFY70gE74NcawJ2gUQQhppg86grWoU5wI+bssACag4B0O8/h8hDVtYzbB1ipOd9ven8w1RuEDUXgQ6ULKLPEX2K7RoG+wBi+kB/AdOIThAPvf5HwTWq39eEqEKRtdLwAAAAAElFTkSuQmCC',
  'webkit': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAMAAAC6V+0/AAAAflBMVEUAAAAA//8Aqv8Av/8Amf8Aqv8An98AmeYAnesAn+8AnPEAovMAo+sAn+8Ao/EAn/EAoO8Aou8An+4AoO8Aoe4An+4Aoe4AoO4AoO4Aoe8AoO8AoO4An+4Aoe0AoO4AoO8AoO4Aoe4AoO4AoO8AoO4AoO4AoO4AoO4AoO7///8YhyM+AAAAKHRSTlMAAQMEBQYICg0QEhYZICQlPj9NTnd4kqGnqquxuL3Eyc/Q09nc5fb3YzrNkAAAAAFiS0dEKcq3hSQAAABrSURBVBgZncFJAoIwEEXBT8RZFCdCnEAUffc/obBw0WFHlUbJ9hpYv06KLWsOiswfsJU1vcHXyXAXoJaReDqljIJeG4JP9Zf6EFp6hYySjk9kPIHrRIb7wH0mawfVQpEjzUqx83ujgTzTGD+/Ngl2M6ugugAAAABJRU5ErkJggg==`',
}

const htmlStr = `<div id="compatible-body">
<div class="upgrade-danger">
  <img src="${compatibleImgList.danger}" width="80" height="80" draggable="false">
</div>
<div class="upgrade-text">
  <p class="text-red">检测到当前浏览器内核版本过低，存在安全隐患或导致系统无法正常使用</p>
  <p>为了账号安全及更好的上网体验，推荐使用以下浏览器</p>
</div>
<div class="upgrade-browser">
  <a href="https://www.google.cn/chrome/" target="_blank" draggable="false">
    <div class="browser-item">
      <div class="browser-logo">
        <img src="${compatibleImgList.chrome}" width="60" height="60" draggable="false">
      </div>
      <div class="browser-name">谷歌Chrome</div>
      <div class="browser-link browser-recommend">推荐下载</div>
    </div>
  </a>
  <a href="https://www.microsoft.com/zh-cn/edge/" target="_blank" draggable="false">
    <div class="browser-item">
      <div class="browser-logo">
        <img src="${compatibleImgList.edge}" width="60" height="60" draggable="false">
      </div>
      <div class="browser-name">微软Edge</div>
      <div class="browser-link">立即下载</div>
    </div>
  </a>
  <a href="https://browser.360.cn/ee/" target="_blank" draggable="false">
    <div class="browser-item">
      <div class="browser-logo">
        <img src="${compatibleImgList['360ee']}" width="60" height="60" draggable="false">
      </div>
      <div class="browser-name">360极速版</div>
      <div class="browser-link">立即下载</div>
    </div>
  </a>
  <a href="https://browser.qq.com/" target="_blank" draggable="false">
    <div class="browser-item">
      <div class="browser-logo">
        <img src="${compatibleImgList.qq}" width="60" height="60" draggable="false">
      </div>
      <div class="browser-name">QQ浏览器</div>
      <div class="browser-link">立即下载</div>
    </div>
  </a>
</div>
<div class="upgrade-explain">
  <p>使用说明:</p>
  <p>1. Windows 推荐使用 <b>Chrome</b> 浏览器，<b>速度更快，安全性高，兼容性好</b>；</p>
  <p>2. MacOS / IOS 默认使用 Safari 浏览器，版本要求12.0以上；</p>
  <p>3. 360、QQ、搜狗、2345等国产双内核浏览器，访问系统时请使用"<b>极速模式</b>"，<br>点击顶部地址栏右侧图标
    <img src="${compatibleImgList.trident}" draggable="false"> 切换至<img src="${compatibleImgList.webkit}" draggable="false">即可。
  </p>
</div>
</div>`

const jsStr = `<script>
if (window.navigator.userAgent.indexOf('Chrome') == -1) {
  window.onload = function (){
    document.getElementById("compatible-body").style.display = 'block';
  }
}
</script>`

/**
 * index.html 写入兼容提示代码
  */
export function fixHtml(html: string) {
  return (
    html
      .replace('</head>', `${styleStr}\n</head>`)
      .replace('<div id="app">', `${htmlStr}\n<div id="app">`)
      // .replace(/(<script (type="module" |)src="\/src\/main)/, `${jsStr}\n$1`)
      .replace(/(<body>)/, `$1\n${jsStr}`)
  )
}

export function compatibleTips(): Plugin {
  return {
    name: 'vite-plugin-compatible-tips',
    enforce: 'pre',
    transformIndexHtml(html) {
      html = fixHtml(html)
      return html
    },
  }
}
