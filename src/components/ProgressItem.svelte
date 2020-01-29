<script>
  export let done;
  import { fade } from "svelte/transition";
</script>

<style>
  .counter {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    transition: background-color 0.5s ease;
    @apply border-hyellow text-hdark border-2 bg-transparent flex justify-center items-center;
  }
  .filled {
    @apply bg-hyellow;
  }
</style>

<div class="counter" class:filled={done}>
  {#if done}
    <svg
      transition:fade
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24">
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
    </svg>
  {/if}
</div>
