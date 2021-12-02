<script>
	export let url;
	export let alt;
	export let caption;
</script>

<figure>
	<img class="w-full max-w-md m-auto rounded-lg" src={url} {alt} width="400" />
	{#if caption}
		<figcaption>{caption}</figcaption>
	{/if}
</figure>
