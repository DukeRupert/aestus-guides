<script lang="ts">
	import { siteSettings } from '$lib/store';
	const { subreddit, patreon, youtube } = $siteSettings;
</script>

<!-- Footer -->
<footer class="bg-white dark:bg-gray-900">
	<div
		class="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8 border-t border-bgRed dark:border-gray-700"
	>
		<nav class="-mx-5 -my-2 flex flex-wrap justify-center" aria-label="Footer">
			<div class="px-5 py-2">
				<a
					href={youtube}
					class="text-base text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300"
					aria-label="Go to Aestus Guides youtube channel"
				>
					Youtube
				</a>
			</div>

			<div class="px-5 py-2">
				<a
					href={patreon}
					class="text-base text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300"
					aria-label="Go to Aestus Guides patreon account"
				>
					Patreon
				</a>
			</div>

			<div class="px-5 py-2">
				<a
					href={subreddit}
					class="text-base text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300"
					aria-label="Go to Aestus Guides subreddit"
				>
					Subreddit
				</a>
			</div>

			<div class="px-5 py-2">
				<a
					href="/about"
					class="text-base text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300"
					aria-label="Go to Aestus Guides about page"
				>
					About
				</a>
			</div>
		</nav>
		<div class="mt-8 flex justify-center space-x-6">
			<img
				class="h-16 w-auto filter dark:invert-20"
				src="/images/AeFull400.webp"
				alt="Aestus Guides logo"
				width="400"
				height="234"
			/>
		</div>
		<p class="mt-8 text-center text-base text-gray-500 dark:text-gray-400">
			&copy; 2021 Aestus Guides 2021. All rights reserved.
		</p>
	</div>
</footer>
