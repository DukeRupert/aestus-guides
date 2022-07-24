<script lang="ts">
	import { onMount } from 'svelte';

	let theme = '';

	function toggleTheme() {
		const currentTheme: string = localStorage.getItem('theme');
		let element = document.documentElement;

		if (currentTheme === 'dark') {
			element.classList.remove('dark');
			element.classList.add('light');
			localStorage.setItem('theme', 'light');
			theme = 'light';
		} else {
			element.classList.remove('light');
			element.classList.add('dark');
			localStorage.setItem('theme', 'dark');
			theme = 'dark';
		}
	}

	$: dark = theme === 'dark' ? true : false;

	onMount(() => {
		if (
			localStorage.theme === 'dark' ||
			(!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
		) {
			document.documentElement.classList.add('dark');
			theme = 'dark';
		} else {
			document.documentElement.classList.remove('dark');
			theme = 'light';
		}
	});
</script>

<button
	type="button"
	on:click={toggleTheme}
	class="{dark
		? 'bg-gray-600'
		: 'bg-gray-100'} relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
	role="switch"
	aria-checked="false"
>
	<span class="sr-only">Use setting</span>
	<span
		class="{dark
			? 'translate-x-5'
			: 'translate-x-0 bg-gray-400'} pointer-events-none relative inline-block h-5 w-5 rounded-full shadow transform ring-0 transition ease-in-out duration-200"
	>
		<span
			class="{dark
				? 'opacity-0 ease-out duration-100'
				: 'opacity-100 ease-in duration-200'} absolute inset-0 h-full w-full flex items-center justify-center transition-opacity"
			aria-hidden="true"
		/>
		<span
			class="{dark
				? 'opacity-100 ease-in duration-200'
				: 'opacity-0 ease-out duration-100'} absolute inset-0 h-full w-full flex items-center justify-center transition-opacity"
			aria-hidden="true"
		>
			<svg
				class="h-5 w-5 text-gray-300"
				fill="currentColor"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
				/>
			</svg>
		</span>
	</span>
</button>
