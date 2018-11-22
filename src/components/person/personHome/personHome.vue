<template>
  <div class='personHome'>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-8">
          <div class="article">
            <articles-item />
          </div>
        </div>
        <div class="col-md-4">
          <div class="userinfo">
            <person-userinfo />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import articlesItem from "@/components/article/article";
import personUserinfo from "../personUserinfo/personUserinfo";
export default {
  data() {
    return {};
  },
  components: {
    articlesItem,
    personUserinfo
  }
};
</script>

<style lang='less' scoped>
.personHome {
  margin-top: 1%;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
}
</style>
