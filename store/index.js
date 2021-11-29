
export const state = () => ({
    movies: {}
})
export const mutations = {
    MOVIES_FETCH(state, data) {
        state.movies = data
    }
}
export const actions = {
    async nuxtServerInit({ commit }) {
        const response = await this.$axios.$get(
            'popular?api_key=096d153c42208f65d95317898071573b'
          
        )

        commit('MOVIES_FETCH', response)
    }
}
export const getters = {
    MOVIES_GET: state => state.movies
}




