<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	// Todo
	let current = 'new';

	function handleClick(id) {
		dispatch('tab', {
			tab: id
		});
		current = id;
	}

	$: handleClick(current);

	const tabs = ['Recent', "Baldur's Gate 3", "Baldur's Gate 1", 'Pathfinder: WotR'];
</script>

<div class="h-12 mb-4">
	<div class="sm:hidden">
		<label for="tabs" class="sr-only">Select a tab</label>
		<!-- Use an "onChange" listener to redirect the user to the selected tab URL. -->
		<select
			id="tabs"
			name="tabs"
			bind:value={current}
			class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm rounded-md"
		>
			{#each tabs as tab}
				<option class="py-4">{tab}</option>
			{/each}
		</select>
	</div>
	<div class="hidden sm:block">
		<div class="border-b border-gray-200 dark:border-gray-700">
			<nav name="tabs" class="-mb-px flex space-x-8" aria-label="Tabs">
				{#each tabs as tab}
					<button
						id={tab}
						on:click={() => handleClick(tab)}
						class="border-transparent {current === tab
							? 'border-purple-500 text-purple-600'
							: 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'} text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-200 hover:border-gray-300 group inline-flex items-center py-4 px-1 border-b-2 font-medium text-sm"
					>
						<span>{tab}</span>
					</button>
				{/each}
			</nav>
		</div>
	</div>
</div>
