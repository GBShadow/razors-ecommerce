<script context="module">
  export async function load({ page }) {
    const id = page.params.id;

    return { props: { id } };
  }
</script>

<script>
  import ProductTemplate from '../../templates/ProductTemplate.svelte';

  export let id;
</script>

<ProductTemplate {id} />
