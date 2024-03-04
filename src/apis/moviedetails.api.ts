import { MovieDetailsType } from "../types/moviedetails.type"
import http from "../utils/http"

const movieDetailsApi = {
  getMovieDetails (movieId: string) {
    return http.get<MovieDetailsType>(`movie/${movieId}`, {
    })
  },
}

export default movieDetailsApi