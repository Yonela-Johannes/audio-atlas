import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://Yonela-Johannes.github.io/audio-atlas/
export default defineConfig({
  server: {
    host: true,
  },
  plugins: [react()],
  base: './',
});
