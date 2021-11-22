import { writable } from 'svelte/store';

const globalStore = writable({
  sidebar: false,
  cart: false,
  alert: false
});

const store = {
  subscribe: globalStore.subscribe,
  toggleItem: (value: boolean) =>
    globalStore.update(storeValues => ({ ...storeValues, sidebar: !value }))
};

export default store;
