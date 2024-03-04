import path from "../enums/path"
import { QueryConfig } from "../hooks/useQueryConfig"
import { Movie, MovieListConfig } from "../types/movies.type"
import { Response } from "../types/response.type"
import http from "../utils/http"

const moviesApi = {
  getNowPlayingMovies (params: MovieListConfig) {
    return http.get<Response<Movie[]>>(path.nowPlayingMovies, {
      params
    })
  },
  getTopRatedMovies(params: MovieListConfig) {
    return http.get<Response<Movie[]>>(path.topRatedMovies,{
      params
    })
  },
  getSearchedMovies(params: QueryConfig) {
    return http.get<Response<Movie[]>>(path.search ?? '',{
      params,
    })
  },
}

export default moviesApi