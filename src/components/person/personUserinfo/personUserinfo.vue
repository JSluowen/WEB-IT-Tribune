<template>
  <div class='person-userinfo'>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>个人信息界面</span>
      </div>
      <div class="text item">
        <el-button type="danger" @click="exit()">注销</el-button>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    exit() {
      this.$confirm("此操作将注销用户信息，返回登录界面", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          sessionStorage.removeItem('token')
          this.$router.push({
            path:"/login"
          })
          this.$message({
            type: "success",
            message: "注销成功!"
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消注销"
          });
        });
    }
  },
  components: {}
};
</script>

<style lang='less' scoped>
.person-userinfo {
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
    .item {
      margin-bottom: 18px;
    }
  }
}
</style>
