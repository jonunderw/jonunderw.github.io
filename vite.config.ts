import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// @ts-ignore
import tailwindcss from '@tailwindcss/vite'; 

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/',
  assetsInclude: ['**/*.md'],
  define: {
    global: 'globalThis',
  },
  resolve: {
    alias: {
      buffer: 'buffer',
    },
  },
  optimizeDeps: {
    include: ['buffer'],
  },
});