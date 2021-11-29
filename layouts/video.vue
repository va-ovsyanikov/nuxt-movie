<template>
  <div class="app max-w-screen-xl mx-auto p-12 h-screen">
    <nuxt-link
      class="
        z-20
        absolute
        top-2
        mr-3
        pt-1
        pb-1
        pl-5
        pr-5
        bg-item1-color
        text-gray-300
        rounded-r-full rounded-l-full
      "
      :to="{ path: `/${$route.params.videoId}` }"
      >Info</nuxt-link
    >
    <div class="flex flex-col h-full relative">
      <div class="h-full">
        <Nuxt class="app_content h-full" />
      </div>
      <v-slider class="mt-auto" />
    </div>
  </div>
</template>
<script>
export default {}
</script>
<style lang="less" scoped>
.app {
  background-color: @bg_wrapp;
}
.app_content {
  background-image: url('@/assets/img/movieHero.jpg');
  background-repeat: no-repeat;
  background-size: cover;
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