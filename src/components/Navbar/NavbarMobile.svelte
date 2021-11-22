<script>
  import CartButton from '../Cart/CartButton.svelte';

  import globalStore from '../../stores/globalStore';
</script>

<nav class="navbar">
  <div class="nav-center">
    <button
      on:click={() => globalStore.toggleItem($globalStore.sidebar)}
      class="btn-sidebar-toggle"
    >
      <i class="fas fa-bars" />
    </button>
    <a href="/">
      <img src="/images/logo.svg" alt="Logo Razors" />
    </a>
    <CartButton />
  </div>
</nav>
