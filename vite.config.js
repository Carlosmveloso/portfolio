import { existsSync } from 'node:fs'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  define: {
    // O currículo em inglês é opcional: a versão EN só usa o arquivo se ele existir.
    'import.meta.env.VITE_HAS_RESUME_EN': JSON.stringify(
      existsSync('public/resume-carlos-eduardo.pdf'),
    ),
  },
})
