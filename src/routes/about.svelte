<script lang="ts">
	import SvelteSeo from 'svelte-seo';
	import { page } from '$app/stores';
	import { siteSettings } from '$lib/store';
	import BlockContent from '$lib/portable-text';
	import serializers from '$lib/guideComponents/serializers';
	import SocialMedia from '$lib/SocialMedia.svelte';

	const { aboutMe, patreon, youtube } = $siteSettings;
</script>

<SvelteSeo
	title="Aestus Guides - About Me"
	description="I am computer RPG veteran and long time fan of the Baldur's Gate series. I have spent close to a thousand hours on the
				original BG series, including a few hundred on hardcore, no-reload, solo runs."
	canonical={$page.url.toString()}
	openGraph={{
		title: 'Aestus Guides - About Me',
		description: `I am computer RPG veteran and long time fan of the Baldur's Gate series. I have spent close to a thousand hours on the
				original BG series, including a few hundred on hardcore, no-reload, solo runs.`,
		url: $page.url.toString(),
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
		<div class="mt-6">
			<SocialMedia />
		</div>
	</div>
</div>
