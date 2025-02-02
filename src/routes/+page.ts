
export const prerender = true;

export async function load() {
    const modules = import.meta.glob('/src/site/sites/*.md');
    
    const filePath = '/src/site/sites/Main.md';

    if (modules[filePath]) {
        try {
            const siteModule = await modules[filePath]();
            return {
                content: siteModule.default,
                meta: siteModule.metadata
            };
        } catch (e) {
            console.error(`Fehler beim Laden der Datei ${filePath}:`, e);
            return null;
        }
    } else {
        console.warn(`Datei nicht gefunden: ${filePath}`);
        return null;
    }
}