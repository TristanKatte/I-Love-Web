<script lang="ts">
	import { fly } from 'svelte/transition'
	import { Moon, Sun } from 'lucide-svelte'
	import { theme, toggleTheme } from '$lib/theme'
</script>

<button onclick={toggleTheme} aria-label="Toggle theme">
	{#if $theme === 'dark'}
		<div in:fly={{ y: 10 }}>
			<Sun />
			<span>Light</span>
		</div>
	{:else}
		<div in:fly={{ y: -10 }}>
			<Moon />
			<span>Dark</span>
		</div>
	{/if}
</button>

<style>
	
	button {
		padding: 0;
		font-weight: inherit;
		background: none;
		border: none;
		box-shadow: none;
		overflow: hidden;
	}


	button > * {
			display: none;
			gap: var(--size-2);
		}
	

	@media (scripting: enabled) {
		button > * {
			display: flex;
		}
	}
</style>
