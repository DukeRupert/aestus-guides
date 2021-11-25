<script context="module">
	export async function load({ page }) {
		let { path } = page;
		return {
			props: {
				path
			}
		};
	}
</script>

<script>
	import '../app.css';
	import Nav from '$lib/nav.svelte';
	import Footer from '$lib/footer.svelte';
	import { onMount } from 'svelte';
	import { dark } from '$lib/store';
	export let path;

	// Check if dark mode is active to sync darkToggle
	onMount(() => {
		const root = document.getElementsByTagName('html')[0];
		if (root.classList.contains('dark')) {
			$dark = true;
		}
	});
</script>

<div class="bg-parchment dark:bg-black font-sans">
	<div class="max-w-8xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
		<header>
			<Nav {path} />
		</header>

		<main>
			<slot />
		</main>

		<footer class="bg-gray-50" aria-labelledby="footer-heading">
			<Footer />
		</footer>
	</div>
</div>
