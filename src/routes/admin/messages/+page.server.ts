import type { PageServerLoad } from './$types';
import { db } from '$lib/server/db';
import { contactMessages } from '$lib/server/db/schema';

export const load: PageServerLoad = async () => {
    try {
        const contactMessagesList = await db.select().from(contactMessages);
        return { messages: contactMessagesList };
    } catch (error) {
        console.error('Failed to load contact messages', error);
        return { messages: [] };
    }
};