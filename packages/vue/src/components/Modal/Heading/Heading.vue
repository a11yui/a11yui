<script lang="ts">
import { defineComponent } from 'vue';
import type { PropType } from 'vue';

type Level = 2 | 3 | 4;

export default defineComponent({
  name: 'A11yModalHeading',
  props: {
    level: {
      type: Number as PropType<Level>,
      default: 2,
    },
  }
});
</script>

<template>
  <h3 class="a11y-modal-heading" v-if="level === 3"><slot /></h3>
  <h4 class="a11y-modal-heading" v-else-if="level === 4"><slot /></h4>
  <h2 class="a11y-modal-heading" v-else><slot /></h2>
</template>
