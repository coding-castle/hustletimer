import { writable } from "svelte/store";

export const time = writable(25 * 60);
export const running = writable(false);
export const timerInterval = writable(null);
export const remainingPomos = writable(4);
export const current = writable("hustle");
