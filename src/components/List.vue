<template>
  <div class="list">
    <diaryblock
      @click.native="todiary(urlList[0])"
      :title="list[0].title"
      :detail="list[0].detail"
      :imgurl="list[0].imgurl"
    ></diaryblock>
    <diaryblock
      @click.native="todiary(urlList[1])"
      :title="list[1].title"
      :detail="list[1].detail"
      :imgurl="list[1].imgurl"
    ></diaryblock>
    <diaryblock
      @click.native="todiary(urlList[2])"
      :title="list[2].title"
      :detail="list[2].detail"
      :imgurl="list[2].imgurl"
    ></diaryblock>
    <diaryblock
      @click.native="todiary(urlList[3])"
      :title="list[3].title"
      :detail="list[3].detail"
      :imgurl="list[3].imgurl"
    ></diaryblock>
    <diaryblock
      @click.native="todiary1"
      :title="list[0].title"
      :detail="list[0].detail"
      :imgurl="list[0].imgurl"
    ></diaryblock>
    <diaryblock
      @click.native="todiary1"
      :title="list[0].title"
      :detail="list[0].detail"
      :imgurl="list[0].imgurl"
    ></diaryblock>
    <diaryblock
      @click.native="todiary1"
      :title="list[0].title"
      :detail="list[0].detail"
      :imgurl="list[0].imgurl"
    ></diaryblock>
  </div>
</template>

<script>
import diaryblock from "./DiaryBlock.vue";
export default {
  components: {
    diaryblock,
  },
  data() {
    return {
      list: [
        {
          title: "javascript闭包与作用域",
          detail:
            "闭包是js基础绕不过的一个坑，对于非计算机专业的初学者来说，也是前期的一个小难点。在理解闭包之前，我们应该先理清的是js这门语言中作用域的特点。",
          imgurl: require("../assets/img/ava01.png"),
        },
        {
          title: "一窥javascript原型链",
          detail:
            "原型链是js实现面向对象的基础，所有的继承都基于原型链完成。学习原型链是我们深入了解面向对象不可缺少的一个知识点,也是比较容易混乱的一个知识点",
          imgurl: require("../assets/img/ava03.png"),
        },
        {
          title : "javascript中的this指向问题",
          detail : "对js中的this指向问题有一个清晰的认知，是学习面向对象的重要基础。js中的this指向也和js语言中最重要的函数息息相关，因此弄清this指向问题可以说是学习js必不可少的一步。",
          imgurl: require("../assets/img/ava02.png"),
        },
        {
          title : "javascript中的面向对象(一)",
          detail : "javascript和其他语言的不同之处在于，js没有类的概念，js中的对象也和其他语言中的对象大不相同。但这并不妨碍javascript利用面向对象的思想，实现面向对象的开发模式。",
          imgurl : require("../assets/img/ava01.png")
        }
      ],
      urlList: ["/index/skill/diary1", "/index/skill/diary2","/index/skill/diary3","/index/skill/diary4"],
    };
  },
  methods: {
    todiary(url) {
      this.$router.push(url);
    },
  },
};
</script>

<style>
#app
  > div
  > div
  > div.skill-main
  > div.leftaside
  > div
  > div
  > div:nth-child(1) {
  margin-top: 0px;
}
</style>