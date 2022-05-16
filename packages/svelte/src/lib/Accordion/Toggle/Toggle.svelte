<script lang="ts">
  import { createClassString } from '@internal/utils';

  let classProp: string = '';
  export { classProp as class };
</script>

<button
  class={
    createClassString('a11y-accordion-toggle', classProp ? classProp : '')
  }
   {...$$restProps}
>
  <slot></slot>
</button>
