<script lang="ts">
	import { siteSettings } from '$lib/store';
	const { patreon, youtube } = $siteSettings;
</script>

<div class="py-6 px-5 flex items-center justify-center">
	<div class="max-w-sm px-4 sm:px-6 lg:px-8">
		<a
			href={patreon}
			class="w-full flex items-center justify-center bg-gradient-to-r from-purple-600 dark:from-purple-800 to-purple-800 dark:to-purple-900 bg-origin-border px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white hover:from-purple-700 hover:to-indigo-700"
			aria-label="Support Aestus Guides by becoming a supporter to his Patreon account"
		>
			<img
				class="h-8 w-8"
				height="216"
				width="216"
				src="/icons/Patreon-Logo_White.png"
				alt="Patreon logo white"
			/>
		</a>
	</div>
	<div class="max-w-xs px-4 sm:px-6 lg:px-8">
		<a
			href={youtube}
			class="w-full flex items-center justify-center bg-gradient-to-r from-purple-600 dark:from-purple-800 to-purple-800 dark:to-purple-900 bg-origin-border px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white hover:from-purple-700 hover:to-indigo-700"
			aria-label="Support Aestus Guides by subscribing to his Youtube channel"
		>
			<svg
				class="h-8 w-8 text-white"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
			>
				<path
					d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"
				/> <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" /></svg
			>
		</a>
	</div>
</div>
