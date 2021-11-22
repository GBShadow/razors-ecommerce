import type { Product } from 'src/types/products';
import { derived, writable } from 'svelte/store';
import localProducts from '../localProducts.json';

const store = writable<Product[]>([]);

function serializedProducts(data) {
  return data.map(item => ({
    ...item,
    image: item.image.url
  }));
}

setTimeout(() => {
  store.set(serializedProducts([...localProducts]));
}, 1000);

export const featuredStore = derived(store, ($featured: Product[]) => {
  return $featured.filter(item => item.featured);
});

export default store;
