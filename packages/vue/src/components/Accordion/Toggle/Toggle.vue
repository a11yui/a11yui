<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'A11yAccordionToggle',
});
</script>

<template>
  <button class="a11y-accordion-toggle">
    <slot />
  </button>
</template>
