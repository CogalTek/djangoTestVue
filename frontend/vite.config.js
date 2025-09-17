import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig({
	plugins: [vue()],
	server: {
		host: 'localhost',
		port: 5173
	},
	build: {
		outDir: '../static/frontend',
		emptyOutDir: true,
		manifest: true,
		rollupOptions: {
			input: resolve(__dirname, 'src/main.js')
		}
	},
	// Optionnel si tu comptes servir sous /static/
	// base: '/static/'
})
