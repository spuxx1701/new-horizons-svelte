<script>
	import Icon from '@iconify/svelte';

	export let icon;
	export let href;
	export let tooltip;
</script>

<a {href} title={tooltip} target="_blank">
	<Icon {icon} width="50" />
	<slot />
</a>

<style>
	a {
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		background-color: var(--color-container-background);
		z-index: 1;
		text-align: center;
		color: var(--color-text-default);
		text-decoration: none;
		border-width: initial;
		border-style: none;
		border-color: initial;
		border-image: initial;
		border-radius: 5px;
		padding: 1rem;
	}

	a:hover {
		scale: 1.05;
	}
</style>
