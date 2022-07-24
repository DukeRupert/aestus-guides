<!-- Hero section -->
<script lang="ts">
	import { recentGuides, bg1Guides, bg3Guides, pathfinderWotrGuides } from '$lib/store';
	import PreviewCard from '$lib/cards/PreviewCard.svelte';
	import Tabs from '$lib/Tabs.svelte';
	import PlaceholderCard from '$lib/cards/PlaceholderCard.svelte';
	import SvelteSeo from 'svelte-seo';
	import { page } from '$app/stores';

	let tab = 'recent';

	// Update tab on user click
	function handleTab(event) {
		tab = event.detail.tab;
	}

	function updateGuides(tab) {
		switch (tab) {
			case 'Recent':
				return recentGuides;

			case "Baldur's Gate 3":
				return bg3Guides;

			case "Baldur's Gate 1":
				return bg1Guides;

			case 'Pathfinder: WotR':
				return pathfinderWotrGuides;

			default:
				return recentGuides;
		}
	}

	$: guides = updateGuides(tab);
</script>

<SvelteSeo
	openGraph={{
		title: 'Aestus Guides - CRPG Guides',
		description: `Guides on computer RPGs like Baldur's Gate, Neverwinter Nights, Icewind Dale and Pillars of Eternity. I am a cRPG veteran and long time fan of the Baldur's Gate series. I have spent close to a thousand hours on the
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

<!-- Hero section -->
<div class="relative">
	<div class="w-full mx-auto sm:px-6 lg:px-8">
		<div class="relative m-auto pt-8 px-4 lg:pt-24 max-w-2xl sm:overflow-hidden">
			<img
				class="h-full w-full object-contain filter dark:invert-20"
				src="/images/AeFull800.webp"
				alt="Aestus Guides logo"
			/>
		</div>
	</div>
</div>
<!-- Guide Tabs -->
<div class="w-full bg-white dark:bg-black mx-auto lg:max-w-4xl py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
	<Tabs on:tab={handleTab} />

	<div class="bg-white dark:bg-black grid grid-cols-1 gap-y-4 sm:gap-y-10 lg:gap-x-8">
		<ul class="divide-y divide-gray-200 dark:divide-gray-700">
			{#await guides.load()}
				<PlaceholderCard />
				<PlaceholderCard />
				<PlaceholderCard />
				<PlaceholderCard />
				<PlaceholderCard />
				<PlaceholderCard />
			{:then Guides}
				{#each Guides as guide}
					<PreviewCard {guide} />
				{/each}
			{/await}
		</ul>
	</div>
</div>
