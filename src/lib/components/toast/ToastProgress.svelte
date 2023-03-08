<script>
	export let toastType = 'default';

	let toastTypes = [
		{ format: 'default', bgStyle: 'bg-neutral-200', barStyle: 'bg-neutral-500' },
		{ format: 'brand', bgStyle: 'bg-brand-200', barStyle: 'bg-brand-500' },
		{ format: 'success', bgStyle: 'bg-green-200', barStyle: 'bg-green-500' },
		{ format: 'warning', bgStyle: 'bg-yellow-200', barStyle: 'bg-yellow-500' },
		{ format: 'error', bgStyle: 'bg-red-200', barStyle: 'bg-red-500' }
	];

	let bgStyle = toastTypes.find((type) => type.format === toastType).bgStyle;

	let barStyle = toastTypes.find((type) => type.format === toastType).barStyle;
</script>

<div class="{bgStyle} h-1">
	<div class="{barStyle} h-1 animate-progress" />
</div>
