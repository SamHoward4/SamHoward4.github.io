import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/',
  resolve: {
    extensions: ['.js', '.jsx'], // Ensure .jsx files are resolved
  },
  build: {
    rollupOptions: {
      output: {
        entryFileNames: '[name].js', // Ensure output files have .js extension
        chunkFileNames: '[name].js',
        assetFileNames: '[name].[ext]',
      },
    },
  },
});
