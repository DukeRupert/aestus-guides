<script lang="ts">
	export let title;
	export let excerpt;
	export let canonical;
	export let seoImage;
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={excerpt} />
	<meta property="og:title" content={title} />
	<meta property="og:type" content="article" />
	<meta property="og:url" content={canonical} />
	<meta property="og:image" content={seoImage} />
	<meta property="twitter:title" content={title} />
	<meta property="twitter:description" content="article" />
	<meta property="twitter:card" content="summary" />
	<meta property="twitter:image" content={seoImage} />
</svelte:head>
