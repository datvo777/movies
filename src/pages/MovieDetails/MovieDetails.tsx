import { useQuery } from 'react-query'
import config from '../../enums/config'
import movieDetailsApi from "../../apis/moviedetails.api";
import { useParams } from 'react-router-dom';
import './MovieDetails.scss'
import Fallback from '../../components/Fallback';
function MovieDetails() {
  const { movieId } = useParams()
  const { data: movieDetailsData,isLoading, isError } = useQuery({
    queryKey: ['movieDetails', movieId],
    queryFn: () => movieDetailsApi.getMovieDetails(movieId ?? '')
  })
  const movieDetails = movieDetailsData?.data
  return (
    <div className="movies-container">
      {
  (isLoading ? <Fallback /> : 
    !isError && (
    <div className="movie-details-container">
      <div className="movie-details-poster">
        <img 
          alt={movieDetails?.title}
          src={movieDetails?.poster_path ? (config.baseImgUrl + movieDetails?.poster_path) : ''}
        />
      </div>
      <div className="movie-details-data">
        <h2 className="movie-details-title">
          {movieDetails?.title}
        </h2>
        <div className="movie-details-generic">
          {movieDetails?.release_date}
        </div>
        <div className="movie-details-generic">
          {movieDetails?.status}
        </div>
        <div className="movie-details-generic">
          {movieDetails?.tagline}
        </div>
        <div className="movie-details-vote">
          {movieDetails?.vote_average.toFixed(1)}
        </div>
        <div className="movie-details-genres">
          {
            movieDetails?.genres.map(genre => (
              <div className="movie-details-genre-name" key={genre.id}> {genre.name} </div>
            ))
          }
        </div>
      </div>
      <div className="movie-detail-summary">
        <h2>Overview</h2>
        <p>{movieDetails?.overview}</p>
      </div>
    </div>
    ))}
    </div>
  )
}

export default MovieDetails