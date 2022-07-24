<script lang="ts">
	import SvelteSeo from 'svelte-seo';
	import { page } from '$app/stores';
	import { siteSettings } from '$lib/store';
	import BlockContent from '$lib/portable-text';
	import serializers from '$lib/guideComponents/serializers';

	const { aboutMe, patreon } = $siteSettings;
</script>

<SvelteSeo
	openGraph={{
		title: 'Aestus Guides - About Me',
		description: `I am computer RPG veteran and long time fan of the Baldur's Gate series. I have spent close to a thousand hours on the
				original BG series, including a few hundred on hardcore, no-reload, solo runs.`,
		url: `${$page.url.hostname + $page.url.pathname}`,
		type: 'website',
		images: [
			{
				url: 'https://www.aestusguides.com/images/Ae600.png',
				width: 400,
				height: 234,
				alt: 'Aestus cRPG Guides logo'
			}
		]
	}}
/>
<div class="relative py-16 overflow-hidden">
	<div class="relative px-4 sm:px-6 lg:px-8 min-h">
		<article class="mt-6 prose-lg dark:prose-light mx-auto">
			<h1>
				<span
					class="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight sm:text-4xl"
					>About Me</span
				>
			</h1>
			<BlockContent blocks={aboutMe} {serializers} />
		</article>
		<div class="py-6 px-5">
			<div class="mt-6 max-w-xs m-auto">
				<a
					href={patreon}
					class="w-full flex items-center justify-center bg-gradient-to-r from-purple-600 dark:from-purple-800 to-purple-800 dark:to-purple-900 bg-origin-border px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white hover:from-purple-700 hover:to-indigo-700"
				>
					Support Me
				</a>
			</div>
		</div>
	</div>
</div>
