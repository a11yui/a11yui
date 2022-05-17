<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'A11yModalContent',
});
</script>

<template>
  <div class="a11y-modal-content">
    <slot />
  </div>
</template>
