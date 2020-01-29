<script>
  export let segment;
  import Btn from "./Btn.svelte";
  import { fade, slide } from "svelte/transition";
</script>

<style>
  div {
    box-shadow: 0px -4px 4px rgba(0, 0, 0, 0.15);
    @apply w-full bg-hyellow text-hdark flex flex-row justify-center items-center;
  }
  nav {
    @apply h-16 w-full max-w-6xl flex flex-row justify-around items-center;
  }
  a {
    @apply opacity-50 font-bold relative px-4;
  }
  .selected {
    @apply opacity-100;
  }
  svg {
    margin: 0 auto;
    opacity: inherit;
    @apply mx-auto;
  }
</style>

<div>
  <nav>
    <Btn type="button" data-theme="nav">
      <a class:selected={segment === 'about'} href="about">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24">
          <path d="M0 0h24v24H0z" fill="none" />
          <path
            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12
            2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
        </svg>
        {#if segment === 'about'}
          <span>ABOUT</span>
        {/if}
      </a>

    </Btn>
    <Btn data-theme="nav" type="button">
      <a class:selected={segment === undefined} href=".">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24">
          <path d="M0 0h24v24H0z" fill="none" />
          <path
            d="M15 1H9v2h6V1zm-4
            13h2V8h-2v6zm8.03-6.61l1.42-1.42c-.43-.51-.9-.99-1.41-1.41l-1.42
            1.42C16.07 4.74 14.12 4 12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9 9-4.03
            9-9c0-2.12-.74-4.07-1.97-5.61zM12 20c-3.87 0-7-3.13-7-7s3.13-7 7-7 7
            3.13 7 7-3.13 7-7 7z" />
        </svg>
        {#if segment === undefined}
          <span>TIMER</span>
        {/if}
      </a>

    </Btn>
    <Btn data-theme="nav" type="button">
      <a class:selected={segment === 'contact'} href="contact">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24">
          <path d="M0 0h24v24H0z" fill="none" />
          <path
            d="M21 8V7l-3 2-3-2v1l3 2 3-2zm1-5H2C.9 3 0 3.9 0 5v14c0 1.1.9 2 2
            2h20c1.1 0 1.99-.9 1.99-2L24 5c0-1.1-.9-2-2-2zM8 6c1.66 0 3 1.34 3
            3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm6 12H2v-1c0-2 4-3.1 6-3.1s6 1.1
            6 3.1v1zm8-6h-8V6h8v6z" />
          <path d="M0 0h24v24H0z" fill="none" />
        </svg>
        {#if segment === 'contact'}
          <span>CONTACT</span>
        {/if}
      </a>

    </Btn>
  </nav>
</div>
