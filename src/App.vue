<template>
  <main>
    <header class="header">
      <img src="/logo.svg" alt="logo" class="header-logo" />
      <h2>My Favourite Movies</h2>
    </header>
    <div class="tabs">
      <button
        :class="['btn', { btn_green: movieStore.activeTab === 1 }]"
        @click="setTab(1)"
      >
        Favourite
      </button>
      <button
        :class="['btn', { btn_green: movieStore.activeTab === 2 }]"
        @click="setTab(2)"
      >
        Search
      </button>
    </div>
    <div class="movies" v-if="movieStore.activeTab === 1">
      <div>
        <h3>Watched Movies (count: {{ movieStore.watchedMovies.length }})</h3>
        <Movie
          v-for="movie of movieStore.watchedMovies"
          :key="movie.id"
          :movie="movie"
        />
      </div>
      <div>
        <h3>All Movies (count: {{ movieStore.totalCountMovies }})</h3>
        <Movie
          v-for="movie of movieStore.movies"
          :key="movie.id"
          :movie="movie"
        />
      </div>
    </div>
    <div class="search" v-else>
      <Search />
    </div>
  </main>
</template>

<script setup>
import Movie from "./components/Movie.vue";
import Search from "./components/Search.vue";
import { useMovieStore } from "./stores/MovieStore";

const setTab = (id) => {
  movieStore.setActiveTab(id);
};
const movieStore = useMovieStore();
</script>

<style lang="scss">
.header {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;

  h2 {
    color: #2d4452;
  }

  &-logo {
    max-width: 50px;
    margin-right: 10px;
  }
}

.movies {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.btn {
  border: none;
  padding: 0 24px;
  min-width: 112px;
  height: 40px;
  font-size: 14px;
  margin: 0 10px;
  border-radius: 10px;
  box-shadow: 0 2px 0 #23262f3b;
  background: #efefef;
  color: #2d4452;
  top: 0;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
  &_green {
    background: #4ab8a1;
    color: #fff;
  }
}

.tabs {
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
}
</style>
