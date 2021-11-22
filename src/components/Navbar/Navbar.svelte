<script lang="ts">
  import NavbarMobile from './NavbarMobile.svelte';
  import NavbarDesktop from './NavbarDesktop.svelte';

  let screenWidth: number;
</script>

<svelte:window bind:innerWidth={screenWidth} />
{#if screenWidth < 800}
  <NavbarMobile />
{:else}
  <NavbarDesktop />
{/if}
