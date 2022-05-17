<script lang="ts">
  import { createClassString } from '@shared/utils';

  let classProp: string = '';
  export { classProp as class };
</script>

<div
  class={
    createClassString('a11y-tabs-panel', classProp ? classProp : '')
  }
  {...$$restProps}
>
  <slot></slot>
</div>
