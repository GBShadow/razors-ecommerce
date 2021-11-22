<script lang="ts">
  export let id: string;
  // export let location: string;

  import products from '../stores/defaultProducts';
  import Loading from '../components/Loading.svelte';
  import formatValue from '../utils/formatValue';

  $: product = $products.find(item => item.id === Number(id));
</script>

<svelte:head>
  <title>{product.title} | Razors</title>
</svelte:head>
{#if !product}
  <Loading />
{:else}
  <section class="single-product">
    <a href="/products" class="btn btn-primary">back to products</a>
    <div class="single-product-container">
      <article class="single-product-image">
        <img src={product.image} alt={product.title} />
      </article>
      <article>
        <h1>{product.title}</h1>
        <h2>{formatValue(product.price)}</h2>
        <p>{product.description}</p>
        <button
          class="btn btn-primary btn-block"
          on:click={() => {
            console.log('add to cart');
          }}
        >
          add to cart
        </button>
      </article>
    </div>
  </section>
{/if}
