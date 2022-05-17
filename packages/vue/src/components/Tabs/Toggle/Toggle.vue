<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'A11yTabsToggle',
});
</script>

<template>
  <button class="a11y-tabs-toggle">
    <slot />
  </button>
</template>
