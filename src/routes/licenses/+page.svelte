<script lang="ts">
    import { goto } from "$app/navigation";
    import type { PageData } from "./$types";
    import type { License } from "$lib/types/license";
    import MaterialSymbolsBalanceRounded from "~icons/material-symbols/balance-rounded";
    import MaterialSymbolsDescriptionOutlineRounded from "~icons/material-symbols/description-outline-rounded";
    import MaterialSymbolsOpenInNew from "~icons/material-symbols/open-in-new";
    import MaterialSymbolsInfoOutlineRounded from '~icons/material-symbols/info-outline-rounded'
    import Icon from "@iconify/svelte";

    export let data: PageData;

    let loading: boolean = false;

    // Referenz auf das Dialog-Element
    let licenseModal: HTMLDialogElement;
    let selectedLicense: License | null = null;

    function openLicenseDialog(license: License) {
        selectedLicense = license;
        licenseModal?.showModal();
    }
</script>

<svelte:head>
    <title>Licenses</title>
</svelte:head>

<div class="py-20">
    <div class="p-6 w-fit mx-auto bg-base-200 rounded-xl shadow-md space-y-4">
        <div
            class="card card-compact bg-base-100 shadow-xl col-span-1 lg:col-span-2 xl:col-span-3"
        >
            <div
                class="card-body flex-row w-full flex items-center justify-between gap-4"
            >
            <MaterialSymbolsInfoOutlineRounded width="32" height="32" />
                <div class="grow">
                    <h2 class="card-title">About this site</h2>
                    <p>This site was generated using Casey</p>
                </div>
                <div class="tooltip" data-tip="View on GitHub">
                    <a
                        class="btn btn-primary h-14 w-14"
                        href="https://github.com/ronjar/casey"
                    >
                    <Icon icon="mdi:github" width="32" height="32"/>
                    </a>
                </div>
            </div>
        </div>
        <h1 class="text-2xl font-bold pt-4">Licenses</h1>

        <div class="grid grid-cols-1 gap-4 lg:grid-cols-2 xl:grid-cols-3">
            {#each data.licenses as license}
                <div class="card bg-base-100 w-96 shadow-xl items-center">
                    <div
                        class="card-body flex-row w-full flex items-center justify-between"
                    >
                        <div>
                            <h2 class="card-title">{license.title}</h2>
                            <div class="flex space-x-2 items-center opacity-60">
                                <MaterialSymbolsBalanceRounded />
                                <p>{license.licenseType}</p>
                            </div>
                        </div>
                        <div class="tooltip" data-tip="View License Text">
                            <button
                                class="btn btn-primary"
                                on:click={() => openLicenseDialog(license)}
                            >
                                <MaterialSymbolsDescriptionOutlineRounded />
                            </button>
                        </div>
                    </div>
                </div>
            {/each}
        </div>
    </div>
</div>

<dialog id="license_modal" class="modal" bind:this={licenseModal}>
    <div class="modal-box w-3/4 max-w-4xl flex flex-col max-h-[80vh]">
        {#if selectedLicense}
            <h3 class="text-lg font-bold mb-8">
                License for {selectedLicense.title}
            </h3>

            <p class="flex-1 overflow-y-auto py-4 whitespace-pre-wrap">
                {selectedLicense.licenseText}
            </p>

            <div class="modal-action">
                <a
                    href="/licenses/{selectedLicense.fileName}"
                    target="_blank"
                    class="btn rounded-2xl text-primary"
                >
                    <MaterialSymbolsOpenInNew />
                    Show text file
                </a>
            </div>
        {/if}
    </div>

    <form method="dialog" class="modal-backdrop">
        <button>close</button>
    </form>
</dialog>
