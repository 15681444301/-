<template>
  <div class="shop">
    <div class="bg"><img src="../assets/img/bg.jpg" alt="" /></div>
    <Header />
    <div class="shop-item">
      <div class="shop-item-list" v-for="(item, index) in list" :key="index">
        <img :src="item.img" alt="" />
        <p>名称:{{ item.title }}</p>
        <p>价格{{ item.price }}</p>
        <div @click="total(item)">加入购物车</div>
      </div>
    </div>
    <!-- 计算 -->
    <div class="foot">
      <div class="foot-total">
        <span>总金额:{{ tota }}</span>
      </div>
      <div class="foot-num">
        <span>数量</span>
      </div>
    </div>
    <!-- 计算结束 -->
    <div class="space"></div>
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
      list: [
        {
          title: "aj5黑骑士",
          img: require("../assets/img/nike1.png"),
          price: 1029,
          num: 0,
        },
        {
          title: "nike跑鞋",
          img: require("../assets/img/nike2.png"),
          price: 299,
          num: 0,
        },
        {
          title: "鸿星尔克跑鞋",
          img: require("../assets/img/hx1.png"),
          price: 599,
          num: 0,
        },
        {
          title: "鸿星尔克休闲鞋",
          img: require("../assets/img/hx2.png"),
          price: 699,
          num: 0,
        },
        {
          title: "安踏GJ系列9001",
          img: require("../assets/img/at1.png"),
          price: 699,
          num: 0,
        },
        {
          title: "安踏冠军肖恩",
          img: require("../assets/img/at2.png"),
          price: 233,
          num: 0,
        },
        {
          title: "洞洞鞋",
          img: require("../assets/img/tx1.png"),
          price: 33,
          num: 0,
        },
        {
          title: "凉鞋",
          img: require("../assets/img/tx2.png"),
          price: 23,
          num: 0,
        },
      ],
      tota: 0,
    };
  },
  methods: {
    total(item) {
      console.log(item);
      item.num++;
      return (this.tota = item.price * item.num);
    },
  },
  // computed:{
  //      total(item) {
  //     console.log(item);
  //     return (this.tota = this.list.price * this.list.num);
  //   },
  // }
};
</script>
<style lang="less" scoped>
.bg {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}
.space {
  height: 50px;
}
.foot {
  display: flex;
  position: fixed;
  width: 100%;
  bottom: 0;
  height: 30px;
  flex-direction: row-reverse;
  background-color: #9b9b9b;
  .foot-total {
    margin: 10px 200px 0 0;
  }
  .foot-num {
    margin: 30px 80px 0 0;
  }
}
.shop-item {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  .shop-item-list {
    width: 200px;
    height: 250px;
    margin: 60px;
    img {
      width: 100%;
      height: 180px;
      border-radius: 10px;
    }
    p {
      text-align: center;
      font-size: 14px;
      color: #9b9b9b;
    }
    div {
      text-align: center;
      background-color: red;
      border-radius: 20px;
      cursor: pointer;
    }
  }
}
</style>
