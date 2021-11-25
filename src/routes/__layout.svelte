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
	export let path;
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
