<script lang="ts">
	import GuideCard from '$lib/guideCard.svelte';
	import { bg3Guides } from '$lib/store';
</script>

<!-- Title section -->
<div class="relative">
	<div class="w-full mx-auto sm:px-6 lg:px-8">
		<div class="relative m-auto pt-8 px-4 md:pt-16 lg:pt-24 max-w-2xl sm:overflow-hidden">
			<div class="flex items-center justify-center">
				<div class="mr-4 flex-shrink-0">
					<img
						class="h-full w-20 md:w-24 lg:w-28"
						src="/images/bg3.png"
						alt="Baldur's Gate 3 logo"
					/>
				</div>
				<div>
					<h1 class="text-xl lg:text-4xl font-bold">Baldur's Gate 3</h1>
				</div>
			</div>
		</div>
	</div>
</div>
<!-- Recent Guides Section -->
<div class="bg-parchment">
	<div class="w-full mx-auto lg:max-w-8xl py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
		<h2 class="pb-4 lg:pb-8 text-lg md:text-2xl lg:text-3xl text-black">Recent Posts</h2>
		<div
			class="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8"
		>
			{#each $bg3Guides as guide}
				<GuideCard {guide} />
			{/each}
		</div>
	</div>
</div>
