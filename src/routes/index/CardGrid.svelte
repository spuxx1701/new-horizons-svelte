<div class="card-grid">
	<slot />
</div>

<style>
	.card-grid {
		position: relative;
		display: grid;
		flex-wrap: wrap;
		grid-template-columns: repeat(auto-fit, minmax(245px, 1fr));
		max-width: min(100%, var(--app-content-max-width));
		margin: 1rem auto;
		gap: 1rem;
	}
</style>
