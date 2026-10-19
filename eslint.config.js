import js from '@eslint/js';
import prettier from 'eslint-config-prettier';
import lit from 'eslint-plugin-lit';
import wc from 'eslint-plugin-wc';

export default [
  // =====================
  // Base JS recomendado
  // =====================
  js.configs.recommended,

  // =====================
  // Código del navegador (Lit / Web Components)
  // =====================
  {
    files: ['**/*.{js,mjs,html}'],

    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',

      globals: {
        // 🌐 Browser globals
        window: 'readonly',
        document: 'readonly',
        customElements: 'readonly',
        CustomEvent: 'readonly',
        Event: 'readonly',
        history: 'readonly',
        location: 'readonly',
        localStorage: 'readonly',
        navigator: 'readonly',
        console: 'readonly',
        MutationObserver: 'readonly',
        URL: 'readonly',
        FormData: 'readonly',
        fetch: 'readonly',
        setTimeout: 'readonly',
        setInterval: 'readonly',
        clearInterval: 'readonly',
      },
    },

    plugins: {
      lit,
      wc,
    },

    rules: {
      // ===== Lit =====
      ...lit.configs.recommended.rules,

      // ===== Web Components =====
      ...wc.configs.recommended.rules,

      // ===== Proyecto =====
      'lines-between-class-members': ['error', 'always'],
      'no-unused-vars': ['warn', { args: 'none', ignoreRestSiblings: true }],
      'no-unused-private-class-members': 'warn',
      'prefer-const': 'warn',
      'no-duplicate-imports': 'error',
    },
  },

  // =====================
  // Node.js (tools, configs)
  // =====================
  {
    files: ['tools/**/*.js', '*.cjs'],

    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',

      globals: {
        require: 'readonly',
        module: 'readonly',
        process: 'readonly',
        __dirname: 'readonly',
        console: 'readonly',
      },
    },
  },

  // =====================
  // Tests
  // =====================
  {
    files: ['**/*.test.js'],
    languageOptions: {
      globals: {
        describe: 'readonly',
        it: 'readonly',
        beforeEach: 'readonly',
        afterEach: 'readonly',
      },
    },
    rules: {
      'no-unused-expressions': 'off',
    },
  },

  {
    ignores: ['index.html', '**/*.html', 'dist/', 'node_modules/'],
  },

  // =====================
  // Prettier (SIEMPRE AL FINAL)
  // =====================
  prettier,
];
