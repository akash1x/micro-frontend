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
