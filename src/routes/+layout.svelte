<script>
	import { onMount } from 'svelte';
	import '../styles/app.css';
	import { SettingsService, settings } from '$lib/services/settings';
	import { Renderer } from '$lib/services/renderer/renderer.service';

	// By making sure that <slot/> is only rendered after onMount has finished
	// we can make sure that the user's settings and theme have initialized properly.
	// Note that this locks us out of any sort of server-side rendering.
	let hasMounted = false;

	onMount(() => {
		SettingsService.instance.load();
		Renderer.instance.applyTheme(settings.get().theme);
		hasMounted = true;
	});
</script>

<main id="app-content">
	{#if hasMounted}
		<slot />
	{/if}
</main>

<style>
	:root {
		/* The following variables may change during runtime. */
		--app-content-left: 0px;
		--app-content-right: 0px;
	}

	main {
		max-width: 1200px;
		position: relative;
		margin-left: var(--app-content-left);
		margin-right: var(--app-content-right);
		transition: all 500ms ease 0s;
		padding: calc(var(--app-header-height) + 20px) 20px 20px;
	}
</style>
