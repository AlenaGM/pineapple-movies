import { defineStore } from "pinia";
import { useMovieStore } from "./MovieStore";

const url =
  "https://api.themoviedb.org/3/search/movie?api_key=6ad36d7cfa729ba7d5778bb108c77ec9&query=";

export const useSearchStore = defineStore("searchStore", {
  state: () => ({
    loader: false,
    movies: [],
  }),
  actions: {
    async getMovies(search) {
      this.loader = true;
      const res = await fetch(`${url}${search}`);
      const data = await res.json();
      this.movies = data.results;
      this.loader = false;
    },
    addToUserMovies(object) {
      const movieStore = useMovieStore();
      movieStore.movies.push({ ...object, isWatched: false });
      movieStore.activeTab = 1;
    },
  },
});
