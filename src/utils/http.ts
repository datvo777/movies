import axios, { type AxiosInstance } from 'axios'
import config from '../enums/config'
class Http {
  instance: AxiosInstance
  constructor () {
    this.instance = axios.create({
      baseURL: config.baseUrl,
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + config.token
      }
    })
  }
}
const http = new Http().instance;
export default http;
