import { writable } from 'svelte/store';
import { v4 as uuidv4 } from 'uuid';

export const toasts = writable([]);

export const addToast = (title, message, type) => {
	const id = uuidv4();

	toasts.update((currentToasts) => {
		return [...currentToasts, { id, title, message, type }];
	});

	setTimeout(() => removeToast(id), 5000);
};

export const removeToast = (id) => {
	toasts.update((currentToasts) => {
		return currentToasts.filter((toast) => toast.id !== id);
	});
};
