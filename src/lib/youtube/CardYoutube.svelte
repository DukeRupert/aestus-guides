<script lang="ts">
	import type { Snippet } from '$lib/types/youtube';

	export let snippet: Snippet;
	const { videoId: id } = snippet?.resourceId;
	const { high: thumbnail } = snippet?.thumbnails;
	let play = false;
</script>

<div class="flex-none w-[480px] h-[384px] mb-10 m-2 bg-transparent relative snap-center">
	{#if play}
		<iframe
			src="https://www.youtube.com/embed/{id}?autoplay=1&rel=0"
			title={snippet.title}
			frameborder="0"
			class="w-full h-full object-fill"
			height={thumbnail.height}
			width={thumbnail.width}
			allow="autoplay; picture-in-picture; clipboard-write"
			allowfullscreen
		/>
	{:else}
		<img
			src={thumbnail.url}
			title={snippet.title}
			alt="Youtube video: ${snippet.title}"
			height={thumbnail.height}
			width={thumbnail.width}
			referrerpolicy="no-referrer"
		/>
		<div on:click={() => (play = true)} />
		<h3 class="sm:text-xl font-medium text-black dark:text-gray-200 bg-transparent line-clamp-1">
			{@html snippet.title}
		</h3>
		<button
			class="grid items-center h-14 w-14 absolute inset-0 m-auto cursor-pointer bg-transparent"
			on:click={() => (play = true)}
			><svg
				class="h-16 w-16 text-white opacity-75"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
			>
				<circle cx="12" cy="12" r="10" /> <polygon points="10 8 16 12 10 16 10 8" /></svg
			></button
		>
	{/if}
</div>
