<script context="module">
  import '../styles/global.css';
  import '../styles/fontawesome-free-5.11.2-web/css/all.min.css';
</script>

<script>
  import Navbar from '../components/Navbar/Navbar.svelte';
  import Sidebar from '../components/Navbar/Sidebar.svelte';

  import globalStore from '../stores/globalStore';
</script>

<div class="container">
  <Navbar />
  {#if $globalStore.sidebar}
    <Sidebar />
  {/if}
  <slot />
</div>
