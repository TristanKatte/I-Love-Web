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
 <!-- <svg id="sw-js-blob-svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><defs>
    <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
        <stop id="stop1" stop-color="rgba(21.203, 21.658, 21.701, 1)" offset="0%"></stop>
        <stop id="stop2" stop-color="rgba(154.529, 162.861, 161.873, 1)" offset="100%"></stop>
    </linearGradient></defs><path fill="url(#sw-gradient)" d="M11.4,-19.9C16.9,-14.2,24.9,-14.6,28.6,-11.6C32.3,-8.5,31.7,-2,29.2,3C26.7,8.1,22.2,11.7,19.3,18.8C16.4,25.9,15.1,36.5,11,38.1C6.8,39.6,-0.2,32.2,-3.6,25.2C-6.9,18.3,-6.6,11.8,-11.1,8.5C-15.5,5.2,-24.8,5.1,-30.7,1C-36.6,-3.1,-39.1,-11,-35.6,-15.2C-32,-19.4,-22.5,-19.8,-15.6,-24.9C-8.7,-29.9,-4.3,-39.6,-0.7,-38.5C3,-37.5,5.9,-25.6,11.4,-19.9Z" 
                                width="100%" height="100%" transform="translate(50 50)" stroke-width="0" style="transition: 0.3s;" 
                                stroke="url(#sw-gradient)"></path>
</svg> -->
        <PageTransition url={data.url}>
			{@render children?.()}
		</PageTransition>
    </main>

    <Footer />

</div>

<style>
    svg {
        filter: blur(150px);
		width: max-content;
		position: fixed;
		z-index: -10;
    }
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