<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { clickOutside, touchOutside } from '$lib/clickOutside';
	const dispatch = createEventDispatcher();

	export let slideOver;
	export let links;

	function toggleSlideOver() {
		dispatch('toggleSlideOver');
	}

	function handleClick(e) {
		if (slideOver) {
			dispatch('toggleSlideOver');
		}
	}

	let timing = 500;
	let delay = 250;
</script>

<div
	class="fixed inset-0 overflow-hidden {slideOver ? 'z-50' : 'z-0'}"
	aria-labelledby="slide-over-title"
	role="dialog"
	aria-modal="true"
>
	<div class="absolute inset-0 overflow-hidden">
		<!-- Background overlay, show/hide based on slide-over state. -->
		<div
			id="overlay"
			class="absolute inset-0 bg-gray-500 dark:bg-black bg-opacity-75 dark:bg-opacity-75 transition-opacity {slideOver
				? 'ease-in-out duration-500 opacity-100'
				: 'ease-in-out duration-500 opacity-0'}"
			aria-hidden="true"
		/>
		<div class="absolute inset-0" aria-hidden="true">
			<div
				use:clickOutside
				use:touchOutside
				on:click_outside={handleClick}
				class="fixed inset-y-0 right-0 pl-10 max-w-full flex"
			>
				<!-- Slide-over panel, show/hide based on slide-over state.-->
				<div
					class="w-screen max-w-xs md:max-w-md {slideOver
						? 'transform transition ease-in-out duration-500 sm:duration-700 translate-x-0'
						: 'transform transition ease-in-out duration-500 sm:duration-700 translate-x-full'}"
				>
					<div
						class="h-full flex flex-col py-6 bg-white dark:bg-gray-900 shadow-xl overflow-y-scroll"
					>
						<div class="px-4 sm:px-6">
							<div class="flex items-start justify-between">
								<h2
									class="text-lg font-medium text-gray-900 dark:text-gray-300"
									id="slide-over-title"
								>
									Navigation
								</h2>
								<div class="ml-3 h-7 flex items-center">
									<button
										type="button"
										class="rounded-md text-gray-700 dark:text-gray-400 hover:text-gray-500 dark:hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-bgRed"
										on:click={toggleSlideOver}
									>
										<span class="sr-only">Close panel</span>
										<!-- Heroicon name: outline/x -->
										<svg
											class="h-6 w-6"
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
											aria-hidden="true"
										>
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="2"
												d="M6 18L18 6M6 6l12 12"
											/>
										</svg>
									</button>
								</div>
							</div>
						</div>
						<div class="mt-6 relative flex-1 px-4 sm:px-6">
							<!-- Replace with your content -->
							<div class="absolute inset-0 px-4 sm:px-6">
								<nav class="block relative prose dark:prose-light pb-4">
									<ul>
										{#each links as { title, link, image }}
											<div class="flex items-center">
												{#if image}
													<img
														class="h-12 w-12 mr-2 mt-0 mb-0 lg:h-16 lg:w-16 rounded-full object-cover object-center"
														src={image.url}
														alt={image.alt}
													/>
												{:else}
													<img
														class="h-12 w-12 mr-2 mt-0 mb-0 lg:h-16 lg:w-16 rounded-full object-cover object-center"
														src="/images/redDice.webp"
														alt="A red 20 sided dice"
													/>
												{/if}
												<a href="#{link}" on:click={toggleSlideOver}><p>{title}</p></a>
											</div>
										{/each}
									</ul>
								</nav>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
