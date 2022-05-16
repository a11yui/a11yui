<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import { modal } from '@a11yui/core';
  import { createClassString } from '@internal/utils';

  let classProp: string = '';
  export { classProp as class };
  export let forceAction: boolean = false;

  let container: HTMLDivElement

  onMount(() => {
    if (container) modal.on(container);
  });

  onDestroy(() => {
    if (container ) modal.off(container);
  });
</script>

<div
  class={
    createClassString(
      'a11y-modal',
      forceAction ? 'a11y-modal-force-action' : '',
      classProp ? classProp : '',
    )
  }
  bind:this={container}
  {...$$restProps}
>
  <slot></slot>
</div>
