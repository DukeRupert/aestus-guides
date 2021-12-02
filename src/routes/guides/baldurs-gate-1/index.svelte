<script context="module">
	export async function load({ fetch }) {
		const res = await fetch('/api/bg1guides.json');
		if (res.ok) {
			const { data } = await res.json();
			return {
				props: {
					data
				}
			};
		}
		return {
			status: res.status,
			error: new Error(res.error)
		};
	}
</script>

<script lang="ts">
	import GuideCard from '$lib/guideCard.svelte';
	import { page } from '$app/stores';
	import Seo from '$lib/seo.svelte';
	export let data;

	let { guides } = data[0];

	console.log(guides);
</script>

<Seo
	title="Aestus Guides - Baldurs Gate 1 Guides"
	excerpt="Articles and guides for Baldur's Gate 1"
	canonical={$page.host + $page.path}
	seoImage="{$page.host + $page.path}/images/bg1.webp"
/>
<!-- Title section -->
<div class="relative">
	<div class="w-full mx-auto sm:px-6 lg:px-8">
		<div class="relative m-auto pt-8 px-4 md:pt-16 lg:pt-24 max-w-2xl sm:overflow-hidden">
			<div class="flex items-center justify-center">
				<div class="mr-4 flex-shrink-0">
					<img
						class="h-full w-20 md:w-24 lg:w-28"
						src="/images/bg1.webp"
						alt="Baldur's Gate 1 logo"
					/>
				</div>
				<div>
					<h1 class="text-xl lg:text-4xl font-bold dark:text-gray-300">Baldur's Gate 1</h1>
				</div>
			</div>
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
			{#each guides as guide}
				<GuideCard {guide} />
			{/each}
		</div>
	</div>
</div>
