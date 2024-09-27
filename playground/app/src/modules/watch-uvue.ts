import path from 'node:path'

import { defineVixtModule } from 'vixt/core'

export default defineVixtModule({
  meta: {
    name: 'vixt:watch-uvue',
  },
  setup(_, vixt) {
    return {
      name: 'vixt:watch-uvue',
      configureServer(server) {
        server.watcher.add(path.resolve(vixt.options.rootDir!, '../../packages/uvue'))
        server.watcher.on('change', (file) => {
          if (file.includes('packages\\uvue'))
            server.restart()
        })
      },
    }
  },
})
