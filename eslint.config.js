import js from '@eslint/js';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import { defineConfig } from 'eslint/config';

export default defineConfig([
	{ ignores: ['dist'] },
	{
		files: ['**/*.{js,jsx,ts,tsx}'],
		languageOptions: {
			ecmaVersion: 2020,
			parserOptions: {
				ecmaVersion: 'latest',
				ecmaFeatures: { jsx: true },
				sourceType: 'module',
			},
		},
		plugins: {
			js,
			'react-hooks': reactHooks,
			'react-refresh': reactRefresh,
		},
		extends: ['js/recommended'],
		rules: {
			...js.configs.recommended.rules,
			...reactHooks.configs.recommended.rules,
			...reactRefresh.configs.recommended.rules,
			'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
			'no-unused-vars': 'warn',
		},
	},
	reactRefresh.configs.recommended,
	reactRefresh.configs.vite,
]);
