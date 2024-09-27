import React from 'react'
import { createTheme, defaultSideNavs } from 'vite-pages-theme-doc'

export default createTheme({
  logo: <div style={{ fontSize: '20px' }}>THREEJS EXAMPLE</div>,
  topNavs: [
    // { label: 'Home', path: '/' },
    {
      label: 'THREEJS',
      path: '/example',
      activeIfMatch: '/example',
    },
    {
      label: '算法',
      path: '/algor',
      activeIfMatch: '/guide',
    },
    // { label: 'Users', path: '/users', activeIfMatch: '/users' },

    {
      label: 'Vite Pages',
      href: 'https://github.com/vitejs/vite-plugin-react-pages',
    },
  ],
  sideNavs: (ctx) => {
    let navs = defaultSideNavs(ctx, {
      groupConfig: {
        reference: {
          concepts: {
            label: 'Concepts',
            order: 1,
          },
          'cli-commands': {
            label: 'CLI Commands',
            order: 2,
          },
          'error-codes': {
            label: 'Error Codes',
            order: 3,
          },
        },
      },
    })

    if (!ctx.loadState.routePath.includes('/example')) {
      // navs.unshift({
      //   label: 'THREEJS',
      //   path: '/example',
      // })
    }
    return navs
  },
})
