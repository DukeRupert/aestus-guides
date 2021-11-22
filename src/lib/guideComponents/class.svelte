<script lang="ts">
	import type { bgClass } from 'src/global';
	export let data: bgClass;

	const link = data.title.replace(/\s+/g, '');
</script>

{#if data.image}
	<div class="sm:flex">
		<div class="mb-4 flex-shrink-0 sm:mb-0 sm:mr-4">
			<img class="h-24 w-24 mx-auto lg:h-28 lg:w-28" src={data.image.url} alt={data.image.alt} />
		</div>
		<div class="flex justify-center items-center">
			<a id={link} style="scroll-margin-top: 10em;" />
			<h2 class="m-0">{data.title} - {data.tier} Tier</h2>
		</div>
	</div>
{:else}
	<a id={link} style="scroll-margin-top: 8em;" />
	>
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
	{#if body.url}
		<figure>
			<img class="w-full rounded-lg" src={body.url} alt={body.alt} width="1310" height="873" />
			<figcaption>{body.alt}</figcaption>
		</figure>
	{/if}
{/each}
