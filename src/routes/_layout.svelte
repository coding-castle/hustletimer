<script>
  import Tailwindcss from "../components/Tailwindcss.svelte";
  import Nav from "../components/Nav.svelte";
  import Title from "../components/Title.svelte";

  export let segment;
</script>

<style>
  main {
    @apply flex-1 bg-hdark p-4 text-hyellow overflow-auto text-center;
  }
</style>

<Tailwindcss />

<main>
  <Title />
  <slot />
</main>
<Nav {segment} />
