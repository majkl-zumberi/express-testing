import axios from 'axios'
import {Notify} from 'quasar'
import _ from 'lodash'

const axiosInstance = axios.create({ baseURL: process.env.API_URL })
axiosInstance.defaults.headers.common['Content-Type'] = 'application/json'
axiosInstance.interceptors.request.use(
  conf => {
    return conf
  },
  error => {
    return Promise.reject(error)
  }
)
axiosInstance.interceptors.response.use(
  response => {
    return response
  },
  error => {
    const message = _.get(error, 'response.data.message')
    Notify.create({
      color: 'negative',
      message: message || 'error',
      icon: 'report_problem'
    })
    console.log(error)

    return Promise.reject(error)
  }
)
export default axiosInstance
