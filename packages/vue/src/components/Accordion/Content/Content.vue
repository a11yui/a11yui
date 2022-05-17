<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'A11yAccordionContent',
});
</script>

<template>
  <div class="a11y-accordion-content">
    <slot />
  </div>
</template>
