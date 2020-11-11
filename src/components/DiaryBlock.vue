<template>
  <div
    class="diary-comp"
    @mouseenter="hoverEnter"
    @mouseleave="hoverLeave"
  >
    <div class="left-image">
      <img :src= "imgurl" :class="{ mouseover: ifHover }" />
    </div>
    <div class="right-part">
      <h3 :class="{ mouseover: ifHover }">{{title}}</h3>
      <p class="p1">
        {{detail}}
      </p>
      <div class="foot">
        <i class="iconfont">&#xe73e;</i>
        <span>2020-10-31</span>
        <i class="iconfont">&#xe640;</i>
        <span>绿灯</span>
        <i class="iconfont">&#xe62d;</i>
        <span>原创</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props : ["title","detail","imgurl"],
  data() {
    return {
      ifHover: false,
    };
  },
  methods: {
    hoverEnter() {
      this.ifHover = true;
    },
    hoverLeave() {
      this.ifHover = false;
    },
  },
};
</script>

<style>
@import url("./css/diaryblock.css");
</style>