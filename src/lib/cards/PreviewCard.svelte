<script lang="ts">
	import { urlFor } from '$lib/image-url';

	interface Guide {
		_createdAt: string;
		_id: string;
		_rev: '';
		_type: '';
		_updatedAt: '';
		authors: [
			{
				_key: '';
				_type: 'authorReference';
				author: {
					_ref: '2e0ab821-f636-4137-9e3b-993efdcf8dd8';
					_type: 'reference';
				};
			}
		];
		body: [];
		categories: [
			{
				_key: 'affb2d371f83';
				_ref: '722d04ca-3b37-4146-b7cd-12d12b982816';
				_type: 'reference';
			}
		];
		excerpt: 'My recommendations for extremely fun solo builds for BGI';
		mainImage: {
			_type: 'mainImage';
			alt: 'Flying Solo';
			asset: {
				_ref: 'image-187814cd500c6cf3a4d2db28310c16e36ad6853c-396x132-png';
				_type: 'reference';
			};
		};
		preamble: [
			{
				_key: 'e2a5cd2221d2';
				_type: 'block';
				children: [
					{
						_key: '430e6978781e';
						_type: 'span';
						marks: [];
						text: 'I am one of those guys who prefers Baldur’s Gate I (BGI) over its sequel (BGII). Part of the reason is aesthetic: BGI is more focused in its aesthetic, and I prefer that. However, another reason is that BGI is so rewarding to play as a solo character, i.e., without any party members. Below I share three solo builds that are extremely fun to play through BGI. I hope you will give them a shot!';
					}
				];
				markDefs: [];
				style: 'normal';
			}
		];
		publishedAt: '2021-03-29T18:41:12.176Z';
		slug: {
			_type: 'slug';
			current: 'three-must-play-solo-builds-for-baldurs-gate-1';
		};
		title: 'Three Must-Play Solo Builds for Baldur’s Gate I';
	}

	export let guide: Guide;

	const formatDate = (dateString: string) => {
		let date = new Date(dateString);
		return `${date.getMonth() + 1} / ${date.getDate()} / ${date.getFullYear()}`;
	};
</script>

<li
	class="relative flex p-4 bg-white dark:bg-black hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600"
>
	<div class="flex-shrink-0 py-0 mr-6 w-28 h-28 md:w-40 md:h-32">
		<img
			src={urlFor(guide.mainImage.asset).format('webp').width(160).height(128).url()}
			alt={guide.mainImage.alt}
			class="w-full h-full object-cover"
			loading="lazy"
		/>
	</div>

	<div class="flex flex-col w-full space-y-2">
		<a
			href="/guides/{guide.slug.current}"
			class="block dark:text-gray-100 text-sm md:text-lg font-bold leading-5 break-words line-clamp-3 focus:outline-none"
		>
			{guide.title}
		</a>
		<a
			href="/guides/{guide.slug.current}"
			class="line-clamp-2 text-xs md:text-sm text-gray-600 dark:text-gray-300"
		>
			{guide.excerpt}
		</a>

		<div class="flex">
			<time
				datetime="2021-01-27T16:35"
				class="flex-shrink-0 whitespace-nowrap text-xs md:text-sm text-gray-500 dark:text-gray-400"
				>{formatDate(guide._updatedAt)}</time
			>
			<!-- <button class="h-6 w-6 p-1">
					<svg
						class="h-full w-full text-gray-500"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						stroke-width="2"
						stroke="currentColor"
						fill="none"
						stroke-linecap="round"
						stroke-linejoin="round"
					>
						<path stroke="none" d="M0 0h24v24H0z" /> <circle cx="6" cy="12" r="3" />
						<circle cx="18" cy="6" r="3" /> <circle cx="18" cy="18" r="3" />
						<line x1="8.7" y1="10.7" x2="15.3" y2="7.3" />
						<line x1="8.7" y1="13.3" x2="15.3" y2="16.7" /></svg
					>
				</button> -->
		</div>
	</div>
</li>
