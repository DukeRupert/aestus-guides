<script lang="ts">
	import type { guide } from 'src/global';
	export let guide: guide;

	const formatDate = (dateString: string) => {
		let date = new Date(dateString);
		return `${date.getMonth()} / ${date.getDate()} / ${date.getFullYear()}`;
	};
</script>

<div
	class="group relative bg-white border border-gray-200 shadow-xl hover:shadow-2xl transition-all duration-150 hover:scale-105 rounded-xl flex flex-col overflow-hidden"
>
	<div class="aspect-w-4 aspect-h-3 bg-bgBlack group-hover:opacity-75 sm:aspect-none sm:h-96">
		<img
			src={guide.image.url}
			alt={guide.image.alt}
			class="w-full h-full object-center object-cover sm:w-full sm:h-full"
		/>
	</div>
	<div class="flex-1 p-4 space-y-2 flex flex-col">
		<h3 class="text-lg font-medium text-gray-900">
			<a href="/guides/{guide.game.link}/{guide.slug}">
				<span aria-hidden="true" class="absolute inset-0" />
				{guide.title}
			</a>
		</h3>
		<p class="text-sm italic text-gray-500">{formatDate(guide.updatedAt)}</p>
		<p class="text-sm text-gray-700">
			{guide.excerpt}
		</p>
	</div>
</div>
