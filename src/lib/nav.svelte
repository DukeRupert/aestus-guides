<script lang="ts">
	import { fly } from 'svelte/transition';
	import { quintIn, quintOut } from 'svelte/easing';
	import ToggleTheme from './ToggleTheme.svelte';
	import { mobileOpen, siteSettings } from '$lib/store';
	import ToggleTextSize from './ToggleTextSize.svelte';
	import SocialMedia from './SocialMedia.svelte';

	export let path;
	let timing = 500;
	const { subreddit, patreon } = $siteSettings;
</script>

<div
	class="fixed top-0 left-0 w-full lg:relative shadow-md bg-white dark:bg-gray-900 dark:border-b dark:border-gray-700 z-30"
>
	<div
		class="flex justify-between items-center max-w-7xl mx-auto px-4 py-6 sm:px-6 md:space-x-10 lg:px-8"
	>
		<!-- Logo -->
		<div class="flex justify-start lg:w-0 lg:flex-1">
			<a href="/">
				<span class="sr-only">Aestus Guides</span>

				<img
					class="h-10 w-auto sm:h-12 filter dark:invert-20"
					src="/images/Ae200.webp"
					alt="Aestus Guides logo"
					width="200"
					height="140"
				/>
			</a>
		</div>
		<ToggleTextSize />
		<ToggleTheme />
		<!-- Mobile Menu Toggle -->
		<div class="-mr-2 -my-2 md:hidden">
			<button
				type="button"
				class="bg-white dark:bg-gray-900 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 dark:hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
				aria-expanded="false"
				on:click={() => mobileOpen.update((v) => !v)}
			>
				<span class="sr-only">Open menu</span>
				<!-- Feather/Menu -->
				<svg
					class="h-8 w-8"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
				>
					<line x1="3" y1="12" x2="21" y2="12" /> <line x1="3" y1="6" x2="21" y2="6" />
					<line x1="3" y1="18" x2="21" y2="18" /></svg
				>
			</button>
		</div>

		<nav class="hidden md:flex space-x-10">
			<a
				href="/about"
				class="{path == '/about'
					? 'text-gray-900 dark:text-gray-400'
					: ''}text-base font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-300"
			>
				About
			</a>
		</nav>
	</div>

	{#if $mobileOpen}
		<div
			in:fly={{ x: 500, duration: timing, easing: quintOut }}
			out:fly={{ x: 500, duration: timing, easing: quintIn }}
			class="absolute z-50 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
		>
			<div
				class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white dark:bg-gray-900 divide-y-2 divide-gray-50"
			>
				<div class="pt-5 pb-6 px-5">
					<div class="flex items-center justify-between">
						<div>
							<img
								class="h-12 w-auto filter dark:invert-20"
								src="/images/AeFull400.webp"
								alt="Aestus Guides logo"
							/>
						</div>
						<div class="-mr-2">
							<button
								type="button"
								class="bg-white dark:bg-gray-900 rounded-md p-2 inline-flex items-center justify-center text-gray-400 dark:text-gray-500 hover:text-gray-500 dark:hover:text-gray-300 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
								on:click={() => mobileOpen.update((v) => !v)}
							>
								<span class="sr-only">Close menu</span>
								<!-- Feather/X -->
								<svg
									class="h-6 w-6"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
								>
									<line x1="18" y1="6" x2="6" y2="18" /> <line x1="6" y1="6" x2="18" y2="18" /></svg
								>
							</button>
						</div>
					</div>
					<div class="mt-6">
						<nav class="grid grid-cols-1 gap-7">
							<!-- About Me -->
							<a
								href="/about"
								class="-m-4 p-4 flex items-center rounded-lg hover:bg-gray-50"
								on:click={() => mobileOpen.update((v) => !v)}
							>
								<div
									class="flex-shrink-0 flex items-center justify-center h-10 w-16 rounded-md bg-parchment text-white"
								>
									<img class="h-8 w-auto" src="/images/Ae200.webp" alt="Aestus Guides logo" />
								</div>
								<div class="ml-4 text-base font-medium text-gray-900 dark:text-gray-400">
									About Me
								</div>
							</a>
						</nav>
					</div>
				</div>
				<SocialMedia />
				<div class="py-6 px-5">
					<div class="mt-6">
						<a
							href={subreddit}
							class="w-full flex items-center justify-center bg-gradient-to-r from-purple-600 to-purple-800 bg-origin-border px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white hover:from-purple-700 hover:to-indigo-700"
							on:click={() => mobileOpen.update((v) => !v)}
						>
							Visit Subreddit
						</a>
					</div>
				</div>
			</div>
		</div>
	{/if}
</div>
