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
  .hero {
    text-align: center;
    margin-bottom: var(--size-7);
  }

  .hero h1 {
    max-width: 150ch;
    font-family: "Inconsolata", sans-serif;
  }

  .intro {
    color: var(--text-2);
    max-width: 50ch;
    margin-inline: auto;
    font-family: "Nunito", sans-serif;
  }

  .blog {
    padding: var(--size-7);
    max-width: 60rem;
    margin-inline: auto;
  }

  .title {
    font-size: 1em;
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
    display: flex;
    flex-direction: column;
  }

  .card {
    flex: 1;
    background: var(--surface-1);
    border: 1px solid var(--border);
    border-radius: var(--radius-2);
    padding: var(--size-5);
    text-decoration: none;
    transition:
      transform 0.2s ease,
      box-shadow 0.2s ease;

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

  .grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(6, 1fr);
    gap: 8px;
  }
  .item {
    background-color: #444;
    color: #fff;
    border-radius: 5px;
    padding: 20px;
    font-size: 150%;
  }
  .mobile-only {
    display: block;
  }
  .desktop-only {
    display: none;
  }

  .item-0 {
    grid-column: 1 / span 2;
    grid-row: 1 / span 2;
  }

  .item-1 {
    grid-column: 3 / span 2;
    grid-row: 1 / span 2;
  }

  .item-2 {
    grid-column: 1;
    grid-row: 3;
  }

  .item-3 {
    grid-column: 2 / span 2;
    grid-row: 3 / span 2;
  }

  .item-4 {
    grid-column: 4;
    grid-row: 3;
  }

  .item-5 {
    grid-column: 1 / span 2;
    grid-row: 4;
  }

  .item-6 {
    grid-column: 4;
    grid-row: 4;
  }

  .item-7 {
    grid-column: 1;
    grid-row: 5;
  }

  .item-8 {
    grid-column: 2;
    grid-row: 5 / span 2;
  }

  .item-9 {
    grid-column: 3;
    grid-row: 5 / span 2;
  }

  .item-10 {
    grid-column: 4;
    grid-row: 5;
  }

  .item-11 {
    grid-column: 1;
    grid-row: 6;
  }

  .item-12 {
    grid-column: 4;
    grid-row: 6;
  }
  
  @media (min-width: 768px) {
    .grid {
      grid-template-columns: repeat(4, 1fr);
      grid-template-rows: repeat(4, 1fr);
      gap: 8px;
    }
    .mobile-only {
      display: none;
    }
    .desktop-only {
      display: block;
    }

    .item-0 {
      grid-column: 1 / span 2;
      grid-row: 1;
    }

    .item-1 {
      grid-column: 3 / span 2;
      grid-row: 1;
    }

    .item-2 {
      grid-column: 1 / span 2;
      grid-row: 2;
    }

    .item-3 {
      grid-column: 3 / span 2;
      grid-row: 2 / span 2;
    }

    .item-4 {
      grid-column: 1 / span 2;
      grid-row: 3;
    }

    .item-5 {
      grid-column: 1 / span 2;
      grid-row: 4;
    }

    .item-6 {
      grid-column: 3;
      grid-row: 4;
    }

    .item-7 {
      grid-column: 4;
      grid-row: 4;
    }
  }
</style>
