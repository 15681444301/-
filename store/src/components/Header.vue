<template>
  <div class="header">
    <div class="header-logo">
      <img src="@/assets/logo.png" alt="" />
    </div>
    <div class="header-home">
      <span @click="goDetail">首页</span>
      <span>合作企业</span>
      <span @click="goNews">新闻中心</span>
      <span @click="goshop">线上商城</span>
      <span @click="gologin">登录</span>
    </div>
    <div class="header-item">
      <input type="text" placeholder="搜索" />
      <img src="../assets/img/放大镜.png" alt="" />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    gologin() {
      this.$router.push("/Login");
    },
    goshop() {
      this.$router.push("/Shopping");
    },
    goDetail() {
      this.$router.push("/Home");
    },
    goNews() {
      this.$router.push("/News");
    },
  },
};
</script>
<style lang="less" scoped>
.header {
  display: flex;
  background-color: black;
  height: 60px;
  .header-logo {
    padding-top: 10px;
    padding-left: 10px;
  }
  .header-home {
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: white;
    width: 65%;
    span {
      cursor: pointer;
      font-weight: bold;
    }
  }
  .header-item {
    height: 60px;
    line-height: 60px;
    text-align: center;
    margin-left: 50px;
    position: relative;
    input {
      margin-left: 50px;
      border: 1px solid #3b3b3b;
      padding: 5px;
      background-color: #2b2b2b;
      color: #fff;
      outline: none;
      width: 200px;
    }
    img {
      position: absolute;
      top: 0;
      right: 0;
      transform: translate(-50%, 150%);
    }
  }
}
</style>
