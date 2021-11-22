<script>
  import links from '../../constants/links';
  import CartButton from '../Cart/CartButton.svelte';
</script>

<nav class="navbar">
  <div class="nav-container">
    <div class="nav-center">
      <ul class="nav-links">
        {#each links as link (link.url)}
          <li>
            <a href={link.url}>{link.text}</a>
          </li>
        {/each}
      </ul>
      <a href="/" class="nav-logo big-logo">
        <img src="/images/logo.svg" alt="Logo razors" />
      </a>
      <div class="nav-aside">
        <CartButton />
      </div>
    </div>
  </div>
</nav>
