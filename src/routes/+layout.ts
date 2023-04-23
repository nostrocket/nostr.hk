import { setupI18n } from '$lib/config/i18n';
import ndkStore from '$lib/stores/ndk';
import { get } from 'svelte/store';

export async function load() {
    // Initialize i18n
    setupI18n();

    // Connect to relays
    const ndk = get(ndkStore);
    await ndk.connect();

    return {};
}
export const prerender = true;