<script>
	import Check from '../icon/Check.svelte';
	import Fire from '../icon/Fire.svelte';
	import Peace from '../icon/Peace.svelte';
	import Telegram from '../icon/Telegram.svelte';
	import Warning from '../icon/Warning.svelte';

	export let toastType = 'default';

	let toastTypes = [
		{ format: 'default', component: Telegram, style: 'text-neutral-500' },
		{ format: 'brand', component: Peace, style: 'text-brand-500' },
		{ format: 'success', component: Check, style: 'text-green-500' },
		{ format: 'warning', component: Warning, style: 'text-yellow-500' },
		{ format: 'error', component: Fire, style: 'text-red-500' }
	];

	let iconComponent = toastTypes.find((type) => type.format === toastType).component;

	let iconStyle = toastTypes.find((type) => type.format === toastType).style;
</script>

<svelte:component this={iconComponent} class="{iconStyle} h-6 w-6" />
