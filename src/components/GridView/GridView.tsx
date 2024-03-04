import config from "../../enums/config"
import { Movie } from "../../types/movies.type"
import CustomLink from "../CustomLink"
import './GridView.scss'
interface GridViewProps {
  readonly moviesList?: Movie[],
  readonly totalPages?: number,
  readonly totalResults?: number
}

function GridView({ moviesList } : GridViewProps) {
  return (
    <div className="movie-list">
      {
        moviesList?.map(movie => (
          <div className="movie-item" key={movie.id}>
            <CustomLink to={`/${movie.id}`}>
                <img
                  alt={movie.title}
                  src={movie.poster_path ? (config.baseImgUrl + movie.poster_path) : ''}
                />
                <div className="movie-vote-average">{movie.vote_average.toFixed(1)}</div>
                <div className="movie-title">{movie.title}</div>
            </CustomLink>
          </div>
        ))
      }
    </div>
  )
}

export default GridView