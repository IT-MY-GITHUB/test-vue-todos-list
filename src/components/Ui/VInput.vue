<script setup>
import { defineProps } from 'vue';

defineProps({
  type: {
    type: String,
    default: 'text',
    validator: (value) => [
      'text',
      'password',
      'email',
      'tel',
      'search',
      'number'
    ].includes(value)
  },
  placeholder: String,
  modelValue: {
    type: [String, Number],
    default: ''
  }

});

const emits = defineEmits([
  'update:modelValue'
]);

</script>

<template>
  <input
    class="form-control"
    :type="type"
    :placeholder="placeholder"
    :value="modelValue"
    @input="emits('update:modelValue', $event.target.value )"
  >
</template>
