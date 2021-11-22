<script lang="ts">
	import type { bgClass } from 'src/global';
	export let data: bgClass;
</script>

{#if data.image}
	<div class="sm:flex">
		<div class="mb-4 flex-shrink-0 sm:mb-0 sm:mr-4">
			<img class="h-16 w-16 lg:h-28 lg:w-28" src={data.image.url} alt={data.image.alt} />
		</div>
		<div class="flex justify-center items-center">
			<h2 class="m-0">{data.title} - {data.tier} Tier</h2>
		</div>
	</div>
{:else}
	<h2 class="m-0">{data.title} - {data.tier} Tier</h2>
{/if}

{#if data.list}
	<ul role="list">
		{#each data.list as list}
			<li>
				<strong>{list.title}:</strong>
				{list.body}
			</li>
		{/each}
	</ul>
{/if}
{#each data.body as body}
	{#if typeof body === 'string'}
		<p>{@html body}</p>
	{/if}
	{#if Object.prototype.toString.call(body) === '[object Array]'}
		<ul role="list">
			{#each body as item}
				<li>
					{@html item}
				</li>
			{/each}
		</ul>
	{/if}
{/each}
