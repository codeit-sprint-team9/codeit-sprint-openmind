import axios from 'axios'

const request = axios.create({
  baseURL: 'https://openmind-api.vercel.app/1-09/',

  headers: {
    accept: 'application/json',
  },
})

export default request
