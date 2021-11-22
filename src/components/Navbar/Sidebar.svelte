<script>
  import globalStore from '../../stores/globalStore';
  import links from '../../constants/links';
</script>

<div class="sidebar-container">
  <div class="sidebar">
    <div class="sidebar-header">
      <button
        class="btn-close"
        on:click={() => globalStore.toggleItem($globalStore.sidebar)}
      >
        <i class="fas fa-window-close" />
      </button>
    </div>
    <img src="/images/logo.svg" alt="Razors Logo" class="logo sidebar-logo" />
    <ul class="sidebar-links">
      {#each links as link (link.url)}
        <li>
          <a href={link.url} on:click={() => console.log('link')}>
            {link.text}
          </a>
        </li>
      {/each}
    </ul>
  </div>
</div>
