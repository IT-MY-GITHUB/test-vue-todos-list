<script setup>
import { ref } from 'vue';
import { useStore } from 'vuex';
import VInput from './Ui/VInput.vue';

const store = useStore();

const inputValue = ref('');

const emits = defineEmits([
  'sendInvalidNotify',
  'isClosedToggle'
]);

const addTodo = () => {
  if (inputValue.value) {
    store.dispatch('ADD_NEW_TODO', { title: inputValue.value, completed: false });

    emits('isClosedToggle');
    inputValue.value = '';
  } else {
    emits('sendInvalidNotify');
  }
};
</script>

<template>
  <form
    class="todo__form"
    @submit.prevent.stop
  >
    <VInput
      v-model="inputValue"
      type="text"
      placeholder="Текст задания..."
      required
      @keyup.enter="addTodo"
    />
  </form>
</template>
