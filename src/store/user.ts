import { writable, type Writable } from 'svelte/store';

export const user: Writable<IUser> = writable({});
