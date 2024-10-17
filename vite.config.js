import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import {resolve} from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build:{
    outDir:'dist/extension', 
    rollupOptions:{
      input:{
        popup: resolve(__dirname,'index.html'),
      }
    }
  }
})
