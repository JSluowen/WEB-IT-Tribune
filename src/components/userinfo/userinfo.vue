<template>
  <div class='userinfo-item'>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>欢迎访问IT技术交流社区</span>
      </div>
      <div class="text item">
        <el-row>
          <el-button type="primary" plain @click="$router.push({path:'/login'})">直接登录</el-button>
          <el-button type="success" plain @click="$router.push({path:'/register'})">前往注册</el-button>
        </el-row>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  components: {}
};
</script>

<style lang='less' scoped>
.userinfo-item {
    width: 80%;
    height: 100%;
  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both;
  }

  .box-card {
    width: 100%;
    .text {
      font-size: 14px;
    }
    .item {
      margin-bottom: 18px;
    }
  }
}
</style>
