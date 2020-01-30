<style global>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

  [data-theme="nav"] {
    --button-ripple-color: #333333;
    @apply bg-transparent text-hdark flex py-0 text-xs;
  }
  [data-theme="primary"] {
    min-width: 14rem;
    --button-ripple-color: #333333;
    @apply bg-hyellow border-2 border-transparent text-hdark px-8 py-4 text-sm font-bold;
  }
  [data-theme="secondary"] {
    min-width: 14rem;
    --button-ripple-color: #fbf005;
    @apply bg-transparent border-2 border-solid border-hyellow text-hyellow px-8 py-4 text-sm  font-bold;
  }
</style>
