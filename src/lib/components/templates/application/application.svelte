<script>
	import Footer from './organisms/footer.svelte';
	import Header from './organisms/header.svelte';
</script>

<Header />

<main id="app-content">
	<slot />
</main>

<Footer />

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
