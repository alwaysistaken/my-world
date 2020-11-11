<template>
  <div id="app" :style="{ height: scrollerHeight }">
    <router-view />
  </div>
</template>

<style>

html{
  height: 100%;
  background-color: #f5f5f5;
}

html,
body,
#app {
  width: 100%;
}

* {
  padding: 0;
  margin: 0;
}

@font-face {
  font-family: 'iconfont';  /* project id 2170149 */
  src: url('//at.alicdn.com/t/font_2170149_3166frvtog.eot');
  src: url('//at.alicdn.com/t/font_2170149_3166frvtog.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_2170149_3166frvtog.woff2') format('woff2'),
  url('//at.alicdn.com/t/font_2170149_3166frvtog.woff') format('woff'),
  url('//at.alicdn.com/t/font_2170149_3166frvtog.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_2170149_3166frvtog.svg#iconfont') format('svg');
}

.iconfont{
    font-family:"iconfont" !important;
    font-size:16px;font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;}

</style>
<script>
export default {
  computed: {
    scrollerHeight: function () {
      return window.innerHeight;
    },
  },
};
</script>
