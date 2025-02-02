<script>
    import Feature from "$lib/components/Feature.svelte";
    import StoreLinks from "$lib/components/StoreLinks.svelte";
    import { app } from "$lib/config";

    import image from "../site/img/main.png?enhanced";

    import Icon from "@iconify/svelte";

    let { data } = $props();
</script>

<svelte:head>
    <title>{app.general.name}</title>
    <meta property="og:type" content="article" />
    <meta property="og:title" content={app.general.name} />
    <meta property="og:description" content={app.general.summary} />
</svelte:head>

<div class="p-20 mt-20 mx-auto max-w-8xl space-y-12">
    <div
        class="grid grid-cols-1 xl:grid-cols-2 gap-12 space-y-20 xl:space-y-0 place-items-center"
    >
        <div class="px-8 text-center xl:text-left">
            <h1 class="text-6xl xl:text-7xl font-bold">
                {app.general.summary}
            </h1>
            <p class="text-lg mt-4">
                {app.general.description}
            </p>
            <div class="mt-8">
                <StoreLinks />
            </div>
        </div>
        <div class="relative min-h-[50vh] flex items-center justify-center">
            <div class="h-96 w-96 scale-125 mask mask-circle bg-base-200"></div>
            {#if app.general.device === "smartphone"}
                <div class="mockup-phone scale-90 z-10 absolute">
                    <div class="camera"></div>
                    <div class="display">
                        <div class="artboard artboard-demo phone-0">
                            <enhanced:img src={image} alt="placeholder" />
                        </div>
                    </div>
                </div>
            {:else if app.general.device === "desktop"}
                <div
                    class="mockup-window bg-base-300 w-[600px] border z-10 absolute"
                >
                    <enhanced:img src={image} alt="placeholder" />
                </div>
            {:else if app.general.device === "browser"}
                <div class="mockup-browser bg-base-300 scale-125 z-10 absolute">
                    <div class="mockup-browser-toolbar">
                        <div class="input text-primary">{app.general.url}</div>
                    </div>
                    <enhanced:img src={image} alt="placeholder" />
                </div>
            {/if}
        </div>
    </div>

    <div class="text-center pt-20 xl:pt-0">
        <a href="#features" class="btn btn-lg btn-primary btn-wide">
            <Icon
                icon="material-symbols:keyboard-double-arrow-down-rounded"
                class="h-6 w-6"
            />
            Show me more
        </a>
    </div>

    <div
        id="features"
        class="mx-auto max-w-6xl w-fit pt-20 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-12 justify-center justify-items-center"
    >
        <h1
            class="text-4xl font-bold col-span-1 sm:col-span-2 xl:col-span-3 justify-self-start"
        >
            Features
        </h1>
        {#each app.features as feature}
            <Feature
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                link={feature.link}
            />
        {/each}
    </div>

    {#if data.content}
        <div
            class="p-6 mt-20 max-w-6xl mx-auto bg-base-200 rounded-xl shadow-md space-y-4"
        >
            <div class="prose">
                <data.content />
            </div>
        </div>
    {/if}
</div>
