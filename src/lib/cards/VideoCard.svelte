<script lang="ts">
	import Youtube from '$lib/youtube/Youtube.svelte';
	import type { Item } from '$lib/types/youtube';
	export let video: Item;

	let { publishedAt, thumbnails, description } = video.snippet;

	const formatDate = (dateString: string) => {
		let date = new Date(dateString);
		return `${date.getMonth() + 1} / ${date.getDate()} / ${date.getFullYear()}`;
	};
</script>

<li
	class="relative flex-auto w-96 max-w-[50%] px-2 items-center justify-center text-center bg-white dark:bg-black hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600"
>
	<div class="flex flex-col h-full max-h-30">
		<div class="w-full h-auto mb-2">
			<Youtube id={video.snippet.resourceId.videoId} thumbnail={thumbnails.high} />
		</div>

		<div class="flex flex-col w-full space-y-2">
			<h2
				class="block dark:text-gray-100 text-sm md:text-lg font-bold leading-5 break-words line-clamp-3 focus:outline-none"
			>
				{video.snippet.title}
			</h2>
			<!-- <p class="line-clamp-2 text-xs md:text-sm text-gray-600 dark:text-gray-300">
			{@html description}
		</p> -->

			<!-- <div class="flex">
			<time
				datetime="2021-01-27T16:35"
				class="flex-shrink-0 whitespace-nowrap text-xs md:text-sm text-gray-500 dark:text-gray-400"
				>{formatDate(publishedAt)}</time
			>
		</div> -->
		</div>
	</div>
</li>
