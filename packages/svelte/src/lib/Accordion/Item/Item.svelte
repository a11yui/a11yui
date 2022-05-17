<script lang="ts">
  import { createClassString } from '@shared/utils';

  let classProp: string = '';
  export { classProp as class };
  export let expanded: boolean = false;
</script>

<div
  class={
    createClassString(
      'a11y-accordion-item',
      expanded ? 'expanded' : '',
      classProp ? classProp : ''
    )
  }
  {...$$restProps}
>
  <slot></slot>
</div>
