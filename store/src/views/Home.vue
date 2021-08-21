<template>
  <div>
    <!-- 头部开始 -->
    <Header></Header>
    <!-- 头部结束 -->
    <!-- 轮播图 edn-->
    <el-carousel height="500px">
      <el-carousel-item
        v-for="(item, index) in imglist"
        :key="index"
        @click="goditail(index)"
      >
        <img :src="item.img" />
      </el-carousel-item>
    </el-carousel>
    <!--轮播图  -->
    <!-- 中间部分 -->
    <div class="middle">
      <!-- 在线商城 -->
      <div class="come">
        <h3>
          在线商城
        </h3>
        <p>将时尚与色彩融入你的训练，</p>
        <p>全新商城等你来发现你的活力！</p>
        <div class="come-go" @click="goshop"><span>进入商城</span></div>
      </div>
      <!-- 在线商城完毕 -->
      <!-- 社区服务 -->
      <div class="community ">
        <h3>
          尔克社区
        </h3>
        <p>认识那些热爱运动的伙伴们，</p>
        <p>在尔克社区找到最适合你的服务。</p>
        <div class="community-go"><span>进入社区</span></div>
      </div>
    </div>
    <!-- 社区服务完毕 -->
    <!-- 中间部分完毕 -->
    <div class="foot">
      <div class="footer">
        <div class="foot-list">
          <a><span>人才战略</span></a>
          <a><span>客户服务</span></a>
          <a><span>客户服务</span></a>
          <a><span>客户服务</span></a>
        </div>
        <div class="foot-list-two">
          <a><span>员工风采</span></a>
          <a><span>联系我们</span></a>
          <a><span>团购业务</span></a>
        </div>
        <div class="foot-list-three">
          <a><span>人才招聘</span></a>
          <a><span>防伪查询</span></a>
          <a><span>加盟信息</span></a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Header from "../components/Header";
export default {
  components: {
    Header,
  },
  data() {
    return {
      imglist: [
        { img: require("../assets/img/1.jpg") },
        { img: require("../assets/img/2.jpg") },
        { img: require("../assets/img/3.jpg") },
        { img: require("../assets/img/4.jpg") },
      ],
    };
  },
  methods: {
    goshop() {
      this.$router.push("/Shopping");
    },
  },
};
</script>
<style lang="less" scoped>
// .header-quit {
//   color: white;
//   height: 60px;
//   line-height: 60px;
//   text-align: center;
//   margin-left: 30px;
// }
.come {
  width: 200px;
  height: 150px;
  text-align: center;
  p {
    height: 15px;
    line-height: 15px;
    font-size: 13px;
  }
  .come-go {
    width: 100px;
    height: 30px;
    border: 2px solid gray;
    margin-left: 45px;
  }
}
.middle {
  margin-top: 100px;
  display: flex;
  margin-left: 20%;
}
.community {
  margin-left: 40%;
  width: 200px;
  height: 150px;
  text-align: center;
  p {
    height: 15px;
    line-height: 15px;
    font-size: 13px;
  }
  .community-go {
    width: 100px;
    height: 30px;
    border: 2px solid gray;
    margin-left: 45px;
  }
}
.foot {
  margin-top: 100px;
  height: 250px;
  background-color: #181818;
  .footer {
    padding-top: 50px;
    .foot-list {
      margin-left: 100px;
      a {
        margin-left: 50px;
        font-size: 14px;
        font-weight: bold;
        color: #999999;
      }
      a:nth-child(4) {
        margin-left: 600px;
      }
    }
    .foot-list-two {
      margin-top: 20px;
      margin-left: 100px;
      a {
        margin-left: 56px;
        font-size: 12px;
        color: #999999;
      }
    }
    .foot-list-three {
      margin-top: 20px;
      margin-left: 100px;
      a {
        margin-left: 56px;
        font-size: 12px;
        color: #999999;
      }
    }
  }
}
</style>
