import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import svgr from 'vite-plugin-svgr'

// https://vite.dev/config/
export default defineConfig({
  plugins: [svgr(/*{exportAsDefault: true}*/), react(), tailwindcss()],
  server: {
    host: "0.0.0.0",
    open: true,
    port: 5800
  }
})
