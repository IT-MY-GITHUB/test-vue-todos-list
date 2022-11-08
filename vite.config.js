import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import eslintPlugin from 'vite-plugin-eslint';
import StylelintPlugin from 'vite-plugin-stylelint';

export default defineConfig({
  plugins: [
    // https://www.npmjs.com/package/@vitejs/plugin-vue
    vue(),

    // https://www.npmjs.com/package/vite-plugin-eslint
    eslintPlugin(),

    // https://www.npmjs.com/package/vite-plugin-stylelint
    StylelintPlugin()
  ]
});
