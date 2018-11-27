<template>
  <div class='person-userinfo'>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>个人信息界面</span>
        <el-button style="float: right; padding: 3px 0;color:red;" type="text" @click="exit()">注销</el-button>
      </div>
      <div class="text item">
        <div class="userinfo">
          <div class="avatar">
            <img src="@/assets/avatar/1.jpg" alt="">
          </div>
          <div class="nameinfo">
            <div class="name">张三</div>
            <div class="signature">我是一个有灵魂的程序员，代码写的贼溜</div>
          </div>
        </div>
        <div class="action">
          <el-row>
            <el-button type="primary">发表文章</el-button>
            <el-button type="success" @click="$router.push({path:'/personpage'})">个人主页</el-button>
          </el-row>
        </div>
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
          sessionStorage.removeItem("token");
           sessionStorage.removeItem("username");
          this.$router.push({
            path: "/login"
          });
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
      .userinfo{
        width: 100%;
        display: flex;
        justify-content: center;
        .avatar{
          width: 50px;
          height: 50px;
          display: flex;
          justify-content: center;
          align-items: center;
          overflow: hidden;
          border-radius: 5px;
          img{
          width: 100%;
          }
        }
        .nameinfo{
          width: 84%;
          margin-left: 5px;
          .name{
            font-size: 18px;
            font-weight: 700;
            font-family: "楷体";
          }
          .signature{
            width: 100%;
            font-size: 15px;
            font-family: "楷体";
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
        }
      }
      .action{
        width: 100%;
        display: flex;
        justify-content: center;
        margin-top: 10px;
      }
    }
  }
}
</style>
