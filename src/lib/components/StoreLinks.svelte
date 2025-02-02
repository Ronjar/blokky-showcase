<script>
    import { app } from "$lib/config";
    //import AppStore from "./AppStore.svelte";
    //import PlayStore from "./PlayStore.svelte";
    //import MicrosoftStore from "./MicrosoftStore.svelte";
    //import appStore from "$img/AppStore.png";
</script>

<div class="flex space-x-4">
    {#if app.store.app_store}
        <a href={app.store.app_store} target="_blank" class="[transition:shadow,transform_250ms] hover:shadow-xl hover:scale-105">
            <img
                src="/default_img/AppStore.png"
                alt="App Store"
                style="width:auto;height:60px;"
            />
        </a>
    {/if}
    {#if app.store.play_store}
        <a href={app.store.play_store} target="_blank" class="[transition:shadow,transform_250ms] hover:shadow-xl hover:scale-105">
            <img
                src="/default_img/PlayStore.png"
                alt="Play Store"
                style="width:auto;height:60px;"
            />
        </a>
    {/if}
    {#if app.store.microsoft_store}
        <a href={app.store.microsoft_store} target="_blank" class="[transition:shadow,transform_250ms] hover:shadow-xl hover:scale-105">
            <img
                src="/default_img/MicrosoftStore.png"
                alt="Microsoft Store"
                style="auto;height:60px;"
            />
        </a>
    {/if}
</div>
