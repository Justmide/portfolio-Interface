import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    target: 'es2015',
    cssCodeSplit: true,
    minify: 'esbuild',
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-core': ['react', 'react-dom'],
          'vendor-router': ['react-router-dom', 'react-helmet-async'],
          'vendor-motion': ['framer-motion', 'aos'],
          'vendor-icons': ['react-icons', 'lucide-react'],
        },
      },
    },
    chunkSizeWarningLimit: 600,
  },
});