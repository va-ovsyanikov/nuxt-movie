<template>
  <div
    :style="{
      'background-image':
        'url(' + `https://image.tmdb.org/t/p/w500/${film.backdrop_path}` + ')',
    }"
    class="overlay  flex flex-col items-start h-full z-20 "
  >
    <div class="z-10 ">
      <h1 class="text-white text-4xl">{{ film.title }}</h1>
      <p class="text-item1-color text-xl">
        {{ film.runtime }} min /
        <span v-for="genre in film.genres" :key="genre.id">
          {{ genre.name }}
        </span>

        {{ film.release_date }}
      </p>
      <p class="text-gray-300 mt-3">{{ film.overview }}</p>
    </div>
    <nuxt-link
      :to="{ path: `Video/${film.id}`, params: film.id }"
      class="
        px-5
        py-2
        bg-item1-color
        text-gray-300
        inline-block
        mt-auto
        mb-7
        transition
        rounded-r-full rounded-l-full
        duration-300
        ease-in-out
        z-10
      "
      >Трейлер</nuxt-link
    >
  </div>
</template>

<script>
export default {
  layout: 'film',
  data: () => ({
    film: '',
  }),
  async fetch() {
    const id = this.$route.params.filmId
    const response = await this.$axios.get(
      id + '?api_key=096d153c42208f65d95317898071573b'
    )
    this.film = response.data
  },
}
</script>

<style lang="less" scoped>

</style>