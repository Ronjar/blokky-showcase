import type { PageServerLoad } from './$types';
import type { License } from '$lib/types/license';
import fs from 'fs/promises';
import path from 'path';

export const prerender = true;

let cachedLicenses: License[] | null = null;

async function loadLicensesOnce(): Promise<License[]> {
    if (cachedLicenses) {
        return cachedLicenses;
    }

    const data: License[] = [];
    
    try {
    const licenseDir = path.resolve('./static/licenses');
    let files: string[] = [];

        files = await fs.readdir(licenseDir);
        for (const file of files) {
            if (file.endsWith('.txt')) {
                const rawFilename = file.replace('.txt', '');
                const fileContent = await fs.readFile(path.join(licenseDir, file), 'utf-8');
    
                const parts = rawFilename.split('_');
                const title = parts[0];
                const licenseType = parts[1];
    
                data.push({
                    title,
                    licenseType,
                    licenseText: fileContent,
                    fileName: file
                });
            }
        }
    } catch (err) {
        console.error('Could not read licenses directory:', err);
        return data;
    }

    cachedLicenses = data;
    return cachedLicenses;
}

export const load: PageServerLoad = async () => {
    const licenses = await loadLicensesOnce();

    return {
        licenses
    };
};
