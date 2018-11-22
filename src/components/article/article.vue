<template>
  <div class='article-item'>
    <el-tabs type="border-card">
      <el-tab-pane label="全部">
        <article-all/>
      </el-tab-pane>
      <el-tab-pane label="前端">
        <artice-front/>
      </el-tab-pane>
      <el-tab-pane label="后台">
        <article-back/>
      </el-tab-pane>
      <el-tab-pane label="分享">
        <article-share/>
      </el-tab-pane>
      <el-tab-pane label="问答">
        <article-problem/>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import articleAll from "./article-all/articleAll";
import articleBack from "./article-back/articleBack";
import articeFront from "./article-front/articleFront";
import articleProblem from "./article-problem/articleProblem";
import articleShare from "./article-share/articleShare";

export default {
  data() {
    return {};
  },
  components: {
    articleBack,
    articleAll,
    articeFront,
    articleProblem,
    articleShare
  }
};
</script>

<style lang='less' scoped>
.article-item {
  width: 90%;
  height: 100%;
  margin-left: 10%;
}
</style>
