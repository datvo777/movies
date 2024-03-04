import { useQuery } from 'react-query'
import GridView from '../../components/GridView'
import useQueryConfig, { QueryConfig } from '../../hooks/useQueryConfig'
import moviesApi from '../../apis/movies.api'
import './Search.scss'
import Fallback from '../../components/Fallback'
function Search() {
  const queryConfig: QueryConfig = useQueryConfig()
  const { data: moviesData, isLoading, isFetched } = useQuery({
    queryKey: ['searchedMovies', queryConfig],
    queryFn: () => {
      return moviesApi.getSearchedMovies(queryConfig)
    },
    keepPreviousData: true,
    staleTime: 3 * 60 * 1000,
  })
  const renderSearchResults = () => {
    if (isLoading) return <Fallback />
    if (moviesData && moviesData?.data?.results?.length > 0 && isFetched) {
      return (
        <GridView 
          moviesList={moviesData?.data.results} 
          totalPages={moviesData?.data.total_pages}
          totalResults={moviesData?.data.total_results}
        />
      )
    }
    return (
      <div className="search-no-result">
        There are no results to display with {queryConfig.query}
      </div>
    )
  }
  return (
    <div className='movies-container search-movies'>
      <div className='search-result'>Search Result for: {queryConfig.query}</div>
      {renderSearchResults()}
    </div>
  )
}

export default Search