<script lang="ts">
    let {
        icon = "material-symbols:dark-mode-rounded",
        title = "Default Title",
        description = "Default Description",
        link = null,
    } = $props();

    import Icon from "@iconify/svelte";
</script>

<div
    class="card card-compact justify-start justify-items-start bg-base-200 rounded-badge p-4 [transition:shadow,transform_250ms] hover:shadow-lg hover:scale-105 max-w-96"
>
    <div class="card-body justify-start justify-items-start">
        <div class="bg-base-300 rounded-full w-fit p-2">
            <Icon
                {icon}
                class="text-primary w-20 h-20 p-2 "
            />
        </div>
        <h2 class="card-title text-2xl mt-4">{title}</h2>
        <p>{description}</p>
        {#if link}
            <a
                href={link}
                class="link link-primary flex items-center rounded-xl mt-2"
                >Learn More {#if link.includes("http")}<Icon
                        icon="material-symbols:open-in-new-rounded"
                        class="mx-1"
                    />
                {/if}</a
            >
        {/if}
    </div>
</div>
