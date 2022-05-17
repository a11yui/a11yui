<script lang="ts">
  import { createClassString } from '@shared/utils';

  let classProp: string = '';
  export { classProp as class };
  export let vertical: boolean = false;
</script>

<div
  class={
    createClassString('a11y-tabs-list', classProp ? classProp : '')
  }
  aria-orientation={vertical ? 'vertical' : 'horizontal'}
  {...$$restProps}
>
  <slot></slot>
</div>
