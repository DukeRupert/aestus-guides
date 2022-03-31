<script context="module">
	export async function load({ url, fetch }) {
		let { pathname: path } = url;
		const res = await fetch(`/api/siteSettings.json`);
		if (res.ok) {
			const data = await res.json();
			const { data: settings } = data;
			return {
				props: {
					settings,
					path
				}
			};
		}
		return {
			status: res.status,
			error: new Error(res.statusText)
		};
	}
</script>

<script>
	import '../app.css';
	import Nav from '$lib/nav.svelte';
	import Footer from '$lib/footer.svelte';
	import { siteSettings } from '$lib/store';
	import { GoogleAnalytics } from '@beyonk/svelte-google-analytics';
	export let path;
	export let settings;

	if (settings) {
		siteSettings.set(settings);
	}
</script>

<svelte:head
	><!-- Google Ads -->
	<script
		async
		src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7364913321392283"
		crossorigin="anonymous"></script></svelte:head
>

<GoogleAnalytics properties={['G-S2B2ZJ81C6']} />
<div class="bg-parchment dark:bg-black font-sans">
	<div class="max-w-8xl min-h-screen flex flex-col mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
		<header>
			<Nav {path} />
		</header>

		<main>
			<slot />
		</main>

		<footer class="bg-gray-50 mt-auto" aria-labelledby="footer-heading">
			<Footer />
		</footer>
	</div>
</div>
