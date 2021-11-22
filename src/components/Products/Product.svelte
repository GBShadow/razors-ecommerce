<script lang="ts">
  import formatValue from '../../utils/formatValue';
  import type { Product } from '../../types/products';

  export let product: Product;
</script>

<article class="product">
  <div class="img-container">
    <img src={product.image} alt={product.title} />
    <a href={`/products/${product.id}`} class="btn btn-primary product-link"
      >details</a
    >
  </div>
  <div class="product-footer">
    <p class="product-title">{product.title}</p>
    <p class="product-price">{formatValue(product.price)}</p>
  </div>
</article>
