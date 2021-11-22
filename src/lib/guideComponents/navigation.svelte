<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	export let slideOver;
	export let links;

	function toggleSlideOver() {
		dispatch('toggleSlideOver');
	}

	let timing = 500;
	let delay = 250;
</script>

<div
	class="fixed inset-0 overflow-hidden z-50"
	aria-labelledby="slide-over-title"
	role="dialog"
	aria-modal="true"
>
	<div class="absolute inset-0 overflow-hidden">
		<!-- Background overlay, show/hide based on slide-over state. -->
		<div
			class="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity {slideOver
				? 'ease-in-out duration-500 opacity-100'
				: 'ease-in-out duration-500 opacity-0'}"
			aria-hidden="true"
		/>
		<div class="absolute inset-0" aria-hidden="true">
			<div class="fixed inset-y-0 right-0 pl-10 max-w-full flex">
				<!-- Slide-over panel, show/hide based on slide-over state.-->
				<div
					class="w-screen max-w-xs md:max-w-md {slideOver
						? 'transform transition ease-in-out duration-500 sm:duration-700 translate-x-0'
						: 'transform transition ease-in-out duration-500 sm:duration-700 translate-x-full'}"
				>
					<div class="h-full flex flex-col py-6 bg-parchment shadow-xl overflow-y-scroll">
						<div class="mt-6 relative flex-1 px-4 sm:px-6">
							<!-- Replace with your content -->
							<div class="absolute inset-0 px-4 sm:px-6">
								<nav class="block relative prose pb-4">
									<ul role="list">
										{#each links as { title, link, image }}
											<div class="flex items-center">
												<img
													class="h-12 w-12 mr-2 mt-0 mb-0 lg:h-16 lg:w-16"
													src={image.url}
													alt={image.alt}
												/>
												<a href="#{link}" on:click={toggleSlideOver}><p>{title}</p></a>
											</div>
										{/each}
									</ul>
								</nav>
							</div>
							<!-- /End replace -->
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
