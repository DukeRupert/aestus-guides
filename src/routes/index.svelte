<!-- Hero section -->
<script lang="ts">
	import {
		recentVideos,
		recentGuides,
		bg1Guides,
		bg3Guides,
		pathfinderWotrGuides,
		bg3Videos,
		pathfinderWotrVideos,
		poeVideos
	} from '$lib/store';
	import PreviewCard from '$lib/cards/PreviewCard.svelte';
	import GuideTabs from '$lib/GuideTabs.svelte';
	import VideoTabs from '$lib/VideoTabs.svelte';
	import PlaceholderCard from '$lib/cards/PlaceholderCard.svelte';
	import EmptyCard from '$lib/youtube/EmptyCard.svelte';
	import SvelteSeo from 'svelte-seo';
	import { page } from '$app/stores';
	import CardYoutube from '$lib/youtube/CardYoutube.svelte';

	let guideTab = 'New';
	let videoTab = 'New';

	// Update tab on user click
	function handleVideoTab(event) {
		videoTab = event.detail.tab;
	}

	// Update tab on user click
	function handleGuideTab(event) {
		guideTab = event.detail.tab;
	}

	function updateVideos(tab) {
		switch (tab) {
			case 'New':
				return recentVideos;

			case "Baldur's Gate 3":
				return bg3Videos;

			case 'Pathfinder: WotR':
				return pathfinderWotrVideos;

			case 'Pillars of Eternity':
				return poeVideos;

			default:
				return recentVideos;
		}
	}

	function updateGuides(tab) {
		switch (tab) {
			case 'New':
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

	$: guides = updateGuides(guideTab);
	$: videos = updateVideos(videoTab);
</script>

<SvelteSeo
	title="Aestus Guides - CRPG Guides"
	description="Guides on computer RPGs like Baldur's Gate, Neverwinter Nights, Icewind Dale and Pillars of Eternity. I am a cRPG veteran and long time fan of the Baldur's Gate series. I have spent close to a thousand hours on the original BG series, including a few hundred on hardcore, no-reload, solo runs."
	canonical={$page.url.toString()}
	openGraph={{
		title: 'Aestus Guides - CRPG Guides',
		description: `Guides on computer RPGs like Baldur's Gate, Neverwinter Nights, Icewind Dale and Pillars of Eternity. I am a cRPG veteran and long time fan of the Baldur's Gate series. I have spent close to a thousand hours on the
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

<!-- Hero section -->
<div class="relative">
	<div class="w-full mx-auto sm:px-6 lg:px-8">
		<div class="relative m-auto pt-8 px-4 lg:pt-24 max-w-2xl sm:overflow-hidden">
			<img
				class="h-full w-full object-contain filter dark:invert-20"
				src="/images/AeFull800.webp"
				alt="Aestus Guides logo"
				width="800"
				height="467"
			/>
		</div>
	</div>
</div>
<!-- Guide Tabs -->
<div class="w-full bg-white dark:bg-black mx-auto lg:max-w-4xl py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
	<h1 class="text-2xl lg:text-4xl text-black dark:text-gray-100 my-4">Guides</h1>
	<GuideTabs on:guideTab={handleGuideTab} />

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
<!-- Video Tabs -->
<div class="w-full bg-white dark:bg-black mx-auto lg:max-w-4xl py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
	<h1 class="text-2xl lg:text-4xl text-black dark:text-gray-100 my-4">Videos</h1>
	<VideoTabs on:videoTab={handleVideoTab} />

	<div class="bg-white dark:bg-black grid grid-cols-1 h-auto lg:gap-x-8">
		<ul
			class="flex overflow-x-scroll no-scrollbar snap-mandatory snap-x divide-y divide-gray-200 dark:divide-gray-700"
		>
			{#await recentVideos.load()}
				<EmptyCard />
				<EmptyCard />
				<EmptyCard />
				<EmptyCard />
				<EmptyCard />
				<EmptyCard />
			{:then}
				{#each $videos as video}
					<CardYoutube snippet={video.snippet} />
				{/each}
			{:catch error}
				<p class="text-red-500">{error.message}</p>
			{/await}
		</ul>
	</div>
</div>
