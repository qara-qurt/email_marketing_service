import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      pages : "/src/pages",
      assets: "/src/assets",
      components: "/src/components",
      utils: "/src/utils",
      hooks: "/src/hooks",
      types:"/src/types",
      store: "/src/store",
      styles: "/src/styles",
      layout: "/src/layout"
    },
  },

})
