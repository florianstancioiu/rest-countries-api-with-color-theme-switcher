import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/rest-countries-api-with-color-theme-switcher/',
  plugins: [react()],
});
