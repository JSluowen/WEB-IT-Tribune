<template>
  <div class='personEditor'>
    <el-form
      :model="ruleForm"
      status-icon
      :rules="rules2"
      ref="ruleForm2"
      label-width="100px"
      label-position="right"
      class="demo-ruleForm"
    >
      <el-form-item
        label="邮箱"
        prop="email"
      >
        <el-input
          type="text"
          v-model="ruleForm.email"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item
        label="性别"
        prop="gender"
      >
        <el-radio-group
          v-model="ruleForm.gender"
          size="medium"
        >
          <el-radio
            border
            label="男"
          ></el-radio>
          <el-radio
            border
            label="女"
          ></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item
        label="研究方向"
        prop="type"
      >
        <el-checkbox-group v-model="ruleForm.type">
          <el-checkbox-button
            label="前端"
            name="type"
          ></el-checkbox-button>
          <el-checkbox-button
            label="后台"
            name="type"
          ></el-checkbox-button>
          <el-checkbox-button
            label="算法"
            name="type"
          ></el-checkbox-button>
          <el-checkbox-button
            label="全栈"
            name="type"
          ></el-checkbox-button>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item
        label="个人简介"
        prop="signature"
      >
        <el-input
          type="textarea"
          v-model.number="ruleForm.signature"
        ></el-input>
      </el-form-item>
      <el-form-item
        label="个人头像"
        prop="avatar"
      >
        <label
          class="btn btn-primary"
          for="uploads"
        >图片上传</label>
        <input
          type="file"
          id="uploads"
          style="position:absolute; clip:rect(0 0 0 0);"
          accept="image/png, image/jpeg, image/gif, image/jpg"
          @change="uploadImg($event, 1)"
        >
        <div class="avatarImg">
          <vue-cropper
            ref="cropper"
            :img="option.img"
            :autoCrop="option.autoCrop"
            :autoCropWidth="option.autoCropWidth"
            :autoCropHeight="option.autoCropHeight"
            :fixedBox="option.fixedBox"
            :centerBox="option.centerBox"
            :original="option.original"
            :canMove="option.canMove"
          ></vue-cropper>
        </div>
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          @click="submitForm('ruleForm2')"
        >完善信息</el-button>
        <el-button @click="resetForm('ruleForm2')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { VueCropper } from "vue-cropper";
export default {
  data() {
    var checkEmail = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("邮箱不能为空"));
      }else if(!this.checkemail(value)){
        return callback(new Error("请输入正确的邮箱格式"));
      }
      return callback();
    };
    var checkType = (rule, value, callback) => {
      if (value.length == 0) {
        return callback(new Error("请选择至少一项"));
      }
      return callback();
    };
    var checkGender = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("请选择性别"));
      }
      return callback();
    };
    var checkSignature = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("请简单的描述下自己吧"));
      }
      return callback();
    };
    return {
      ruleForm: {
        email: "",
        gender: "",
        type: [],
        signature: "",
        avatar: ""
      },
      rules2: {
        email: [{ validator: checkEmail, trigger: "blur" }],
        type: [{ validator: checkType, trigger: "blur" }],
        gender: [{ validator: checkGender, trigger: "blur" }],
        signature: [{ validator: checkSignature, trigger: "blur" }]
      },
      option: {
        img: "",
        autoCrop: true,
        autoCropWidth: 200,
        autoCropHeight: 200,
        fixedBox: true,
        centerBox: true,
        original: false,
        canMove: false
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.getAvatarimg().then(data => {
            this.$api.user
              .userInfo({
                email: this.ruleForm.email,
                gender: this.ruleForm.gender,
                type: this.ruleForm.type,
                avatar: data.avatar,
                signature: this.ruleForm.signature,
                username: sessionStorage.getItem("username")
              })
              .then(data => {
                if (data.success) {
                  this.$notify({
                    type: "success",
                    title: "提示信息",
                    message: "信息完善成功",
                    offset: 100,
                    duration: 1000
                  });
                  this.$router.push({
                    path: "/personpage"
                  });
                } else {
                  this.$notify({
                    type: "warning",
                    title: "提示信息",
                    message: "信息完善失败！",
                    offset: 100,
                    duration: 1000
                  });
                }
              })
              .catch(err => {
                console.log(err.data);
              });
          });
        } else {
          this.$notify({
            type: "warning",
            title: "警告信息",
            message: "请填写完整的个人信息",
            offset: 100,
            duration: 1000
          });
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    uploadImg(e, num) {
      //上传图片
      // this.option.img
      var file = e.target.files[0];
      if (!/\.(gif|jpg|jpeg|png|bmp|GIF|JPG|PNG)$/.test(e.target.value)) {
        alert("图片类型必须是.gif,jpeg,jpg,png,bmp中的一种");
        return false;
      }
      var reader = new FileReader();
      reader.onload = e => {
        let data;
        if (typeof e.target.result === "object") {
          // 把Array Buffer转化为blob 如果是base64不需要
          data = window.URL.createObjectURL(new Blob([e.target.result]));
        } else {
          data = e.target.result;
        }
        if (num === 1) {
          this.option.img = data;
        } else if (num === 2) {
          this.example2.img = data;
        }
      };
      // 转化为base64
      // reader.readAsDataURL(file)
      // 转化为blob
      reader.readAsArrayBuffer(file);
    },
    getAvatarimg() {
      var that = this;
      return new Promise((resolve, reject) => {
        that.$refs.cropper.getCropBlob(data => {
          var formData = new FormData();
          formData.append("file", data);
          formData.append("username", sessionStorage.getItem("username"));
          that.$api.user
            .fileavatarimg(formData)
            .then(data => {
              if (data.success) {
                resolve(data);
              } else {
                this.$notify({
                  type: "warning",
                  title: "警告信息",
                  message: "头像上传失败",
                  offset: 100,
                  duration: 1000
                });
              }
            })
            .catch(err => {
              reject(err.data);
            });
        });
      });
    },
    checkemail(value) {
      var patt = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/;
      return patt.test(value);
    }
  },
  components: {
    VueCropper
  }
};
</script>

<style lang='less' scoped>
.personEditor {
  padding: 20px;
  border-radius: 10px;
  border: 1px solid white;
  .avatarImg {
    width: 100%;
    height: 300px;
  }
}
</style>
