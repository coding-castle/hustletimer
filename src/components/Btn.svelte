<script>
  export let type = "button";
  function filterProps(reserved, props) {
    return Object.keys(props).reduce((acc, cur) => {
      const isTrue =
        cur.includes("$$") || cur.includes("Class") || reserved.includes(cur);
      return isTrue ? acc : { ...acc, [cur]: props[cur] };
    }, {});
  }

  export let buttonElement = null;

  let className = "";
  export { className as class };

  const props = filterProps(["class"], $$props);

  let _btn__ripple__base = "_btn__ripple__base";
  let rippleClasses = [];

  function removeCircle() {
    this.removeEventListener("animationend", removeCircle);
    this.remove();
  }

  function rippleAnimation(event) {
    const target = event.currentTarget;
    const d = Math.max(target.offsetWidth, target.offsetHeight);
    const dpx = `${d}px`;
    const circle = document.createElement("div");
    circle.style.width = dpx;
    circle.style.height = dpx;
    circle.style.left = `${event.offsetX - d / 2}px`;
    circle.style.top = `${event.offsetY - d / 2}px`;
    circle.classList.add(...rippleClasses);
    circle.addEventListener("animationend", removeCircle);
    target.append(circle);
  }

  function init(node) {
    const rippleElement = node.querySelector(`.${_btn__ripple__base}`);
    rippleClasses = [...rippleElement.classList.values()];
    rippleElement.remove();
    node.addEventListener("click", rippleAnimation);
    return {
      destroy() {
        node.removeEventListener("click", rippleAnimation);
      }
    };
  }
</script>

<style>
  :global([data-theme="nav"]) {
    --button-ripple-color: #333333;
    @apply bg-transparent text-hdark flex py-0 text-xs;
  }
  :global([data-theme="primary"]) {
    min-width: 14rem;
    --button-ripple-color: #333333;
    @apply bg-hyellow border-2 border-transparent text-hdark px-8 py-4 text-sm font-bold;
  }
  :global([data-theme="secondary"]) {
    min-width: 14rem;
    --button-ripple-color: #fbf005;
    @apply bg-transparent border-2 border-solid border-hyellow text-hyellow px-8 py-4 text-sm  font-bold;
  }
  :root {
    --hue: 0;
    /* --button-background-color: hsl(var(--hue), 0%, 47%); */
    /* --button-background-image: none; */
    /* --button-border-radius: 0.15em; */
    /* --button-box-shadow: 0 0 8px hsla(0, 0%, 0%, 0.3); */
    --button-disabled: 0.3;
    /* --button-font-size: 1em; */
    --button-ripple-color: hsl(var(--hue), 100%, 100%);
    /* --button-text-color: hsl(var(--hue), 100%, 100%); */
  }

  ._btn {
    /* background-color: var(--button-background-color); */
    /* background-image: var(--button-background-image); */
    /* border: 0; */
    /* border-radius: var(--button-border-radius); */
    /* box-shadow: var(--button-box-shadow); */
    box-sizing: border-box;
    /* color: var(--button-text-color); */
    cursor: pointer;
    /* font-size: var(--button-font-size); */
    /* font-weight: 300; */
    outline: 0;
    overflow: hidden;
    /* padding: 0.8em 4em; */
    position: relative;
  }

  ._btn:disabled {
    cursor: not-allowed;
    opacity: var(--button-disabled);
  }

  ._btn__ripple {
    animation: ripple 0.4s linear;
    background-color: var(--button-ripple-color);
    border-radius: 50%;
    box-sizing: border-box;
    pointer-events: none;
    position: absolute;
    transform: scale(0);
    transform-origin: 50% 50%;
  }

  @keyframes ripple {
    to {
      opacity: 0;
      transform: scale(2.5);
    }
  }
</style>

<button
  {type}
  use:init
  on:click
  bind:this={buttonElement}
  class="_btn {className}"
  {...props}>
  <slot />
  <div class="_btn__ripple {_btn__ripple__base}" />
</button>
