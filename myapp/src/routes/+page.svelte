<script lang="ts">
  import { formatDate } from "$lib/utils";
  import * as config from "$lib/config";

  let { data } = $props();
</script>

<svelte:head>
  <title>{config.title}</title>
</svelte:head>

<section class="hero">
  <h1>{config.title}</h1>
  <p class="intro">Welcome to my blog — my space on the web</p>
</section>

<section class="grid blog">
  {#each data.posts as post, i}
    <div class="post item item-{i}">
      <a href={post.slug} class="card">
        <h2 class="title">{post.title}</h2>
        <p class="date">{formatDate(post.date)}</p>
        <p class="description">{post.description}</p>
      </a>
    </div>
  {/each}
</section>



<style>
/* === HERO SECTION === */
.hero {
	text-align: center;
	margin-bottom: var(--size-8);
	padding-inline: var(--size-5);
}

.hero h1 {
	max-width: 25ch;
	font-family: "Inconsolata", monospace;
	font-weight: 700;
	letter-spacing: -0.02em;
	line-height: 1.1;
	color: var(--text-1);
	text-shadow:
		0 0 10px rgba(0, 200, 255, 0.5),
		0 0 25px rgba(0, 200, 255, 0.25);
	background: linear-gradient(90deg, var(--brand) 0%, var(--brand-light) 100%);
	-webkit-background-clip: text;
  background-clip: text;
	-webkit-text-fill-color: transparent;
  margin: 0 auto;
}

.intro {
	color: var(--text-2);
	max-width: 55ch;
	margin-inline: auto;
	font-family: "Nunito", sans-serif;
	line-height: 1.7;
	font-size: 1.05rem;
	opacity: 0.85;
}

/* === BLOG CONTAINER === */
.blog {
	padding: var(--size-8);
	max-width: 80rem;
	margin-inline: auto;
}

/* === POSTS GRID === */
.posts {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
	gap: clamp(1.5rem, 3vw, 3rem);
	list-style: none;
	padding: 0;
	margin: 0;
}

/* === BLOG CARD: NEUROMORPHIC + FUTURISTIC === */
.card {
	position: relative;
	background: var(--surface-2);
	border-radius: var(--radius-3);
	padding: var(--size-6);
	display: flex;
	flex-direction: column;
	text-decoration: none;
	color: var(--text-1);
	border: 1px solid rgba(255, 255, 255, 0.05);
	box-shadow:
		8px 8px 18px rgba(0, 0, 0, 0.45),
		-6px -6px 12px rgba(255, 255, 255, 0.04);
	backdrop-filter: blur(10px);
	transition:
		transform 0.4s ease,
		box-shadow 0.4s ease,
		border 0.3s ease,
		background 0.4s ease;
	overflow: hidden;
}

/* === Soft ambient gradient overlay === */
.card::before {
	content: "";
	position: absolute;
	inset: 0;
	border-radius: inherit;
	background: radial-gradient(
		circle at 30% 100%,
		rgba(0, 200, 255, 0.06),
		rgba(255, 0, 204, 0.05),
		transparent 70%
	);
	opacity: 0.3;
	transition: opacity 0.4s ease;
	pointer-events: none;
}

/* === Pulse Glow Animation === */
@keyframes glowPulse {
	0% {
		box-shadow:
			0 0 15px rgba(0, 200, 255, 0.2),
			0 0 35px rgba(255, 0, 204, 0.1);
	}
	50% {
		box-shadow:
			0 0 25px rgba(0, 200, 255, 0.4),
			0 0 45px rgba(255, 0, 204, 0.25);
	}
	100% {
		box-shadow:
			0 0 15px rgba(0, 200, 255, 0.2),
			0 0 35px rgba(255, 0, 204, 0.1);
	}
}

/* === Hover Effects === */
.card:hover {
	transform: translateY(-6px);
	border-color: var(--brand);
	box-shadow:
		0 0 25px rgba(0, 200, 255, 0.3),
		0 0 45px rgba(255, 0, 204, 0.2),
		inset 2px 2px 6px rgba(0, 0, 0, 0.35),
		inset -2px -2px 6px rgba(255, 255, 255, 0.05);
	animation: glowPulse 3s ease-in-out infinite;
}

.card:hover::before {
	opacity: 0.5;
}

/* === CARD CONTENT === */
.card .title {
	font-size: var(--font-size-fluid-2);
	font-weight: 600;
	color: var(--text-1);
	margin-bottom: var(--size-2);
	line-height: 1.2;
	text-transform: none;
	text-shadow:
		0 0 8px rgba(0, 200, 255, 0.25),
		0 0 20px rgba(255, 0, 204, 0.1);
}

.card .date {
	color: var(--text-2);
	font-size: var(--font-size--1);
	margin-bottom: var(--size-3);
	letter-spacing: 0.05em;
	text-transform: uppercase;
	opacity: 0.8;
}

.card .description {
	color: var(--text-1);
	font-size: var(--font-size-1);
	line-height: 1.6;
	opacity: 0.9;
}

/* === FEATURED GRID BACKGROUND === */
.grid {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
	gap: 1.5rem;
	margin-top: var(--size-8);
}

.item {
	background: var(--surface-3);
	color: var(--text-1);
	border: 1px solid var(--border);
	border-radius: var(--radius-3);
	padding: 1.75rem;
	font-size: 1.05rem;
	display: flex;
	align-items: flex-end;
	justify-content: flex-start;
	position: relative;
	overflow: hidden;
	text-shadow: 0 0 6px rgba(0, 200, 255, 0.2);
	box-shadow:
		4px 4px 8px rgba(0, 0, 0, 0.3),
		-3px -3px 6px rgba(255, 255, 255, 0.04);
	transition: transform 0.3s ease, box-shadow 0.4s ease, border-color 0.3s ease;
}

.item::before {
	content: "";
	position: absolute;
	inset: 0;
	background: radial-gradient(
		circle at 40% 80%,
		rgba(0, 200, 255, 0.08),
		transparent 70%
	);
	pointer-events: none;
}

.item:hover {
	transform: translateY(-6px);
	box-shadow:
		0 0 25px rgba(255, 0, 204, 0.3),
		0 0 60px rgba(0, 200, 255, 0.15);
	border-color: var(--brand-light);
}

/* === RESPONSIVE BEHAVIOR === */
@media (max-width: 768px) {
	.blog {
		padding: var(--size-6);
	}
	.card {
		padding: var(--size-5);
	}
	.hero h1 {
		font-size: clamp(1.8rem, 5vw, 2.8rem);
	}
	.posts {
		gap: 1.75rem;
	}
}

@media (max-width: 480px) {
	.card .description {
		font-size: var(--font-size-0);
	}
	.hero {
		margin-bottom: var(--size-6);
	}
}

/* === LIGHT MODE ADJUSTMENTS === */
@media (prefers-color-scheme: light) {
	.card {
		background: var(--surface-1);
		box-shadow:
			6px 6px 12px rgba(0, 0, 0, 0.1),
			-4px -4px 10px rgba(255, 255, 255, 0.6);
	}
	.card:hover {
		box-shadow:
			0 0 20px rgba(0, 170, 255, 0.3),
			0 0 35px rgba(255, 0, 204, 0.2),
			inset 2px 2px 4px rgba(0, 0, 0, 0.05);
	}
}


</style>
