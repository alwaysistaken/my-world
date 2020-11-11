<template>
  <div class="skill-main">
    <div class="leftaside">
      <div class="box">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </div>
    </div>
    <div class="rightaside">
      <div class="c-box-1">
        <h4>最近心情</h4>
        <diary></diary>
        <diary even="true"></diary>
        <diary></diary>
        <diary even="true"></diary>
        <diary></diary>
      </div>
      <div class="c-box-2">
        <h4>学习收藏</h4>
        <ol>
          <li target="0" @click="toUrl($event)">MDN开发技术文档</li>
          <li target="1" @click="toUrl($event)">github</li>
          <li target="2" @click="toUrl($event)">阮一峰es6教程</li>
          <li target="3" @click="toUrl($event)">JS数据结构与算法</li>
          <li target="4" @click="toUrl($event)">力扣题库</li>
          <li target="5" @click="toUrl($event)">好玩且有用的css特效</li>
          <li target="6" @click="toUrl($event)">数据结构与算法之美</li>
        </ol>
      </div>
      <div class="c-box-3">
        <h4>快乐源泉</h4>
        <div class="c-box-main-1">
          <div>电影街</div>
          <div>只狼</div>
        </div>
        <div class="c-box-main-2">
          <div>鸠摩搜书</div>
          <div>steam</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import diaryblock from "../components/DiaryBlock";
import diary from "../components/Diary";

export default {
  components: {
    diaryblock,
    diary,
  },
  data() {
    return {
      search: "",
      urlArr: [
        "https://developer.mozilla.org/zh-CN/docs/Web",
        "https://github.com/",
        "https://es6.ruanyifeng.com/",
        "https://www.bilibili.com/video/BV1yD4y127vy?from=search&seid=10315630546056892598",
        "https://leetcode-cn.com/",
        "https://www.bilibili.com/video/BV1Rz4y1D7Lp?from=search&seid=6965958674915883167",
        "https://time.geekbang.org/column/article/42733",
      ],
      urlArr2: [
        "https://www.1080.cn/",
        "https://sekiro.cubejoy.com/index.html",
      ],
    };
  },
  methods: {
    toUrl(e) {
      let index = e.target.getAttribute("target");
      window.location.href = this.urlArr[Number(index)];
    },
  },
};
</script>

<style>
@import url("./css/skill.css");
</style>