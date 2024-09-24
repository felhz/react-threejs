import react from '@vitejs/plugin-react' // you can also use @vitejs/plugin-react-swc
import * as path from 'path'
import { defineConfig } from 'vite'
import pages from 'vite-plugin-react-pages'
const isDev = process.env.NODE_ENV === 'development'
export default defineConfig({
  base: isDev ? '' : '/vite-plugin-react-pages/',
  build: {
    outDir: 'docs',
  },
  plugins: [
    react(),
    pages({
      pagesDir: path.join(__dirname, 'pages'),
    }),
  ],
})
