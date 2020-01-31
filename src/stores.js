import { writable } from "svelte/store";

export const time = writable(0.5 * 60);
export const running = writable(false);
export const timerInterval = writable(null);
export const remainingPomos = writable(4);
export const current = writable("ready, set");
