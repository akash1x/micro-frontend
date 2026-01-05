import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { federation } from '@module-federation/vite'

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: 5174,
  },
  plugins: [react(),
  federation({
    name: 'host',
    filename: 'remoteEntry.js',
    exposes: {},
    remotes: {
      products: {
        type: "module",
        name: "products",
        entry: "http://localhost:5175/remoteEntry.js",
        entryGlobalName: "products",
        shareScope: "default",
      },
    },
    shared: ['react', 'react-dom']
  })
  ],
  build: {
    target: "chrome89",
  },
})
