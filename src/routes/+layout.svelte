<script lang="ts">
    import "../app.css";
    import { app, company } from "$lib/config";
    import Icon from "@iconify/svelte";
    import { getFooterSites, getHeaderSites } from "$lib/fetchSites";

    import image from "../site/img/logo.png?enhanced";

    let headerSites = getHeaderSites();
    let footerSites = getFooterSites();
</script>

<div class="flex flex-col min-h-screen">
    <header class="navbar bg-base-100 flex justify-between sticky top-0 z-20 shadow-lg">
        <a href="/" class="btn btn-ghost rounded-2xl m-2 text-xl flex items-center">
            {#if app.general.logo_image}
                <enhanced:img
                    src={image}
                    alt={app.general.name}
                    class="h-12 w-12 mr-2 rounded-xl"
                />
            {:else if app.general.logo_icon}
                <Icon
                    icon={app.general.logo_icon}
                    class="text-accent h-8 w-8"
                />
            {/if}
            <div class="flex items-start">
                <span class="text-2xl">{app.general.name}</span>
                {#if app.general.version}
                    <span class="ml-1 badge badge-neutral">v{app.general.version}</span>
                {/if}
            </div>
        </a>
        <div class="m-2 space-x-2">
            {#await headerSites}
                <p>Loading sites...</p>
            {:then sitesData}
                {#each sitesData as site}
                    <a href={`/sites/${site.slug}`} class="btn btn-ghost text-lg">
                        {site.title}
                    </a>
                {/each}
            {/await}
            <label class="btn btn-ghost rounded-2xl swap swap-rotate w-12 h-12">
                <!-- this hidden checkbox controls the state -->
                <input type="checkbox" class="theme-controller" value="light" />
                <Icon
                    icon="material-symbols:light-mode-rounded"
                    class="swap-off fill-current h-8 w-8"
                />
                <Icon
                    icon="material-symbols:dark-mode-rounded"
                    class="swap-on fill-current h-8 w-8"
                />
            </label>
        </div>
    </header>

    <main class="flex-grow">
        <slot />
    </main>

    <div class="w-full bg-base-200 text-base-content">
        <footer class="footer max-w-6xl mx-auto py-8 px-4 flex justify-between">
            <aside>
                {#if company.logo_image}
                    <img
                        src={company.logo_image}
                        alt={company.name}
                        class="h-8 w-8 mr-2 rounded-box"
                    />
                {:else if company.logo_icon}
                    <Icon icon={company.logo_icon} class="h-16 w-16" />
                {/if}
                <p class="text-lg">
                    {company.name}
                </p>
                <p class="opacity-75">
                    {company.slogan}
                </p>
            </aside>
            <div class="flex flex-col md:flex-row gap-20">
                <nav class="flex-none">
                    <h6 class="footer-title">{company.footer.title}</h6>
                    {#each company.footer.menu as item}
                        <a href={item.link} class="link link-hover">
                            {item.title}
                        </a><br />
                    {/each}
                </nav>
                <nav class="flex-none">
                    <h6 class="footer-title">Important links</h6>
                    {#await footerSites}
                        <p>Loading sites...</p>
                    {:then sitesData}
                        {#each sitesData as site}
                            <a
                                href={`/sites/${site.slug}`}
                                class="link link-hover"
                            >
                                {site.title}
                            </a><br />
                        {/each}
                    {/await}
                    <a href="/licenses" class="link link-hover">
                        Licenses
                    </a>
                </nav>
            </div>
        </footer>
    </div>
</div>