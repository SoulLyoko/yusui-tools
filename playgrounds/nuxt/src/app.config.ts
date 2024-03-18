import { avueRequest } from './api'

export default defineAppConfig({
  avue: {
    menuType: 'text',
    axios: avueRequest,
  },
  elementPlus: {
    size: 'default',
  },
})
