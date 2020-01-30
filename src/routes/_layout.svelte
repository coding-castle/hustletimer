<script>
  import Tailwindcss from "../components/Tailwindcss.svelte";
  import Nav from "../components/Nav.svelte";
  import Title from "../components/Title.svelte";
  import { onMount } from "svelte";

  export let segment;

  onMount(async () => {
    const gaId = process.env.TRACKING_ID;
    if (gaId) googleAnalytics(gaId);
  });

  const googleAnalytics = gaID => {
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag("js", new Date());

    gtag("config", gaID);

    const script = document.createElement("script");
    script.src = `https://www.googletagmanager.com/gtag/js?id=${gaID}`;
    document.body.appendChild(script);
  };
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
