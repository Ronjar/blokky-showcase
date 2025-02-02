<script lang="ts">
	let { data } = $props();
</script>

<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:type" content="article" />
	{#if data.meta.title}
		<meta property="og:title" content={data.meta.title} />
	{/if}
	{#if data.meta.description}
		<meta property="og:description" content={data.meta.description} />
	{/if}
	{#if data.meta.date}
		<meta
			property="og:article:modified_time"
			content={new Date(data.meta.date).toISOString()}
		/>
	{/if}
</svelte:head>

<div
	class="p-6 mt-20 max-w-4xl mx-auto bg-base-200 rounded-xl shadow-md space-y-4"
>
	<div class="prose">
		<data.content />
	</div>
</div>
