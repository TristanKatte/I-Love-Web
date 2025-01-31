<script lang="ts">
	import Footer from '$lib/+Footer.svelte'
	import Header from '$lib/+Header.svelte'
    import PageTransition from './transition.svelte'

    import 'open-props/style'
    import 'open-props/normalize'
    import 'open-props/buttons'

    import '../app.css'

    let { children, data } = $props()
</script>

<div class="layout">
    <Header />

    <main>
        <PageTransition url={data.url}>
			{@render children?.()}
		</PageTransition>
    </main>

    <Footer />

</div>

<style>
    .layout {
        height: 100%;
        max-width: 1440px;
        display: grid;
        grid-template-rows: auto 1fr auto;
        margin-inline: auto;
        padding-inline: var(--size-7);
    }

    main {
        padding-block: var(--size-9);
    }

    @media (min-width: 1440px) {
        .layout {
            padding-inline: 0;
        }
    }
</style>