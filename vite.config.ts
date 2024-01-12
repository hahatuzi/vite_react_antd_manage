import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
console.log(import.meta)
// https://vitejs.dev/config/
export default defineConfig({
  server:{
    host: "127.0.0.1",
    port: 5173,
    // proxy:{
    //   [import.meta.env.VITE_BASE_API]:{
    //     target:import.meta.env.VITE_BASE_URL,
    //     changeOrigin:true,
    //     rewrite:path => path.replace('/apiTest', '')
    //   }
    // }
  },
  plugins: [react()],
  resolve:{
    alias:{
      "@":path.resolve(__dirname, './src')
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/styles/sassConfig.scss";`,
      },
    }
  }
})
