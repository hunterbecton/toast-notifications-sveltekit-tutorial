<script>
	import { fade } from 'svelte/transition';
	import { flip } from 'svelte/animate';
	import { toasts, removeToast } from '../../store/toasts';
	import Cancel from '../icon/Cancel.svelte';
	import ToastIcon from './ToastIcon.svelte';
	import ToastProgress from './ToastProgress.svelte';
</script>

{#if $toasts}
	<div
		class="absolute top-4 right-1/2 z-30 flex w-full max-w-xs translate-x-1/2 flex-col-reverse gap-4 sm:top-8 sm:right-8 sm:translate-x-0"
	>
		{#each $toasts as { id, title, message, type } (id)}
			<div
				in:fade
				animate:flip={{ duration: 300 }}
				role="alert"
				class="relative overflow-hidden rounded-md bg-white shadow-lg"
			>
				<div class="p-6">
					<div class="flex items-center">
						<ToastIcon toastType={type} />
						<div class="ml-3 border-l border-neutral-200 pl-3 text-sm">
							<p class=" font-semibold text-neutral-900">{title}</p>
							<p class=" font-normal text-neutral-700">{message}</p>
						</div>
					</div>
					<button
						on:click={() => removeToast(id)}
						class="absolute top-2 right-2 rounded-full bg-white p-1 hover:bg-neutral-100 focus-visible:bg-neutral-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
					>
						<Cancel class="text-neutral-900" /><span class="sr-only">Remove notification</span>
					</button>
				</div>
				<ToastProgress toastType={type} />
			</div>
		{/each}
	</div>
{/if}
