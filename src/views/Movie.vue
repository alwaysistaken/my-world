<template>
  <div class="movie-comp">
    <div class="left-part">
      <h4>今年待看</h4>
      <MovieVue></MovieVue>
      <MovieVue></MovieVue>
      <MovieVue></MovieVue>
      <MovieVue></MovieVue>
      <MovieVue></MovieVue>
      <MovieVue></MovieVue>
      <MovieVue></MovieVue>
      <div class="foot"></div>
    </div>
    <div class="right-part">
      <div class="c-box-1">
        <h5>虽然但是，计划总是要做的</h5>
        <p>
          虽然很懒，但计划总是要做的。希望这些电影，真的能把我的人生延长三倍吧
        </p>
        <h5>光影流转</h5>
        <ol>
          <li>挚爱的华语电影</li>
          <li>人性的手术刀</li>
          <li>人与社会</li>
          <li>小浪漫小情调</li>
          <li>性与其他</li>
          <li>一群疯子</li>
          <li>开心就行</li>
        </ol>
      </div>
      <div class="c-box-2">
        <h5>大书库</h5>
        <ol>
          <li>推理世界</li>
          <li>挚爱的故事</li>
          <li>科幻园地</li>
          <li>历史之家</li>
          <li>技术与学习</li>
          <li>光影流转</li>
          <li>开心就行</li>
        </ol>
      </div>
    </div>
  </div>
</template>

<style>
@import url("./css/movie.css");
</style>

<script>
import MovieVue from "../components/MovieBlock.vue";
export default {
  components: {
    MovieVue,
  },
};
</script>