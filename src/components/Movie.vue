<template>
  <div class="movie">
    <img
      :src="`https://image.tmdb.org/t/p/w300_and_h450_bestv2${movie.poster_path}`"
      :alt="movie.original_title"
      class="movie-img"
    />
    <div>
      <div class="movie-name">
        {{ movie.original_title }} ({{ movie.release_date }})
      </div>
      <span class="movie-overview">{{ movie.overview }}</span>
      <div class="movie-buttons" v-if="!isSearch">
        <button
          class="btn movie-buttons-watched"
          @click="movieStore.toggleWatched(movie.id)"
        >
          <span v-if="!movie.isWatched">Watched</span>
          <span v-else>Unwatch</span>
        </button>
        <button
          class="btn movie-buttons-delete"
          @click="movieStore.deleteMovie(movie.id)"
        >
          Delete
        </button>
      </div>
      <div class="movie-buttons" v-else>
        <button
          class="btn btn_green"
          @click="searchStore.addToUserMovies(movie)"
        >
          Add to favourite
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useMovieStore } from "../stores/MovieStore";
import { useSearchStore } from "../stores/SearchStore";

const movieStore = useMovieStore();
const searchStore = useSearchStore();

const props = defineProps({
  movie: {
    type: Object,
    required: true,
    default: () => {},
  },
  isSearch: {
    type: Boolean,
    required: false,
    default: false,
  },
});
</script>

<style lang="scss" scoped>
.movie {
  display: grid;
  grid-template-columns: 200px 1fr;
  column-gap: 30px;
  margin-bottom: 20px;
  background: #f9f9f9af;
  padding: 10px;
  box-shadow: 0px 1px 2px 0px #0000001f;
  border: 2px solid #efefef;
  border-radius: 10px;
  @media screen and (max-width: 550px) {
    grid-template-columns: 1fr;
    justify-items: center;
    max-width: 350px;
  }

  &-accept {
    margin-right: 10px;
  }

  &-img {
    width: 200px;
    height: 200px;
    object-fit: cover;
    border-radius: 50%;
    @media screen and (max-width: 550px) {
      margin-bottom: 24px;
    }
  }

  &-name {
    display: flex;
    align-items: center;
    font-size: 20px;
    margin-bottom: 20px;
    @media screen and (max-width: 550px) {
      justify-content: center;
    }
  }

  &-overview {
    display: block;
    margin-bottom: 20px;
  }

  &-buttons {
    display: flex;
    align-items: center;
    justify-content: center;
    &-watched {
      color: #fff;
      background: #497cb8;
      &__icon {
        width: 15px;
        margin-left: 10px;
      }
    }
    &-delete {
      color: #fff;
      background: #b84960;
    }
  }
}
</style>
