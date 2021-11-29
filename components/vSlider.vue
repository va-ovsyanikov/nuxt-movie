<template>
  <div class="slider_app">
    <VueSlickCarousel v-bind="settings">
      <div
        v-for="movie in moviesList.results"
        :key="movie.id"
        class="item pl-2 pr-2 cursor-pointer"
      >
        <img
          class="overflow-hidden"
          :src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`"
          alt="alt"
          @click="filmData(movie.id)"
        />
      </div>
    </VueSlickCarousel>
  </div>
</template>

<script>
export default {
  data: () => ({
    movies: {},
    movieId: '',
    settings: {
      //   focusOnSelect: true,
      infinite: true,
      speed: 500,
      slidesToShow: 7,
      slidesToScroll: 1,
      touchThreshold: 1,
      arrows: true,
      dots: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    },
  }),
  computed: {
    moviesList() {
      return this.$store.state.movies
    },
  },
  methods: {
    filmData(id) {
      this.$nuxt.$router.push({ path: `${id}`, params: { id } })
    },
  },
}
</script>

<style lang="less" >
.slider_app {
  background-color: @bg_slider;
}
.slick-slider {
  margin-left: 15px !important;
  margin-right: 15px !important;
}
.slick-list {
  padding: 20px 0 15px !important;
}
.slick-track {
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;

}
.item {
  height: 200px;
  overflow: hidden;
}

.slick-prev:before {
  color: #c7c7c7;
  font-size: 32px;
  font-weight: 900;
  line-height: 1;
  position: relative;
  right: 12px;
}

.slick-next:before {
  color: #c7c7c7;
  font-size: 32px;
  font-weight: 900;
  line-height: 1;
  outline: none;
  border: none;
}
.slick-prev,
.slick-next {
  top: 108%;
}
.slick-prev {
  left: auto;
  right: 35px;
  z-index: 20;
}
.slick-next {
  right: 0;
  z-index: 20;
}
</style>