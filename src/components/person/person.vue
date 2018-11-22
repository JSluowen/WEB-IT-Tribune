<template>
  <div class="person">
    <div class="header">
      <header-not />
    </div>
    <transition enter-active-class="fadeIn" leave-active-class="fadeOut" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script>
import headerNot from "../header/headerNot";
export default {
  data() {
    return {};
  },
  components: {
    headerNot
  }
};
</script>

<style lang='less' scoped>
.person {
  .header {
    width: 100%;
  }
}
</style>
