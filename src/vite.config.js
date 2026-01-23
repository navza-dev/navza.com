import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    base: '/navza.com/', // <- this is key for GitHub Pages
    plugins: [react()],
})
