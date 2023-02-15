<template>
  <form
    @submit.prevent="searchStore.getMovies(searchMovie)"
    class="search-form"
  >
    <input
      type="text"
      class="search-input"
      placeholder="Movie title"
      v-model="searchMovie"
    />
  </form>
  <Loader v-if="searchStore.loader" />
  <div class="search-results" v-else>
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
.search {
  &-form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  &-input {
    width: 100%;
    max-width: 600px;
    height: 40px;
    padding: 0 10px;
    border: 1px solid #e7e7e7;
    border-radius: 10px;
    box-shadow: 0px 1px 2px 0px #0000001f;
    box-sizing: content-box;
    margin-bottom: 20px;
    @media screen and (max-width: 550px) {
      max-width: 350px;
    }
  }
  &-results {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>
