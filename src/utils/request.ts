import axios, { AxiosInstance } from 'axios'

class Request {
  private instance: AxiosInstance

  constructor(config = {}) {
    this.instance = axios.create(config)

    // 请求拦截
    this.instance.interceptors.request.use(
      (req) => {
        return req
      },
      (err) => err,
    )

    // 响应处理
    this.instance.interceptors.response.use(
      (res) => {
        return res.data
      },
      (err) => err,
    )
  }

  request(config: any) {
    return this.instance.request(config)
  }

  get(config: any) {
    return this.request({ ...config, method: 'GET' })
  }

  post(config: any) {
    return this.request({ ...config, method: 'POST' })
  }
}

export default Request
