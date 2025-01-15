import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// https://vitejs.dev/config/
export default defineConfig({
  build: {
    sourcemap: false, // Disable source maps
    chunkSizeWarningLimit: 5000, // Increase the limit of the warning message
  },
  plugins: [react()],
  assetsInclude: ['**/*.glb'], // Include all .glb files
})
