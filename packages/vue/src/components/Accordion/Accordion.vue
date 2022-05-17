<script lang="ts">
import { defineComponent } from 'vue';
import { accordion } from '@a11yui/core';

export default defineComponent({
  name: 'A11yAccordion',
  props: {
    multiselect: {
      type: Boolean,
      default: false,
    },
  },
  mounted() {
    if (accordion) accordion.on(this.$refs.container as HTMLElement);
  },
  beforeUnmount() {
    if (accordion) accordion.off(this.$refs.container as HTMLElement);
  },
});
</script>

<template>
  <div
    ref="container"
    class="a11y-accordion"
    :aria-multiselectable="multiselect"
  >
    <slot />
  </div>
</template>
