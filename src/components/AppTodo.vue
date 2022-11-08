<script setup>
import PlusIcon from './icons/PlusIcon';
import { ref, onMounted, computed } from 'vue';
import { useStore } from 'vuex';
import VButton from './Ui/VButton.vue';
import TheDialog from './TheDialog/TheDialog.vue';
import AppTodoItem from './AppTodoItem.vue';
import AppTodoForm from './AppTodoForm.vue';

const store = useStore();

const isClosed = ref(false);

const dialogIsOpen = ref(false);

const setTodosFromApi = (limit) => {
  store.dispatch('SET_TODOS_FROM_API', limit);
};
const getAllTodos = computed(() => store.getters.GET_ALL_TODOS);
const getTodosLength = computed(() => store.getters.GET_ALL_TODOS.length);

const sendInvalidNotify = () => {
  dialogIsOpen.value = true;

  setTimeout(()=> {
    dialogIsOpen.value = false;
  }, 2000);
};

const changeTodoStatus = (id) => {
  store.commit('CHANGE_TODO_STATUS', id);
};

const isClosedToggle = () => {
  isClosed.value = !isClosed.value;
};

const deleteCompletedTodos = () => {
  store.dispatch('DELETE_COMPLETED_TODOS');
};

onMounted(() => {
  document.addEventListener('keyup', (e) => {
    if (e.code === 'Delete') deleteCompletedTodos();
  });

  setTodosFromApi(5);
});

</script>

<template>
  <Transition name="dialog-fade">
    <TheDialog
      v-show="dialogIsOpen"
      open
    >
      <b>Поле: "Текст задания..." не может быть пустым.</b>
    </TheDialog>
  </Transition>

  <!-- todo -->
  <div
    class="todo"
  >
    <!-- todo__head -->
    <div class="todo__head">
      <h2 class="todo__head-title">
        Мой день
      </h2>

      <VButton
        class="btn"
        :class="{'btn--closed': isClosed}"
        @click="isClosed = !isClosed"
      >
        <PlusIcon />
      </VButton>
    </div>
    <!-- /.todo__head -->

    <!-- todo form with transition -->
    <Transition name="form-fade">
      <AppTodoForm
        v-show="isClosed"
        @is-closed-toggle="isClosedToggle"
        @send-invalid-notify="sendInvalidNotify"
      />
    </Transition>
    <!-- /.todo form with transition -->

    <!-- todo list -->
    <div
      v-if="getTodosLength"
      class="todo__list"
    >
      <!-- todo list item -->
      <template
        v-for="todo in getAllTodos"
        :key="todo.id"
      >
        <AppTodoItem
          :todo="todo"
          @click="changeTodoStatus(todo.id)"
        />
      </template>
      <!-- /.todo__list-item -->
    </div>
    <!-- /.todo__list -->
    <p v-else>
      Задачи на сегодня отсутствуют
    </p>
  </div>
  <!-- /.todo -->
</template>

<style scoped>
.form-fade-enter-active {
  transition: all 0.5s ease-out;
}

.form-fade-leave-active {
  transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
}

.form-fade-enter-from,
.form-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}

.dialog-fade-enter-from {
  transform: translateY(0);
  transition: all 0.8s ease-out;
  opacity: 0;
}

.dialog-fade-enter-to {
  transform: translateY(400px);
  transition: all 0.8s ease-out;
  opacity: 1;
}

.dialog-fade-leave-from {
  transform: translateY(400px);
  opacity: 1;
  transition-delay: 1s;
}

.dialog-fade-leave-to {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
  transform: translateY(0);
  transition-delay: 1s;
  opacity: 0;
}
</style>
