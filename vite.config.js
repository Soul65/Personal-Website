import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
	server: {
		// Must be set to true for the server to work inside a Docker container (https://github.com/vitejs/vite/issues/16522)
		host: true,
		port: 8080,
		// Needed for HMR to work
		watch: {
			usePolling: true,
		},
	},
	plugins: [react()],
});
