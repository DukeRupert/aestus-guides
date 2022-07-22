<script lang="ts">
	import GuideCard from '$lib/guideCard.svelte';
	import { guides } from '$lib/store';
	import { page } from '$app/stores';
	import Seo from '$lib/seo.svelte';
</script>

<Seo
	title="Aestus Guides - All Guides"
	excerpt="Articles and guides on computer RPGs like Baldur's Gate, Neverwinter Nights, Icewind Dale and Pillars of Eternity."
	canonical={$page.url.hostname + $page.url.pathname}
	seoImage="{$page.url.hostname + $page.url.pathname}images/AeFull800.webp"
/>
<!-- Title section -->
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
<!-- Recent Guides Section -->
<div>
	<div class="w-full mx-auto lg:max-w-8xl py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
		<h2 class="pb-4 lg:pb-8 text-lg md:text-2xl lg:text-3xl text-gray-900 dark:text-gray-300">
			Recent Posts
		</h2>
		<div
			class="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8"
		>
			{#each $guides as guide}
				<GuideCard {guide} />
			{/each}
		</div>
	</div>
</div>
