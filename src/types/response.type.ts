export interface Response<Data> {
  message: string
  results: Data
  total_pages: number
  total_results: number
}