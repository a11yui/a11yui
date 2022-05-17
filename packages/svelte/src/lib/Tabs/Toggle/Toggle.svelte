<script lang="ts">
  import { createClassString } from '@shared/utils';

  let classProp: string = '';
  export { classProp as class };
</script>

<button
  class={
    createClassString('a11y-tabs-toggle', classProp ? classProp : '')
  }
  {...$$restProps}
>
  <slot></slot>
</button>
