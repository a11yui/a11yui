<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import { accordion } from '@a11yui/core';
  import { createClassString } from '@internal/utils';

  let classProp: string = '';
  export { classProp as class };
  export let multiselect: boolean = false;

  let container: HTMLDivElement

  onMount(() => {
    if (container) accordion.on(container);
  });

  onDestroy(() => {
    if (container ) accordion.off(container);
  });
</script>

<div
  class={createClassString('a11y-accordion', classProp ? classProp : '')}
  bind:this={container}
  aria-multiselectable={multiselect}
  {...$$restProps}
>
  <slot></slot>
</div>
