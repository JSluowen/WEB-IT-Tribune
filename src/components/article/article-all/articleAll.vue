<template>
  <div class='article-all'>
    <ul class="article-ul">
      <li>
        <div class="userinfo">
          <div class="avatar">
            <img src="@/assets/avatar/1.jpg" alt="">
          </div>
        </div>
        <div class="article-title">
          <el-tag>分享</el-tag>
          <div class="title">
            我是标题 我是标题 我是标题 我是标题 我是标题 我是标题 我是标题 我是标题
          </div>
        </div>
        <div class="badge">
          <el-badge :value="12" class="item" type="primary">
            <el-button size="small">评论</el-button>
          </el-badge>
          <el-badge :value="3" class="item" type="success">
            <el-button size="small">点击</el-button>
          </el-badge>
        </div>
        <div class="time">
          2018-11-15
        </div>
      </li>
      <li>
        <div class="userinfo">
          <div class="avatar">
            <img src="@/assets/avatar/1.jpg" alt="">
          </div>
        </div>
        <div class="article-title">
          <el-tag>分享</el-tag>
          <div class="title">
            我是标题 我是标题 我是标题 我是标题 我是标题 我是标题 我是标题 我是标题
          </div>
        </div>
        <div class="badge">
          <el-badge :value="12" class="item" type="primary">
            <el-button size="small">评论</el-button>
          </el-badge>
          <el-badge :value="3" class="item" type="success">
            <el-button size="small">点击</el-button>
          </el-badge>
        </div>
        <div class="time">
          2018-11-15
        </div>
      </li>
      <li>
        <div class="userinfo">
          <div class="avatar">
            <img src="@/assets/avatar/1.jpg" alt="">
          </div>
        </div>
        <div class="article-title">
          <el-tag>分享</el-tag>
          <div class="title">
            我是标题 我是标题 我是标题 我是标题 我是标题 我是标题 我是标题 我是标题
          </div>
        </div>
        <div class="badge">
          <el-badge :value="12" class="item" type="primary">
            <el-button size="small">评论</el-button>
          </el-badge>
          <el-badge :value="3" class="item" type="success">
            <el-button size="small">点击</el-button>
          </el-badge>
        </div>
        <div class="time">
          2018-11-15
        </div>
      </li>
    </ul>
    <div class="block">
      <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="currentPage" :page-size="10" layout="total, prev, pager, next" :total="200">
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentPage: 1,
    };
  },
  components: {},
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    }
  }
};
</script>

<style lang='less' scoped>
.article-all {
  .article-ul {
    margin: 0px;
    padding: 0px;
    list-style: none;
    width: 100%;
    li {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      border-bottom: 1px solid #e5e5e5;
      padding: 5px;
      &:hover {
        background-color: rgb(245, 245, 245);
      }
      .userinfo {
        width: 6%;
        display: flex;
        justify-content: center;
        align-items: center;
        .avatar {
          width: 35px;
          height: 35px;
          border-radius: 3px;
          display: flex;
          justify-content: center;
          align-items: center;
          overflow: hidden;
          img {
            width: 100%;
          }
        }
        .clickNumber {
          width: 20%;
          white-space: nowrap;
          align-items: center;
        }
      }
      .article-title {
        width: 60%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        .title {
          width: 90%;
          margin-left: 10px;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
          font-size: 18px;
          &:hover {
            cursor: pointer;
            text-decoration: underline;
          }
        }
      }
      .badge {
        width: 23%;
        height: 100%;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
      }
    }
  }
}
</style>
