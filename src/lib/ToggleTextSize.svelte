<script lang="ts">
	import { onMount } from 'svelte';

	let fontSize = 16;

	function increaseFontSize() {
		let newSize = fontSize + 2;
		newSize > 28 ? (fontSize = 28) : (fontSize = newSize);
		document.documentElement.style.fontSize = `${fontSize}px`;
		localStorage.setItem('fontSize', `${fontSize}`);
	}

	function decreaseFontSize() {
		let newSize = fontSize - 2;
		newSize < 12 ? (fontSize = 12) : (fontSize = newSize);
		document.documentElement.style.fontSize = `${fontSize}px`;
		localStorage.setItem('fontSize', newSize.toString());
	}

	onMount(() => {
		console.log('Checking for fontSize in localStorage');
		if (localStorage.fontSize) {
			console.log('found');
			fontSize = parseInt(localStorage.fontSize);
			console.log(`Set fontSize to : ${fontSize}`);
		}
	});
</script>

<div class="flex w-30 h-12 items-center">
	<button
		on:click={decreaseFontSize}
		class="text-gray-400 dark:text-gray-500 hover:text-gray-500 dark:hover:text-gray-300 hover:bg-gray-10"
		><svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M16 17l-4 4m0 0l-4-4m4 4V3"
			/>
		</svg>
	</button>
	<span class="text-gray-400 dark:text-gray-500"
		><svg
			class="h-8 w-8"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			stroke-width="2"
			stroke="currentColor"
			fill="none"
			stroke-linecap="round"
			stroke-linejoin="round"
		>
			<path stroke="none" d="M0 0h24v24H0z" /> <line x1="4" y1="6" x2="20" y2="6" />
			<line x1="4" y1="12" x2="14" y2="12" /> <line x1="4" y1="18" x2="18" y2="18" /></svg
		></span
	>
	<button
		on:click={increaseFontSize}
		class="text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 hover:bg-gray-10"
		><svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M8 7l4-4m0 0l4 4m-4-4v18"
			/>
		</svg>
	</button>
</div>
