<script lang="ts">
  import { createClassString } from '@shared/utils';

  let classProp: string = '';
  export { classProp as class };
  export let level: 2 | 3 | 4 = 2;

  const classes = createClassString(
    'a11y-modal-heading', classProp ? classProp : ''
  );
</script>

{#if level === 3}
  <h3 class={classes} {...$$restProps}><slot></slot></h3>
{:else if level === 4}
  <h4 class={classes} {...$$restProps}><slot></slot></h4>
{:else}
  <h2 class={classes} {...$$restProps}><slot></slot></h2>
{/if}
