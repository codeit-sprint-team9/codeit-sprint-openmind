import axios from 'axios'

const request = axios.create({
  baseURL: 'https://openmind-api.vercel.app/1-9/',

  headers: {
    accept: 'application/json',
  },
})

export default request
