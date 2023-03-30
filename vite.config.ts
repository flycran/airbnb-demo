import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [ react() ],
  resolve: {
    alias: {
      '@': resolve('src'),
      'components': resolve('src/components'),
      'utils': resolve('src/utils'),
      'view': resolve('src/view'),
      'antd/dist/reset.css': resolve(__dirname, 'node_modules/antd/dist/reset.css'),  // <-- add this
      antd: resolve(__dirname, 'node_modules/antd/dist/antd.js'),
      '@ant-design/icons': resolve(__dirname,'node_modules/@ant-design/icons/dist/index.umd.js'),
    },
  },
})
