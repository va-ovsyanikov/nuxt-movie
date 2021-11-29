<template>
  <div class="app max-w-screen-xl mx-auto p-12 h-screen">
    <div class=" flex flex-col h-full relative">
    <v-nav class="z-30"></v-nav>
      <div class="h-full">
          <Nuxt class=" pt-16 pl-5 pr-5 app_bg  h-full" />
      </div>
      <v-slider class="mt-auto" />
    </div>
  </div>
</template>
<script>
import vNav from '../components/vNav.vue'
export default {
  components: { vNav },
}
</script>
<style lang="less" scoped>
.app {
  background-color: @bg_wrapp;
}
.app_bg {
  background-image: url('@/assets/img/movieHero.jpg');
  background-repeat: no-repeat;
  background-size:cover;
  position: relative;
  &:after {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background-color: rgba(0, 0, 0, 0.7);
  }
}
</style>