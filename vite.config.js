import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true, // Stellt `expect`, `test`, `describe`, `it` global zur Verfügung
    environment: 'jsdom', // Definiert die Testumgebung als jsdom
  },
});
