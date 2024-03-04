import omitBy from 'lodash/omitBy'
import isUndefined from 'lodash/isUndefined'
import useQueryParams from './useQueryParams'
import { MovieListConfig } from '../types/movies.type'

export type QueryConfig = {
  [key in keyof MovieListConfig]: string
}

export default function useQueryConfig() {
  const queryParams: MovieListConfig = useQueryParams()
  const queryConfig: MovieListConfig = omitBy(
    {
      page: queryParams.page ?? '1',
      language: queryParams.language ?? 'en-US',
      query: queryParams.query
    },
    isUndefined
  )
  return queryConfig
}
