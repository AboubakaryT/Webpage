import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const isCustomDomain = process.env.DEPLOY_TARGET === 'custom'

export default defineConfig({
  plugins: [react()],
  base: isCustomDomain ? '/' : '/Webpage/',
})
