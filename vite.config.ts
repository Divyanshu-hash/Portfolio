import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  envPrefix: 'PUBLIC_',
  resolve: {
    alias: {
      '@': '/src',
      '@components': '/src/components',
      '@layouts': '/src/layouts',
      '@assets': '/src/assets',
      '@styles': '/src/styles',
      '@config': '/src/config',
      '@utils': '/src/utils'
    },
  },
});
