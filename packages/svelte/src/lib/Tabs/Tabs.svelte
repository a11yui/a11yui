<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import { tabs } from '@a11yui/core';
  import { createClassString } from '@shared/utils';

  let classProp: string = '';
  export { classProp as class };

  let container: HTMLDivElement

  onMount(() => {
    if (container) tabs.on(container);
  });

  onDestroy(() => {
    if (container ) tabs.off(container);
  });
</script>

<div
  class={
    createClassString(
      'a11y-tabs',
      classProp ? classProp : '',
    )
  }
  bind:this={container}
  {...$$restProps}
>
  <slot></slot>
</div>
