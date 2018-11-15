<template>
  <div class='firtpage'>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-8">
          <div class="article">
            <articles-item />
          </div>
        </div>
        <div class="col-md-4 ">
          <div class="userinfo">
            <userinfo-item />
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import articlesItem from "../article/article";
import userinfoItem from "../userinfo/userinfo";
export default {
  data() {
    return {};
  },
  components: {
    articlesItem,
    userinfoItem
  }
};
</script>

<style lang='less' scoped>
.firtpage {
  margin-top: 1%;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  .article {
    border: 1px solid red;
  }
  .userinfo {
    border: 1px solid blue;
  }
}
</style>
