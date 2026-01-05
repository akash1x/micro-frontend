import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { federation } from '@module-federation/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
  federation({
    name: 'cart',
    filename: "remoteEntry.js",
    exposes: {
      './Cart': './src/components/Cart.jsx',
    },
    remotes: {
      host: {
        type: "module",
        name: "host",
        entry: "http://localhost:5174/remoteEntry.js",
        entryGlobalName: "host",
        shareScope: "default",
      },
    },
    shared: ['react', 'react-dom']
  })],
  build: {
    target: "chrome89",
  },
})
