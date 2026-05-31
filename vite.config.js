import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  assetsInclude: ['**/*.JPG', '**/*.JPEG', '**/*.PNG', '**/*.WEBP', '**/*.AVIF'],
  cacheDir: '.vite-cache',
  plugins: [react()],
});
