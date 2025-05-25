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
  <p class="intro">Welcome to my blog — thoughts, tutorials, and updates.</p>
</section>

<section class="blog">
  <ul class="posts">
    {#each data.posts as post}
      <li class="post">
        <a href={post.slug} class="card">
          <h2 class="title">{post.title}</h2>
          <p class="date">{formatDate(post.date)}</p>
          <p class="description">{post.description}</p>
        </a>
      </li>
    {/each}
  </ul>
</section>

<style>

	  .hero {
    text-align: center;
    margin-bottom: var(--size-7);
  }

  .intro {
    color: var(--text-2);
    max-width: 50ch;
    margin-inline: auto;
  }

  .blog {
    padding: var(--size-7);
    max-width: 60rem;
    margin-inline: auto;
  }

  .posts {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: var(--size-7);
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .post {
    margin: 0;
  }

  .card {
    display: block;
    padding: var(--size-5);
    background: var(--surface-1);
    border: 1px solid var(--border);
    border-radius: var(--radius-2);
    text-decoration: none;
    transition: transform 0.2s ease, box-shadow 0.2s ease;

    &:hover {
      transform: translateY(-4px);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
    }

    .title {
      font-size: var(--font-size-fluid-2);
      font-weight: 600;
      color: var(--text-1);
      margin-bottom: var(--size-2);
      text-transform: none;
    }

    .date {
      color: var(--text-2);
      font-size: var(--font-size-0);
      margin-bottom: var(--size-2);
    }

    .description {
      color: var(--text-1);
      font-size: var(--font-size-1);
      line-height: 1.5;
    }
  }
</style>
