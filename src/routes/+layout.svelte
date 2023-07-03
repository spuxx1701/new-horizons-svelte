<script>
	import { onMount } from 'svelte';
	import '../styles/app.css';
	import { SettingsService, settings } from '$lib/services/settings';
	import { Renderer } from '$lib/services/renderer/renderer.service';
	import Application from '$lib/components/templates/application/application.svelte';

	// By making sure that <slot/> is only rendered after onMount has finished
	// we can make sure that the user's settings and theme have initialized properly.
	// Note that this locks us out of any sort of server-side rendering.
	let hasMounted = false;

	onMount(() => {
		SettingsService.instance.load();
		Renderer.instance.applyTheme(settings.value.theme);
		hasMounted = true;
	});
</script>

{#if hasMounted}
	<Application>
		<slot />
	</Application>
{/if}
