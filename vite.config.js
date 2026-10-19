import { defineConfig } from 'vite';

export default defineConfig({
  optimizeDeps: {
    include: ['@webcomponents/scoped-custom-element-registry'],
  },
});
