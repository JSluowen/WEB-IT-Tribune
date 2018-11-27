<template>
  <div class="person">
    <div class="header">
      <header-not />
    </div>
    <div class="body">
      <transition enter-active-class="fadeIn" leave-active-class="fadeOut" mode="out-in">
        <router-view />
      </transition>
    </div>

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
    position: fixed;
    z-index: 9999;
    top: 0px;
  }
  .body{
    position: relative;
    top: 50px;
  }
}
</style>
