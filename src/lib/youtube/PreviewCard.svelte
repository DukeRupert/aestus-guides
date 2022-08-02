<script lang="ts">
	import Button from './Button.svelte';
	import type { Snippet } from '$lib/types/youtube';

	export let snippet: Snippet;
	const { videoId: id } = snippet?.resourceId;
	const { high: thumbnail } = snippet?.thumbnails;
	let play = false;
</script>

<div class="mb-10 m-2 shadow-lg border-gray-800 bg-gray-100 relative">
	{#if play}
		<iframe
			src="https://www.youtube.com/embed/{id}?autoplay=1&rel=0"
			title={snippet.title}
			frameborder="0"
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
		<div class="overlay" on:click={() => (play = true)} />
		<div class="video-title"><h3>{snippet.title}</h3></div>
		<Button on:click={() => (play = true)} />
	{/if}
</div>

<div class="mb-10 m-2 shadow-lg border-gray-800 bg-gray-100 relative">
	{#if play}
		<!-- content here -->
	{:else}
		<!-- else content here -->
	{/if}
</div>
