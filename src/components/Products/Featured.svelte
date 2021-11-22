<script lang="ts">
  export let title = '';

  import products, { featuredStore } from '../../stores/defaultProducts';
  import Product from './Product.svelte';
  import Loading from '../Loading.svelte';
</script>

<section class="section">
  <h2 class="section-title">{title}</h2>
  <div class="products-center">
    {#each $featuredStore as product (product.id)}
      <Product {product} />
    {:else}
      <Loading />
    {/each}
  </div>
</section>
