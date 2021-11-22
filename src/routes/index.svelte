<script>
  import Featured from '../components/Products/Featured.svelte';
  import Hero from '../components/Hero.svelte';
</script>

<svelte:head>
  <title>Home | Razors</title>
</svelte:head>

<Hero>
  <a href="/products" class="btn btn-primary btn-hero">shop now</a>
</Hero>
<Featured title="featured products" />
