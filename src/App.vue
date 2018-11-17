<template>
  <transition
    enter-active-class="fadeIn"
    leave-active-class="fadeOut"
    mode="out-in"
  >
    <router-view />
  </transition>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
body {
  background-color: rgb(225, 225, 225);
}
</style>
