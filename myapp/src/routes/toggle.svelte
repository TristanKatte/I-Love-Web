<script lang="ts">
	import { theme, toggleTheme } from '$lib/theme'
</script>

<button on:click={toggleTheme} aria-label="Toggle theme">
	{#if theme.current === 'light'}
		<div>
			<span>Light</span>
		</div>
	{:else}
		<div>
			<span>Toggle</span>
		</div>
	{/if}
</button>

<style>
	button {
		padding: var(--size-4);
		font-weight: inherit;
		background: none;
		border: 2px solid var(--orange-7);
		border-radius: 50px;
		box-shadow: none;
		overflow: hidden;

		> * {
			display: flex;
			gap: var(--size-2);
		}
	}

	button:hover {
		background-image: var(--gradient-6);
		
	}
</style>
