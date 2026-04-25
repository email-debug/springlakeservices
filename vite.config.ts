import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    port: 5220,
    strictPort: true,
    proxy: {
      '/api': {
        target: 'http://localhost:3220',
        changeOrigin: true,
      },
    },
  },
})
