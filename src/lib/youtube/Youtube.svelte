<script lang="ts">
	import Button from './Button.svelte';
	interface Thumbnail {
		url: string;
		width: number;
		height: number;
	}

	export let id = null;
	export let altThumb = false;
	export let thumbnail: Thumbnail;

	let videoInfo = {};
	videoInfo = fetch(
		`//www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${id}&format=json`
	).then((res) => res.json());

	let play = false;
	const isCustomPlayButton = $$slots.default;
</script>

{#await videoInfo then data}
	<div class="yt" style="--aspect-ratio:{data.width / data.height || '16/9'}" title={data.title}>
		{#if play}
			<iframe
				src="https://www.youtube.com/embed/{id}?autoplay=1&rel=0"
				title={data.title}
				frameborder="0"
				allow="autoplay; picture-in-picture; clipboard-write"
				allowfullscreen
			/>
		{:else}
			{#if thumbnail}
				<img
					src={thumbnail.url}
					title={data.title}
					alt="Youtube video: {data.title}"
					height={thumbnail.height}
					width={thumbnail.width}
					referrerpolicy="no-referrer"
				/>
			{:else}
				<img
					src="https://i.ytimg.com/vi/{id}/{altThumb ? 'hqdefault' : 'maxresdefault'}.jpg"
					title={data.title}
					alt="Youtube video: {data.title}"
					referrerpolicy="no-referrer"
				/>
			{/if}

			<div class="overlay" on:click={() => (play = true)} />
			<div class="video-title"><h3>{data.title}</h3></div>
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
{/await}

<style>
	.yt {
		position: relative;
	}

	img,
	iframe {
		height: auto;
		aspect-ratio: var(--aspect-ratio);
		width: 100%;
	}
	.video-title {
		position: absolute;
		top: 0;
		width: 100%;
		background: linear-gradient(to bottom, hsla(0, 0%, 0%, 0.1), transparent);
		pointer-events: none;
	}
	.video-title h3 {
		font-family: var(--title-font-family, 'Segoe UI', Geneva, Verdana, sans-serif);
		color: var(--title-color, #ffffff);
		padding: 0 2ch;
		font-weight: 400;
		text-shadow: 0px 1px 3px var(--title-shadow-color, rgb(0, 0, 0, 0.2));
	}
	.overlay {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		aspect-ratio: var(--aspect-ratio);
		cursor: pointer;
		transition: var(--overlay-transition, all 250ms ease-in-out);
	}
	.yt:hover .overlay {
		background: var(--overlay-bg-color, #00000030);
	}
</style>
