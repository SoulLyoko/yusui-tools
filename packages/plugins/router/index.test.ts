import { setupRouterComponents } from '.'

describe('createEnvDts', () => {
  it('should set components name', async () => {
    const routes = [
      { path: '/', name: 'index', component: () => Promise.resolve({ default: {} }) },
      { path: '/hi', name: 'hi', children: [
        { path: '/hi/[name]', name: 'hi-name', component: () => Promise.resolve({ default: {} }) },
      ] },
    ]
    const namedRoutes = setupRouterComponents(routes)
    const indexComponent = await (namedRoutes[0].component as any)()
    const hiNameComponent = await (namedRoutes[1].children?.[0].component as any)()
    expect(indexComponent.default.name).toEqual('index')
    expect(hiNameComponent.default.name).toEqual('hi-name')
  })
})
