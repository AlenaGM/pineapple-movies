<template>
  <form @submit.prevent="searchStore.getMovies(searchMovie)">
    <input
      type="text"
      class="search-input"
      placeholder="Movie title"
      v-model="searchMovie"
    />
  </form>
  <Loader v-if="searchStore.loader" />
  <div v-else>
    <Movie
      v-for="movie of searchStore.movies"
      :key="movie.id"
      :movie="movie"
      :is-search="true"
    />
  </div>
</template>

<script setup>
import Loader from "../components/Loader.vue";
import Movie from "../components/Movie.vue";
import { ref } from "vue";
import { useSearchStore } from "../stores/SearchStore";
const searchStore = useSearchStore();
const searchMovie = ref("");
</script>

<style lang="scss" scoped>
.search-input {
  border: 1px solid #e7e7e7;
  width: 100%;
  max-width: 600px;
  box-sizing: border-box;
  height: 40px;
  padding: 0 10px;
  margin-bottom: 20px;
  border-radius: 10px;
  box-shadow: 0px 1px 2px 0px #0000001f;
}
</style>
