<script lang="ts">
	import { SUBREDDIT, PATREON } from '$lib/constants';
	import DarkToggle from './darkToggle.svelte';
</script>

<!-- Footer -->
<footer class="bg-parchment">
	<div class="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8 border-t border-bgRed">
		<div class="mb-8 flex justify-center space-x-6 text-gray-500">
			Cast Darkness : &nbsp; &nbsp; <DarkToggle />
		</div>
		<nav class="-mx-5 -my-2 flex flex-wrap justify-center" aria-label="Footer">
			<div class="px-5 py-2">
				<a href="/about" class="text-base text-gray-500 hover:text-gray-900"> About </a>
			</div>

			<div class="px-5 py-2">
				<a href="/guides" class="text-base text-gray-500 hover:text-gray-900"> Guides </a>
			</div>

			<div class="px-5 py-2">
				<a href={SUBREDDIT} class="text-base text-gray-500 hover:text-gray-900"> Subreddit </a>
			</div>

			<div class="px-5 py-2">
				<a href={PATREON} class="text-base text-gray-500 hover:text-gray-900"> Patreon </a>
			</div>
		</nav>
		<div class="mt-8 flex justify-center space-x-6">
			<img class="h-16" src="/images/AeFull400.png" alt="Aestus Guides" />
		</div>
		<p class="mt-8 text-center text-base text-gray-400">
			&copy; 2021 Aestus Guides 2021. All rights reserved.
		</p>
	</div>
</footer>
