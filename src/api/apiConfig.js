import axios from 'axios'
export function isEmpty(value) {
  return (
    value === '' ||
    value === null ||
    value === undefined ||
    (typeof value === 'object' && !Object.keys(value).length)
  )
}

const request = axios.create({
  baseURL: 'https://openmind-api.vercel.app/1-9/',

  headers: {
    accept: 'application/json',
  },
})

request.interceptors.request.use(
  (config) => {
    if (config.path) {
      for (const [key, value] of Object.entries(config.path)) {
        config.url = config.url.replace(`:${key}`, value)
      }
    }

    if (!isEmpty(config.query)) {
      const query = new URLSearchParams(config.query).toString()
      config.url += '?' + query
    }

    return config
  },
  (error) => {
    console.error('ApiConfig Error : ', error.message)
    return
  }
)
export default request
