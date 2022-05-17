<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'A11yAccordionItem',
  props: {
    expanded: {
      type: Boolean,
      default: false,
    },
  },
});
</script>

<template>
  <div class="a11y-accordion-item" :class="{ expanded: expanded }">
    <slot />
  </div>
</template>
