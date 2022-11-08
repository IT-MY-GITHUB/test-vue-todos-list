<script setup>
import { defineProps } from 'vue';

defineProps({
  todo: {
    type: Object,
    required: true
  }
});

const emits = defineEmits([
  'onClick'
]);

</script>

<template>
  <div
    class="todo__list-item"
    :class="{'todo__list-item_completed': todo.completed}"
    @click="emits('onClick')"
  >
    <div class="todo__list-item-info">
      <h4 class="todo__list-item-info-title">
        {{ todo.title }}
      </h4>
      <h6 class="todo__list-item-info-description">
        {{ todo.title }}
      </h6>
    </div>
    <!-- /.todo__list-item-info -->
  </div>
</template>
