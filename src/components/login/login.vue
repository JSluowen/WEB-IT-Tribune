<template>
  <div class='login'>
    <div class="container-fluid">
      <div class="row">
        <div></div>
        <div class="col-md-4"></div>
        <div class="col-md-4">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>登录界面</span>
              <el-button style="float: right; padding: 3px 0" type="text">忘记了密码？</el-button>
            </div>
            <div class="text item">
              <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                <el-form-item label="用户" prop="username">
                  <el-input v-model="ruleForm.username"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                  <el-input type="password" v-model="ruleForm.password"></el-input>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
                  <el-button @click="register">注册</el-button>
                </el-form-item>
              </el-form>
            </div>
          </el-card>
        </div>
        <div class="col-md-4"></div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      ruleForm: {
        username: "",
        password: ""
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名称", trigger: "blur" }
        ],
        password: [
          { required: true, message: "请输入用户密码", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("登录");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    register() {
      this.$router.push({
        path: "/register",
        name: "register"
      });
    }
  }
};
</script>

<style lang='less' scoped>
.login {
  display: flex;
  justify-content: center;
  margin-top: 2%;
  .text {
    font-size: 14px;
  }
  .item {
    margin-bottom: 18px;
  }
  .box-card {
    width: 100%;
  }
  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both;
  }
}
</style>
