<script>
	import { addToast } from '../lib/store/toasts';
</script>

<div class="min-w-screen flex min-h-screen items-center justify-center">
	<div class="space-y-4">
		<button
			type="button"
			on:click={() => addToast('Welcome!', 'Let’s make something great!', 'default')}
			class="mx-auto block rounded-md bg-neutral-600 py-2.5 px-3.5 text-sm font-normal text-white shadow-sm hover:bg-neutral-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-600"
			>Trigger default</button
		>
		<button
			type="button"
			on:click={() => addToast('Welcome!', 'Let’s make something great!', 'brand')}
			class="mx-auto block rounded-md bg-brand-600 py-2.5 px-3.5 text-sm font-normal text-white shadow-sm hover:bg-brand-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600"
			>Trigger brand</button
		>
		<button
			type="button"
			on:click={() => addToast('Success!', 'Check your email to complete.', 'success')}
			class="mx-auto block rounded-md bg-green-600 py-2.5 px-3.5 text-sm font-normal text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
			>Trigger success</button
		>
		<button
			type="button"
			on:click={() => addToast('Warning!', 'Passwords do not match.', 'warning')}
			class="mx-auto block rounded-md bg-yellow-600 py-2.5 px-3.5 text-sm font-normal text-white shadow-sm hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600"
			>Trigger warning</button
		>
		<button
			type="button"
			on:click={() => addToast('Error!', 'Please try again in a few minutes.', 'error')}
			class="mx-auto block rounded-md bg-red-600 py-2.5 px-3.5 text-sm font-normal text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
			>Trigger error</button
		>
	</div>
</div>
