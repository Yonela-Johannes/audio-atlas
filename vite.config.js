import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://Yonela-Johannes.github.io
export default defineConfig({
  server: {
    host: true
},
  plugins: [react()],
});
