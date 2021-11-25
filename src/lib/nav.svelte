<script lang="ts">
	import { fly } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import { SUBREDDIT, PATREON } from '$lib/constants';

	export let path;
	let timing = 500;
	let delay = 250;
	let mobileOpen = false;
</script>

<div class="relative shadow-xl bg-white dark:bg-gray-900 dark:border-b dark:border-gray-700 z-30">
	<div
		class="flex justify-between items-center max-w-7xl mx-auto px-4 py-6 sm:px-6 md:justify-start md:space-x-10 lg:px-8"
	>
		<div class="flex justify-start lg:w-0 lg:flex-1">
			<a href="/">
				<span class="sr-only">Aestus Guides</span>

				<img
					class="h-8 w-auto sm:h-10 filter dark:invert-20"
					src="/images/Ae200.png"
					alt="Aestus Guides"
				/>
			</a>
		</div>
		<div class="md:hidden" />
		<div class="-mr-2 -my-2 md:hidden">
			<button
				type="button"
				class="bg-white dark:bg-gray-900 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 dark:hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
				aria-expanded="false"
				on:click={() => (mobileOpen = !mobileOpen)}
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
			<div class="relative group">
				<a
					href="/guides"
					class="{path == '/guides'
						? 'text-gray-900 dark:text-gray-400'
						: ''} text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300 mb-3 rounded-md inline-flex items-center text-base font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
					aria-expanded="false"
				>
					<span>Guides</span>
					<!-- Feather/ChevronDown -->
					<svg
						class="text-gray-400 ml-2 h-5 w-5 group-hover:text-gray-500"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					>
						<polyline points="6 9 12 15 18 9" /></svg
					>
				</a>
				<div
					class="hidden group-hover:block absolute z-10 -ml-4 w-screen max-w-xs lg:max-w-xs lg:ml-0 lg:left-1/2 lg:-translate-x-1/2 transform"
				>
					<div
						class="rounded-lg shadow-xl ring-1 ring-black dark:ring-gray-400 ring-opacity-5 overflow-hidden"
					>
						<div
							class="relative grid gap-6 bg-white dark:bg-gray-900 px-5 py-6 sm:gap-8 sm:p-8 lg:grid-cols-1"
						>
							<a
								href="/guides/baldurs-gate-3"
								class="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700"
							>
								<div
									class="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-gradient-to-r from-purple-600 to-indigo-600 text-white sm:h-12 sm:w-12"
								>
									<img class="h-10 w-auto" src="/images/bg3.png" alt="Baldur's Gate 3 logo" />
								</div>
								<div class="ml-4">
									<p class="text-base font-medium text-gray-900 dark:text-gray-400">
										Baldur's Gate 3
									</p>
								</div>
							</a>

							<a
								href="/guides/baldurs-gate-1"
								class="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700"
							>
								<div
									class="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-gradient-to-r from-purple-600 to-indigo-600 text-white sm:h-12 sm:w-12"
								>
									<img
										class="h-10 w-auto filter dark:invert-20"
										src="/images/bg1.png"
										alt="Baldur's Gate 1 logo"
									/>
								</div>
								<div class="ml-4">
									<p class="text-base font-medium text-gray-900 dark:text-gray-400">
										Baldur's Gate 1
									</p>
								</div>
							</a>
						</div>
					</div>
				</div>
			</div>
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

	{#if mobileOpen}
		<div
			transition:fly={{ x: 500, duration: timing, easing: quintOut }}
			class="absolute z-30 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
		>
			<div
				class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white dark:bg-gray-900 divide-y-2 divide-gray-50"
			>
				<div class="pt-5 pb-6 px-5">
					<div class="flex items-center justify-between">
						<div>
							<img
								class="h-12 w-auto filter dark:invert-20"
								src="/images/AeFull400.png"
								alt="Aestus Guides logo"
							/>
						</div>
						<div class="-mr-2">
							<button
								type="button"
								class="bg-white dark:bg-gray-900 rounded-md p-2 inline-flex items-center justify-center text-gray-400 dark:text-gray-500 hover:text-gray-500 dark:hover:text-gray-300 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
								on:click={() => (mobileOpen = !mobileOpen)}
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
							<a
								href="/guides/baldurs-gate-3"
								class="-m-4 p-4 flex items-center rounded-lg hover:bg-gray-50"
							>
								<div
									class="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-gradient-to-br from-gray-700 to-gray-900 text-white"
								>
									<img class="h-10 w-auto" src="/images/bg3.png" alt="Baldur's Gate 3 logo" />
								</div>
								<div class="ml-4 text-base font-medium text-gray-900 dark:text-gray-400">
									Baldur's Gate 3
								</div>
							</a>

							<a
								href="/guides/baldurs-gate-1"
								class="-m-4 p-4 flex items-center rounded-lg hover:bg-gray-50"
							>
								<div
									class="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-gradient-to-br from-gray-500 to-gray-700 text-white"
								>
									<img class="h-10 w-auto" src="/images/bg1.png" alt="Baldur's Gate 1 logo" />
								</div>
								<div class="ml-4 text-base font-medium text-gray-900 dark:text-gray-400">
									Baldur's Gate 1
								</div>
							</a>

							<a href="/about" class="-m-4 p-4 flex items-center rounded-lg hover:bg-gray-50">
								<div
									class="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-parchment text-white"
								>
									<img class="h-8 w-auto" src="/images/Ae200.png" alt="Aestus Guides logo" />
								</div>
								<div class="ml-4 text-base font-medium text-gray-900 dark:text-gray-400">
									About Me
								</div>
							</a>
						</nav>
					</div>
				</div>
				<div class="py-6 px-5">
					<div class="mt-6">
						<a
							href={SUBREDDIT}
							class="w-full flex items-center justify-center bg-gradient-to-r from-purple-600 to-purple-800 bg-origin-border px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white hover:from-purple-700 hover:to-indigo-700"
						>
							Visit Subreddit
						</a>
					</div>
					<div class="mt-6">
						<a
							href={PATREON}
							class="w-full flex items-center justify-center bg-gradient-to-r from-purple-600 to-purple-800 bg-origin-border px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white hover:from-purple-700 hover:to-indigo-700"
						>
							Support Me
						</a>
					</div>
				</div>
			</div>
		</div>
	{/if}
</div>
