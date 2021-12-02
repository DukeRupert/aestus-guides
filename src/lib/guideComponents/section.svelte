<script lang="ts">
	import BlockContent from '$lib/portable-text';
	import sectionSerializer from '$lib/guideComponents/sectionSerializer';

	export let name;
	export let url;
	export let alt;
	export let tier;
	export let level;
	export let body;

	const customSerializers = sectionSerializer;

	const link = name.replace(/\s+/g, '');
</script>

<div class="sm:flex">
	<div class="mb-4 flex-shrink-0 sm:mb-0 sm:mr-4">
		<img
			class="h-24 w-24 mx-auto lg:h-28 lg:w-28 object-cover object-center rounded-md"
			src={url}
			{alt}
		/>
	</div>
	<div class="flex justify-center items-center">
		<a id={link} style="scroll-margin-top: 10em;" />
		{#if tier}
			<h2 class="m-0">{name} - {tier} Tier</h2>
		{:else}
			<h2 class="m-0">{name}</h2>
		{/if}
	</div>
</div>
<BlockContent blocks={body} serializers={customSerializers} />

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
