<script context="module">
	export async function load({ params, fetch }) {
		const { slug } = params;
		const res = await fetch(`/api/${slug}.json`);
		if (res.ok) {
			const { data } = await res.json();
			const [guide] = data;
			return {
				props: {
					guide
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
	import Class from '$lib/guideComponents/class.svelte';
	import type { spell } from 'src/global';
	import Navigation from '$lib/guideComponents/navigation.svelte';
	import { fly } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import { page } from '$app/stores';
	import Seo from '$lib/seo.svelte';
	import BlockContent from '$lib/portable-text';
	import { urlFor } from '$lib/image-url';
	import Serializers from '$lib/guideComponents/serializers';

	// Initial data, display entire guide
	export let guide;
	let levelFilters = [];

	function filterLevel(e) {
		let level = Number(e.target.id);
		let arr = levelFilters;
		// Check if level is already being filtered
		let index = arr.indexOf(level);
		// If it is not, then add it to array and assign
		if (index === -1) {
			arr.push(level);
			levelFilters = arr;
			return;
		}
		// If it is then splice it out and assign
		arr.splice(index, 1);
		levelFilters = arr;
		return;
	}

	function filterGuide(arr: any[], levelFilters: number[]) {
		if (levelFilters.length === 0) {
			return arr;
		}

		let filtered = arr.filter((element) => {
			return element['_type'] === 'textSection' || levelFilters.includes(element.level);
		});

		return filtered;
	}

	// Rendered elements after filters are applied to data
	$: filteredGuide = filterGuide(guide.body, levelFilters);

	function getTitle(item) {
		let title, link, image;
		title = item.name;
		link = item.name.replace(/\s+/g, '');

		if (item._type !== 'textSection') {
			image = {
				url: urlFor(item.image.asset).format('webp').url(),
				alt: item.image.alt
			};
			return { title: title, link: link, image: image };
		}

		return { title: title, link: link };
	}

	// Array of sections passed to navigation component.
	$: links = filteredGuide.map(getTitle);

	let slideOver = false;
	let timing = 500;
	let delay = 250;

	function toggleSlideOver() {
		slideOver = !slideOver;
	}

	// SEO
	let guideImage = urlFor(guide.mainImage.asset).format('webp').url();
	let canonical = $page.url.hostname + $page.url.pathname;
	let seoImage = $page.url.hostname + guideImage;
</script>

<Seo title={guide.title} excerpt={guide.excerpt} {canonical} {seoImage} />
<Navigation on:toggleSlideOver={toggleSlideOver} {slideOver} {links} />
{#if !slideOver}
	<button
		class="fixed top-28 right-0 w-12 h-12 rounded-l-lg bg-white dark:bg-gray-900 flex justify-center items-center shadow-xl z-50"
		on:click={toggleSlideOver}
		in:fly={{ x: 100, delay: delay, duration: timing, easing: quintOut }}
		out:fly={{ x: 100, duration: timing, easing: quintOut }}
	>
		<svg
			class="h-6 w-6 text-gray-500 dark:text-gray-400"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
		>
			<line x1="19" y1="12" x2="5" y2="12" /> <polyline points="12 19 5 12 12 5" /></svg
		></button
	>
{/if}

<div class="relative py-16 overflow-hidden">
	<div class="relative px-4 sm:px-6 lg:px-8">
		<article class="mt-6 prose md:prose-lg dark:prose-light mx-auto">
			<h1>
				<span
					class="block text-base text-center text-bgRed dark:text-gray-100 font-semibold tracking-wide uppercase"
					>Guide</span
				>
				<span
					class="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight sm:text-4xl"
					>{guide.title}</span
				>
			</h1>
			<p class="mt-8 text-xl leading-8">
				<BlockContent blocks={guide.preamble} serializers={{}} />
			</p>
			<BlockContent blocks={guide.body} serializers={Serializers} />

			<a href="/"><p class="text-bgRed dark:text-gray-100">Return home</p></a>
		</article>
	</div>
</div>
