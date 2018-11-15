<template>
  <div class='headerNot'>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-8">
          <div class="logo">
            <img src="./images/logo.png" alt="">
          </div>
        </div>
        <div class="col-md-4">
          <ul class="banner">
            <li>
              <router-link to="/">首页</router-link>
            </li>
            <li>
              <router-link to="">前端</router-link>
            </li>
            <li>
              <router-link to="">后台</router-link>
            </li>
            <li>
              <router-link to="">算法</router-link>
            </li>
            <li>
              <router-link to="/login">登录</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style lang='less' scoped>
.headerNot {
  width: 100%;
  height: 50px;
  @media (max-width: 768px) {
    height: 100%;
  }
  background-color: rgb(68, 68, 68);
  padding: 5px;
  .logo {
    width: 100%;
    height: 45px;
    overflow: hidden;
    display: flex;
    align-content: center;
    img {
      height: 100%;
      margin-left: 7%;
    }
  }
  .banner {
    height: 100%;
    padding: 0px;
    margin: 0px;
    list-style: none;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    color: white;
    li {
        white-space: nowrap;
      a {
        color: white;
        text-decoration: none;
        &:hover {
          cursor: pointer;
          color: rgb(0, 174, 239);
        }
      }
    }
  }
}
</style>
