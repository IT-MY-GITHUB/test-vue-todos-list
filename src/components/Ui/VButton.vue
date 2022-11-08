<script setup>
import { defineProps } from 'vue';

defineProps({
  type: {
    type: String,
    default: ''
  }
});

const emits = defineEmits([
  'onClick'
]);

</script>

<template>
  <button
    :type="type"
    @click="emits('onClick')"
  >
    <slot>Click</slot>
  </button>
</template>
