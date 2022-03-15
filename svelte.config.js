import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-netlify';
import vercel from '@sveltejs/adapter-vercel';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		preprocess({
			postcss: true
		})
	],

	kit: {
		// netlify adapter does not take any options at the moment
		adapter: vercel(),
		// hydrate the <div id="svelte"> element in src/app.html
		vite: {
			optimizeDeps: {
				include: ['@sanity/block-content-to-hyperscript/internals']
			}
		}
	}
};

export default config;
