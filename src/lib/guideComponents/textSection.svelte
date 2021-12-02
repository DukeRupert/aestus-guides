<script lang="ts">
	import BlockContent from '$lib/portable-text';
	import sectionSerializer from '$lib/guideComponents/sectionSerializer';
	export let name;
	export let body;

	const link = name.replace(/\s+/g, '');
</script>

<a id={link} style="scroll-margin-top: 10em;" />
<h2>{name}</h2>
<BlockContent blocks={body} serializers={sectionSerializer} />

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
