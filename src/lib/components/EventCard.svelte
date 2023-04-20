<script lang="ts">
    import type { NDKUserProfile } from '@nostr-dev-kit/ndk';
    import ndk from '$lib/stores/ndk';
    import { timeSince } from '$lib/utils';

    export let threadedEvent: App.ThreadedEvent;

    const defaultImage = `https://robohash.org/${threadedEvent.event.pubkey}?set=set3?size=40x40`;

    const user = $ndk.getUser({ hexpubkey: threadedEvent.event.pubkey });

    let userProfile: NDKUserProfile | undefined = undefined;
    user.fetchProfile().then(() => {
        userProfile = user.profile;
    });

    let shortNpub = `${user.npub.slice(0, 6)}...`;
    let url = `https://nostr.band/${user.npub}`;

    let millisecondCreatedAt = (threadedEvent.event.created_at as number) * 1000;
    let profileImage: string;
    let name: string;
    let replies: App.ThreadedEvent[];
    if (threadedEvent.replies) {
        // @ts-ignore
        replies = threadedEvent.replies.sort((a, b) => a.event.created_at - b.event.created_at);
        console.log(replies)
    }

    $: {
        profileImage = userProfile?.image || defaultImage;
        name = userProfile?.displayName || userProfile?.name || shortNpub;
    }
</script>

<div
    class="eventCard flex flex-col gap-6 items-start
    border border-purple-800 p-6 rounded-md shadow-lg
    break-words overflow-hidden w-full"
>
    <div class="flex flex-row gap-4 items-center">
        <img src={profileImage} alt="profile" class="bg-purple-600 rounded-full w-12 h-12 !m-0" />
        <div class="flex flex-col gap-1">
            <a href={url} class="w-fit m-0 text-xl font-medium">{name}</a>
            <span class="text-base font-light">{timeSince(millisecondCreatedAt)} ago</span>
        </div>
    </div>
    <span class="text-lg font-normal">{threadedEvent.event.content}</span>

    {#each replies as reply}
        <svelte:self threadedEvent={reply} />
    {/each}
</div>
