import type { Site } from './types'

export async function fetchSites() {
    let sites: Site[] = []

    const paths = import.meta.glob('/src/site/sites/*.md', { eager: true })

    for (const path in paths) {
        const file = paths[path]
        const slug = path.split('/').at(-1)?.replace('.md', '')

        if (file && typeof file === 'object' && 'metadata' in file && slug) {
            const metadata = file.metadata as Omit<Site, 'slug'>
            const site = { ...metadata, slug } satisfies Site
            site.published && sites.push(site)
        }
    }

    sites = sites.sort((first, second) =>
        new Date(second.date).getTime() - new Date(first.date).getTime()
    )

    return sites;
}

export async function getHeaderSites() {
	return fetchSites().then(sites => {
		return sites.filter(site => site.header == true)
	})
}

export async function getFooterSites() {
	return fetchSites().then(sites => {
		return sites.filter(site => site.footer == true)
	})
}