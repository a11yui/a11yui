<script lang="ts">
import { defineComponent } from 'vue';
import { modal } from '@a11yui/core';

export default defineComponent({
  name: 'A11yModal',
  props: {
    forceAction: {
      type: Boolean,
      default: false,
    }
  },
  mounted() {
    if (modal) modal.on(this.$refs.container as HTMLElement);
  },
  beforeUnmount() {
    if (modal) modal.off(this.$refs.container as HTMLElement);
  },
});
</script>

<template>
  <div
    ref="container"
    class="a11y-modal"
    :class="{ 'a11y-modal-force-action': forceAction }"
  >
    <slot />
  </div>
</template>
