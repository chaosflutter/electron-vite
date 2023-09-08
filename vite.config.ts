// vite.config.ts
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { devPlugin, getReplacer } from './plugins/devPlugin'
import optimizer from 'vite-plugin-optimizer'
import { buildPlugin } from './plugins/buildPlugin'

export default defineConfig({
  build: {
    rollupOptions: {
      plugins: [buildPlugin()],
    },
    assetsInlineLimit: 0,
  },
  plugins: [optimizer(getReplacer()), devPlugin(), vue()],
})
