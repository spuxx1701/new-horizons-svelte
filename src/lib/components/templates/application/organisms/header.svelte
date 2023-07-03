<div id="app-header">
	<a id="app-header-title" href="/">New Horizons</a>
</div>

<style>
	:root {
		--app-header-height: 52px;
	}

	#app-header {
		width: 100vw;
		position: fixed;
		top: 0px;
		border-top: 3px solid var(--color-branding-bar);
		height: calc(var(--app-header-height) - 3px - 4px);
		background-color: var(--color-header-background);
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 2px;
		z-index: 10;
		box-shadow: 0 5px 5px rgba(0, 0, 0, 0.5);
	}

	#app-header-title {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		display: flex;
		align-items: center;
		font-size: x-large;
		color: var(--color-branding-bar) !important;
	}
</style>
