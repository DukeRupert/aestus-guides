<script lang="ts">
	import type { guide } from 'src/global';
	import { guides } from '$lib/store';

	const formatDate = (dateString: string) => {
		let date = new Date(dateString);
		return `${date.getMonth()} / ${date.getDate()} / ${date.getFullYear()}`;
	};
</script>

<ul class="divide-y divide-gray-200 dark:bg-black">
	{#each $guides as guide}
		<li
			class="relative sm:flex flex-row dark:bg-black py-5 px-4 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600"
		>
			<div class="mb-4 flex-shrink-0 md:w-80 md:h-40 sm:mb-0 sm:mr-4">
				<img
					src={guide.image.url}
					alt={guide.image.alt}
					class="w-full h-full object-center object-cover sm:w-full sm:h-full"
				/>
			</div>
			<div class="flex-col">
				<div class="flex justify-between space-x-3">
					<div class="min-w-0 flex-1">
						<a href="#" class="block focus:outline-none">
							<span class="absolute inset-0" aria-hidden="true" />
							<p class="text-sm font-medium text-gray-900 truncate">{guide.title}</p>
							<p class="text-sm text-gray-500 truncate">{formatDate(guide.publishedAt)}</p>
						</a>
					</div>
					<time
						datetime="2021-01-27T16:35"
						class="flex-shrink-0 whitespace-nowrap text-sm text-gray-500">1d ago</time
					>
				</div>
				<div class="mt-1">
					<p class="line-clamp-2 text-sm text-gray-600">
						{guide.excerpt}
					</p>
				</div>
			</div>
		</li>
	{/each}
</ul>
