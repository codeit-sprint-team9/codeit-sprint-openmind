import request from './apiConfig'

async function postSubject(name) {
  try {
    const response = await request.post('/subjects/', { name: name })
    if (response.status === 201) {
      return response.data
    }
  } catch (e) {
    throw new Error(e)
  }
}

export default postSubject
