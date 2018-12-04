<template>
    <div class='personPage'>
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-2"></div>
                <div class="col-md-8">
                    <div class="person-top">
                        <div class="userinfo">
                            <div class="userinfo-middle">
                                <div class="avatar">
                                    <img src="" alt="">
                                </div>                              
                                <div class="title">
                                    <div class="name">张三</div>
                                    <div class="gender" v-if="gender==='男'">
                                        男
                                    </div>
                                    <div class="gender" v-else>
                                        女
                                    </div>
                                </div>
                                <div class="signature">
                                    我是一个有灵魂的程序员，代码写的贼溜
                                </div>
                            </div>
                        </div>
                        <div class="action">
                            <div class="action-content">
                                <div class='person-article' @click="$router.push({path:'/personpage/personarticle'})">个人文章</div>
                                <div class="person-friend" @click="$router.push({path:'/personpage/personfriend'})">好友关注</div>
                                <div class="person-collect" @click="$router.push({path:'/personpage/personcollect'})">个人收藏</div>
                                <div class="person-editor" @click="$router.push({path:'/personpage/personeditor'})">个人信息</div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div class="row">
                <div class="col-md-2"></div>
                <div class="col-md-8">
                    <div class="person-bottom">
                        <div class="information">
                            <transition enter-active-class="fadeIn" leave-active-class="fadeOut" mode="out-in">
                                <router-view />
                            </transition>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import myUpload from "vue-image-crop-upload/upload-1.vue";
export default {
  data() {
    return {
      gender: "男",
    }
  },
  components: {
   
  },
  methods: {
   
  }
};
</script>

<style lang='less' scoped>
.personPage {
  margin-top: 1%;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  .person-top {
    width: 100%;
    height: 100%;
    .userinfo {
      width: 100%;
      height: 280px;
      background-image: url("../../../assets/bgc/1.jpg");
      background-position: center;
      background-size: cover;
      .userinfo-middle {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        position: relative;
        top: 20px;
        .avatar {
          width: 100px;
          height: 100px;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          overflow: hidden;
          img {
            width: 100%;
          }
        }
        .title {
          width: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          .name {
            font-size: 25px;
            font-family: "楷体";
          }
          .gender {
            font-size: 14px;
            margin-left: 10px;
          }
        }
        .signature {
          text-align: center;
          width: 50%;
          height: 100%;
          padding: 5px;
          font-family: "楷体";
          font-size: 18px;
        }
      }
    }
    .action {
      width: 100%;
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: white;
      .action-content {
        width: 65%;
        height: 100%;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        div {
          font-size: 17px;
          height: 100%;
          line-height: 40px;
          &:hover {
            cursor: pointer;
            border-bottom: 2px solid rgb(0, 174, 239);
          }
        }
      }
    }
  }
  .person-bottom {
    position: relative;
    top: 20px;
    width: 100%;
    height: 100%;
  }
}
</style>
