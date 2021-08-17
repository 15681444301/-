<template>
  <div>
    <div class="bg"><img src="../assets/img/bg.jpg" alt="" /></div>
    <Header />
    <div class="mid">
      <div class="News-item" v-for="(item, index) in list" :key="index">
        <div class="News-item-img">
          <img :src="item.thumbnail" alt="" />
          <span>{{ item.publish_time }}</span>
        </div>
        <div class="News-item-title">{{ item.title }}</div>
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
      list: [],
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      this.$axios
        .get(
          "https://pbaccess.video.qq.com/trpc.nbacommunity.news.NewsCgi/NewsIndex?column_id=58&last_id=0&page_num=5&tag_id="
        )
        .then((res) => {
          console.log(res);
          this.list = res.data.data.news_info;
        });
    },
  },
};
</script>
<style lang="less" scoped>
.mid {
  display: flex;
  flex-wrap: wrap;
  .News-item {
    margin: 25px;
    width: 30%;
    .News-item-img {
      height: 200px;
      position: relative;

      img {
        width: 100%;
        height: 100%;
        border-radius: 20px;
      }
      span {
        position: absolute;
        bottom: 5px;
        right: 10px;
        font-size: 13px;
        color: white;
      }
    }
    .News-item-title {
      text-align: center;
      font-size: 14px;
      line-height: 25px;
      text-overflow: ellipsis;
      color: white;
    }
  }
}

.bg {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}
</style>
