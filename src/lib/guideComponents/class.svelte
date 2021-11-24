<script lang="ts">
	import type { bgClass } from 'src/global';
	export let data: bgClass;

	const link = data.title.replace(/\s+/g, '');
</script>

{#if data.image}
	<div class="sm:flex">
		<div class="mb-4 flex-shrink-0 sm:mb-0 sm:mr-4">
			<img
				class="h-24 w-24 mx-auto lg:h-28 lg:w-28 object-cover object-center"
				src={data.image.url}
				alt={data.image.alt}
			/>
		</div>
		<div class="flex justify-center items-center">
			<a id={link} style="scroll-margin-top: 10em;" />
			{#if data.tier}
				<h2 class="m-0">{data.title} - {data.tier} Tier</h2>
			{:else}
				<h2 class="m-0">{data.title}</h2>
			{/if}
		</div>
	</div>
{:else}
	<a id={link} style="scroll-margin-top: 8em;" />
	>
	{#if data.tier}
		<h2 class="m-0">{data.title} - {data.tier} Tier</h2>
	{:else}
		<h2 class="m-0">{data.title}</h2>
	{/if}
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
{#each data.body as item}
	{#if typeof item === 'string'}
		<p>{@html item}</p>
	{/if}
	{#if Object.prototype.toString.call(item) === '[object Array]'}
		<ul role="list">
			{#each item as part}
				<li>
					{@html part}
				</li>
			{/each}
		</ul>
	{/if}
	{#if item.url}
		<figure>
			<img class="w-full rounded-lg" src={item.url} alt={item.alt} width="1310" height="873" />
			<figcaption>{item.alt}</figcaption>
		</figure>
	{/if}
{/each}

<style>
	h2 {
		@apply dark:text-gray-300;
	}

	strong {
		@apply dark:text-gray-300;
	}

	blockquote {
		@apply dark:text-gray-400;
	}
</style>
