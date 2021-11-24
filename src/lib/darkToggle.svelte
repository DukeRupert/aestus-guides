<script lang="ts">
	import { dark } from '$lib/store';

	function handleClick() {
		$dark = !$dark;
		const root = document.getElementsByTagName('html')[0];
		if ($dark) {
			root.classList.add('dark');
		} else {
			root.classList.remove('dark');
		}
	}
</script>

<!-- Enabled: "bg-indigo-600", Not Enabled: "bg-gray-200" -->
<button
	type="button"
	on:click={handleClick}
	class="{$dark
		? 'bg-indigo-900'
		: 'bg-gray-200'} relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
	role="switch"
	aria-checked="false"
>
	<span class="sr-only">Use setting</span>
	<!-- Enabled: "translate-x-5", Not Enabled: "translate-x-0" -->
	<span
		aria-hidden="true"
		class="{$dark
			? 'translate-x-5 bg-indigo-500'
			: 'translate-x-0 bg-gray-500'} pointer-events-none inline-block h-5 w-5 rounded-full shadow transform ring-0 transition ease-in-out duration-200"
	/>
</button>
