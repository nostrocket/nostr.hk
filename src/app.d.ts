// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
    namespace App {
        interface EventsAndUserIds {
            events: NDKEvent[];
            userIds: string[];
        }
        // interface Error {}
        // interface Locals {}
        // interface PageData {}
        // interface Platform {}
    }
}

export {};
