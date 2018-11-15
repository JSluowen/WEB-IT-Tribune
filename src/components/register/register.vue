<template>
  <div class='register'>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-4"></div>
        <div class="col-md-4">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>注册界面</span>
              <el-button style="float: right; padding: 3px 0" type="text" @click="$router.push({path:'/login'})">
                前往登录
              </el-button>
            </div>
            <div class="text item">
              <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
                <el-form-item label="用户名称" prop="username">
                  <el-input type="text" v-model="ruleForm2.username" autocomplete="off"></el-input>
                </el-form-item>

                <el-form-item label="密码" prop="pass">
                  <el-input type="password" v-model="ruleForm2.pass" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="确认密码" prop="checkPass">
                  <el-input type="password" v-model="ruleForm2.checkPass" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="邮箱地址" prop="email">
                  <el-input type="text" v-model="ruleForm2.email" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" @click="submitForm('ruleForm2')">注册</el-button>
                  <el-button @click="resetForm('ruleForm2')">重置</el-button>
                </el-form-item>
              </el-form>
            </div>
          </el-card>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import md5 from "js-md5";
export default {
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm2.checkPass !== "") {
          this.$refs.ruleForm2.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm2.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    var validateUsername = (rule, value, callback) => {
      if (value == "") {
        callback(new Error("请输入用户名称"));
      } else if (this.checkUsername == 1) {
        callback(new Error("用户名称已存在"));
      } else {
        callback();
      }
    };

    var validateEmail = (rule, value, callback) => {
      if (value == "") {
        callback(new Error("请输入邮箱地址"));
      }
       else if (!this.checkemail(value)) {
        callback(new Error("请输入正确的邮箱地址"));
      }
      else {
        callback();
      }
    };

    return {
      ruleForm2: {
        username: "",
        email: "",
        pass: "",
        checkPass: ""
      },
      rules2: {
        pass: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }],
        username: [{ validator: validateUsername, trigger: "blur" }],
        email: [{ validator: validateEmail, trigger: "blur" }]
      }
    };
  },
  created() {
    this.checkUsername();
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.ruleForm2.pass = md5(this.ruleForm2.pass);
          this.$api.user
            .userRegister({
              username: this.ruleForm2.username,
              password: this.ruleForm2.pass,
              email: this.ruleForm2.email
            })
            .then(data => {
              if (data.have) {
                this.$message({
                  type: "warning",
                  message: data.message
                });
              } else {
                this.$message({
                  type: "success",
                  message: data.message
                });
                this.$router.push({
                  path: "/login"
                });
              }
            })
            .catch(error => {
              this.$message({
                type: "error",
                message: data.message
              });
            });
        } else {
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    checkUsername() {},
    checkemail(value) {
      var patt = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/;
      return patt.test(value);
    }
  }
};
</script>

<style lang='less' scoped>
.register {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 2%;
  .el-card {
    width: 100%;
    /deep/.el-input__inner {
    }
  }
}
</style>
