<script setup>

</script>

<template>
  <dialog
    class="notify-dialog"
  >
    <slot>Сообщение</slot>
  </dialog>
</template>

<style>
dialog.notify-dialog {
  border-color: transparent;
  background-color: #d95133e6;
  border-radius: 10px;
  padding: 20px;
  min-width: 300px;
  min-height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 #0000, 0 0 #0000, 0 25px 50px -12px rgba(0, 0, 0, 25%);
  color: white;
  position: absolute;
  z-index: 1;
  transform: translateY(400px);
}
</style>
