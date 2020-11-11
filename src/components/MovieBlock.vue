<template>
    <div class="movie-block">
        <div class="img-box">
            <img src="../assets/p2.png" alt="">
        </div>
        <div class="detail-box">
            <h4 class="title">
                <pre>寄生虫 기생충</pre>
            </h4>
            <p><pre>导演：奉俊昊</pre></p>
            <p><pre>主演: 宋康昊 / 李善均 / 曹如晶</pre></p>
            <p><pre>类型: 剧情 / 喜剧</pre></p>
            <p><pre>制片国家/地区: 韩国</pre></p>
            <p><pre>年份: 2019</pre></p>
        </div>
        <div class="click-target" @click="ClickTarget">
            <i class="iconfont" v-if="ifClick">&#xe632;</i>
        </div>
    </div>
</template>

<style>
@import url("./css/movieblock.css");
</style>

<script>
export default {
  data() {
    return {
      ifClick: false,
    };
  },
  methods: {
    ClickTarget() {
      this.ifClick = !this.ifClick;
    },
  },
};
</script>