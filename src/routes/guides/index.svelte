<script lang="ts">
	import GuideCard from '$lib/guideCard.svelte';
	import { dark } from '$lib/store';
	import { guides } from '$lib/store';
</script>

<!-- Title section -->
<div class="relative">
	<div class="w-full mx-auto sm:px-6 lg:px-8">
		<div class="relative m-auto pt-8 px-4 lg:pt-24 max-w-2xl sm:overflow-hidden">
			{#if $dark}
				<img
					class="h-full w-full object-contain brightness-75"
					src="/images/AeFull800Dark.png"
					alt="Aestus Guides logo"
				/>
			{:else}
				<img
					class="h-full w-full object-contain"
					src="/images/AeFull800.png"
					alt="Aestus Guides logo"
				/>
			{/if}
		</div>
	</div>
</div>
<!-- Recent Guides Section -->
<div>
	<div class="w-full mx-auto lg:max-w-8xl py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
		<h2 class="pb-4 lg:pb-8 text-lg md:text-2xl lg:text-3xl text-black">Recent Posts</h2>
		<div
			class="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8"
		>
			{#each $guides as guide}
				<GuideCard {guide} />
			{/each}
		</div>
	</div>
</div>
