<script lang="ts">
import { defineComponent } from 'vue';
import { tabs } from '@a11yui/core';

export default defineComponent({
  name: 'A11yTabs',
  mounted() {
    if (tabs) tabs.on(this.$refs.container as HTMLElement);
  },
  beforeUnmount() {
    if (tabs) tabs.off(this.$refs.container as HTMLElement);
  },
});
</script>

<template>
  <div
    ref="container"
    class="a11y-tabs"
  >
    <slot />
  </div>
</template>
