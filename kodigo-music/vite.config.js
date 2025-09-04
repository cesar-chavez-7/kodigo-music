import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // ¡AGREGA ESTO!
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false
  },
  // ¡Y ESTO TAMBIÉN!
  base: './'
})