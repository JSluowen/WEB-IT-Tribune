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
              <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm" :label-position="labelPosition">
                <el-form-item label="用户" prop="username">
                  <el-input v-model="ruleForm.username"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                  <el-input type="password" v-model="ruleForm.password"></el-input>
                </el-form-item>
                <el-form-item label="验证码" prop="checkcode">
                  <el-input type="text" v-model="ruleForm.checkcode" autocomplete="off"></el-input>
                  <div class="code" @click="refreshCode">
                    <indetifyVue :identifyCode="identifyCode"></indetifyVue>
                  </div>
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
import md5 from "js-md5";
import identify from "@/components/fun/indetify";
import indetifyVue from "../fun/indetify.vue";
export default {
  data() {
    var validatorCheckCode = (rule, value, callback) => {
      this.identifyCode = this.identifyCode.toLocaleLowerCase();
      if (value == "") {
        callback(new Error("请输入验证码"));
      } else if (value != this.identifyCode) {
        callback(new Error("验证码错误，请重新输入"))
      }else{
        callback();
      }
    };
    return {
      labelPosition: "left",
      identifyCodes: "1234567890QWERTYUIOPASDFGHJKLZXCVBNM",
      identifyCode: "",
      ruleForm: {
        username: "",
        password: "",
        code: "123",
        checkcode: ""
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名称", trigger: "blur" }
        ],
        password: [
          { required: true, message: "请输入用户密码", trigger: "blur" }
        ],
        checkcode: [
          { required: true, trigger: "blur", validator: validatorCheckCode }
        ]
      }
    };
  },
  mounted() {
    this.identifyCode = "";
    this.makeCode(this.identifyCodes, 4);
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          var pass = md5(this.ruleForm.password);
          this.$api.user
            .userLogin({
              username: this.ruleForm.username,
              password: pass
            })
            .then(data => {
              if (!data.have) {
                this.$message({
                  type: "warning",
                  message: "此用户不存在"
                });
              } else if (!data.status) {
                this.$message({
                  type: "warning",
                  message: "此用户还在审核中"
                });
              } else if (!data.pas) {
                this.$message({
                  type: "warning",
                  message: "密码错误"
                });
              } else {
                sessionStorage.setItem("token", data.token);

                this.$router.push({
                  path: "/person"
                });
              }
            });
        } else {
          this.$message({
            type: "error",
            message: "登录失败"
          });
          return false;
        }
      });
    },
    register() {
      this.$router.push({
        path: "/register",
        name: "register"
      });
    },
    randomNum(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    },
    refreshCode() {
      this.identifyCode = "";
      this.makeCode(this.identifyCodes, 4);
    },
    makeCode(o, l) {
      for (let i = 0; i < l; i++) {
        this.identifyCode += this.identifyCodes[
          this.randomNum(0, this.identifyCodes.length)
        ];
      }
    }
  },
  components: {
    indetifyVue
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
    /deep/.el-form-item__content {
      display: flex;
    }
    .inputcode {
      width: 75%;
      margin-left: 10px;
    }
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
  .code {
    width: 55%;
    height: 40px;
    margin-left: 5px;
    &:hover {
      cursor: pointer;
    }
  }
}
</style>
