import { NDKEvent, type NDKFilter } from '@nostr-dev-kit/ndk';
import ndkStore from './stores/ndk';
import { get } from 'svelte/store';
import { fix_and_outro_and_destroy_block } from 'svelte/internal';
import { root } from 'postcss';

export function timeSince(unixTimeStamp: number) {
    const seconds = Math.floor((new Date().getTime() - unixTimeStamp) / 1000);

    let interval = seconds / 31536000;

    if (interval > 1) {
        return Math.floor(interval) + ' years';
    }
    interval = seconds / 2592000;
    if (interval > 1) {
        return Math.floor(interval) + ' months';
    }
    interval = seconds / 86400;
    if (interval > 1) {
        return Math.floor(interval) + ' days';
    }
    interval = seconds / 3600;
    if (interval > 1) {
        return Math.floor(interval) + ' hours';
    }
    interval = seconds / 60;
    if (interval > 1) {
        return Math.floor(interval) + ' minutes';
    }
    return Math.floor(seconds) + ' seconds';
}

function findParentEvent(ev: NDKEvent): string {
    const dataWithReply = ev.tags.find(
        (tag) => tag[0] === "e" && tag[3] === "reply"
      );
      if (dataWithReply === undefined) {
        let lastE = null;
        for (let i = ev.tags.length - 1; i >= 0; i--) {
          const tag = ev.tags[i];
          if (tag.includes("e")) {
            lastE = tag;
            break;
          }
        }
        return lastE[1];
      } else {
        return dataWithReply[1];
}}
function findEventInThread(eventId: string,
    threadedEvents: App.ThreadedEvent): App.ThreadedEvent |undefined
    {
        if (eventId === threadedEvents.event.id) {
            return threadedEvents
        }
        for (const reply of threadedEvents.replies) {
            if (reply.event.id === eventId) {
                return reply
            } else{
                if (reply.replies.length > 0) {
                    const ev = findEventInThread(eventId,reply)
                    return ev
                }
            }

        }
    return undefined
}
function addNode(
    e: NDKEvent,
    threadedEvents: App.ThreadedEvent,
    ):App.ThreadedEvent | null{
        const parentId = findParentEvent(e)
        const parent = findEventInThread(parentId,threadedEvents)
        if (parent!==undefined){
            parent.replies.push({event:e,replies:[]})
            
        }
        else{
            console.log(e,'parent not found')
            return null
            
        }

        return threadedEvents
}
function threadEvents(
    rootEvent: NDKEvent,
    replyEvents: NDKEvent[],
    threadedEvents?: App.ThreadedEvent | undefined,
    iteration = 0
): App.ThreadedEvent {
    // Hacky way of stopping this going on too long.
    if (iteration > 20) {
        return threadedEvents as App.ThreadedEvent;
    }

    // First create an initital ThreadedEvent object if needed
    if (threadedEvents === undefined) {
        threadedEvents = { event: rootEvent, replies: [] } as App.ThreadedEvent;

        // Loop through all replies looking for replies to root
        replyEvents.forEach((e, idx) => {

            const eTags = e.getMatchingTags('e');
            if (eTags.length === 1) {
                const replyEvent = replyEvents.splice(idx, 1)[0];
                threadedEvents?.replies.push({
                    event: replyEvent,
                    replies: []
                } as App.ThreadedEvent);
            }
        });
    } else {
        // This means we have an initial object with root replies
        // All remaining replyEvents have more than one reply tag
        // Time to go deeper
        replyEvents.forEach((e, idx) => {
            
            
            const err = addNode(e,threadedEvents)
            if (err!==null){
                const replyEvent = replyEvents.splice(idx, 1)[0];
            }

        });
    }

    // If there are still items, do it again
    if (replyEvents.length > 0) {
        return threadEvents(rootEvent, replyEvents, threadedEvents, iteration + 1);
    }
    return threadedEvents;
}

export function fetchEventsAndUserIds(rootEventId: string): Promise<App.EventsAndUserIds> {
    // eslint-disable-next-line no-async-promise-executor
    return new Promise<App.EventsAndUserIds>(async (resolve, reject) => {
        try {
            const ndk = get(ndkStore);
            const rootEventFilter: NDKFilter = { ids: [rootEventId] };
            const rootEvent = await ndk.fetchEvent(rootEventFilter);
            
            const threadFilter: NDKFilter = { kinds: [1], '#e': [rootEventId] };
            const threadEventsArr = Array.from(await ndk.fetchEvents(threadFilter));
            threadEventsArr.forEach((item) => {console.log(item.toNostrEvent())})

      
            // console.log("threadEventsArr: ", threadEventsArr)
            const allEvents = [rootEvent, ...threadEventsArr];
            const sortedThreadEvents = threadEventsArr.sort(
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                (a, b) => a.created_at - b.created_at
        
            );
            
            const tree = threadEvents(rootEvent, sortedThreadEvents);
            console.log(tree,'tree')


            const userIds = allEvents.map((item) => item.pubkey);
            const uniqUserIds = [...new Set(userIds)];

            resolve({ threadedEvent: tree, userIds: uniqUserIds });
        } catch (error) {
            reject(error);
        }
    });
}
