import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { federation } from '@module-federation/vite'

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: 5175,
  },
  plugins: [react(), federation({
    name: 'products',
    filename: "remoteEntry.js",
    exposes: {
      './Products': './src/components/Products.jsx',
    },
    shared: ['react', 'react-dom']
  })],
  build: {
    target: "chrome89",
  },
})
