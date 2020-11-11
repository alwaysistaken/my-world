<template>
  <div class="home">
    <div class="main-box">
      <div class="head-box">
        <div class="left-part">
          <div class="bcg"></div>
          <div class="block">
            <h4>绿灯</h4>
            <p>一个无所事事的前端程序员</p>
          </div>
        </div>
        <div class="right-part">关注我</div>
      </div>
      <div class="navbox">
        <ul class="ul">
          <li
            :class="{ isclick: clickObj.click0 }"
            index="0"
            @click="beingClick($event)"
          >
            技术笔记
          </li>
          <li
            :class="{ isclick: clickObj.click1 }"
            index="1"
            @click="beingClick($event)"
          >
            个人相册
          </li>
          <li
            :class="{ isclick: clickObj.click2 }"
            index="2"
            @click="beingClick($event)"
          >
            碎言碎语
          </li>
          <li
            :class="{ isclick: clickObj.click3 }"
            index="3"
            @click="beingClick($event)"
          >
            书影音
          </li>
          <li
            :class="{ isclick: clickObj.click4 }"
            index="4"
            @click="beingClick($event)"
          >
            私密日记
          </li>
          <li
            :class="{ isclick: clickObj.click5 }"
            index="5"
            @click="beingClick($event)"
          >
            关于博主
          </li>
          <li
            :class="{ isclick: clickObj.click6 }"
            index="6"
            @click="beingClick($event)"
          >
            留言
          </li>
        </ul>
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      clickObj: {
        click0: false,
        click1: false,
        click2: false,
        click3: false,
        click4: false,
        click5: false,
        click6: false,
        beingclick: "",
      },
    };
  },
  methods: {
    beingClick(e) {
      let index = e.target.getAttribute("index");
      if (this.clickObj.beingclick !== "") {
        this.clickObj[this.clickObj.beingclick] = false;
      }
      this.clickObj.beingclick = "click" + index;
      this.clickObj[this.clickObj.beingclick] = true;
      switch (index) {
        case "0":
          if (this.$route.path !== "/index/skill") {
            this.$router.push("/index/skill");
          }
          break;
        case "1":
          if (this.$route.path !== "/index/photo") {
            this.$router.push("/index/photo");
          }
          break;
        case "2":
          if (this.$route.path !== "index/tips") {
            this.$router.push("/index/tips");
          }
          break;
        case "3":
          if (this.$route.path !== "index/movie") {
            this.$router.push("/index/movie");
          }
      }
    },
  },
  created() {
    let path = this.$route.path;
    switch (path) {
      case "/index":
        if (this.clickObj.beingclick !== "") {
          this.clickObj[this.clickObj.beingclick] = false;
        }
        this.clickObj.beingclick = "click0";
        this.clickObj[this.clickObj.beingclick] = true;
        this.$router.push("/index/skill");
        break;
      case "/index/skill":
        if (this.clickObj.beingclick !== "") {
          this.clickObj[this.clickObj.beingclick] = false;
        }
        this.clickObj.beingclick = "click0";
        this.clickObj[this.clickObj.beingclick] = true;
        break;
      case "/index/tips":
        if (this.clickObj.beingclick !== "") {
          this.clickObj[this.clickObj.beingclick] = false;
        }
        (this.clickObj.beingclick = "click2"),
          (this.clickObj[this.clickObj.beingclick] = true);
        break;
      case "/index/photo":
        if (this.clickObj.beingclick !== "") {
          this.clickObj[this.clickObj.beingclick] = false;
        }
        (this.clickObj.beingclick = "click1"),
          (this.clickObj[this.clickObj.beingclick] = true);
        break;
    }
  },
};
</script>

<style>
@import url("./css/home.css");
</style>
