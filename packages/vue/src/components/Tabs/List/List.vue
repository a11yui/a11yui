<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'A11yTabsList',
  props: {
    vertical: {
      type: Boolean,
      default: false,
    },
  },
  data(props) {
    const orientation = props?.vertical ? 'vertical' : 'horizontal';

    return {
      orientation,
    };
  },
});
</script>

<template>
  <div class="a11y-tabs-list" :aria-orientation="orientation">
    <slot />
  </div>
</template>
