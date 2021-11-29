<template>
  <div class="h-full">
  
    <div v-if="$fetchState.pending"></div>
    
    <div  v-else class="z-20 relative preview">
      <iframe
        :src="`https://www.youtube.com/embed/${video[0].key}`"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
      
  </div>
</template>

<script>
export default {
  layout:'video',
  data: () => ({
    video: []
  }),

  async fetch() {
    const id = this.$route.params.videoId
    const response = await this.$axios.get(
      id + '/videos?api_key=096d153c42208f65d95317898071573b'
    )
    const result = response.data
    result.results.forEach((item) => {
      this.video.push(item)
    })
  },
}
</script>

<style lang="less" scoped>
.preview {
  position: relative;
  padding: 0 0 0 0;
  height: 100%;
  overflow: hidden;
  iframe,
  object,
  embed {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}

</style>