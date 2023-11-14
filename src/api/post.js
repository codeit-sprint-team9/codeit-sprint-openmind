import request from './apiConfig'

export const postMainData = async ({ id, limit = 4, offset = 0 }) => {
  const query = `limit=${limit}&offset=${offset}`
  try {
    const response = await request.get(`/subjects/${id}/questions/?${query}`)
    if (!response) return
    if (response.status === 200) {
      return response.data
    }
  } catch (e) {
    throw new Error(e)
  }
}

export const postUserData = async (id) => {
  try {
    const response = await request.get(`/subjects/${id}/`)
    if (!response) return
    if (response.status === 200) {
      return response.data
    }
  } catch (e) {
    throw new Error(e)
  }
}

export const postMainDelete = async (subjectId) => {
  try {
    const response = await request.delete(`/subjects/${subjectId}/`)
    if (response.status === 204) {
      return response
    }
  } catch (e) {
    throw new Error(e)
  }
}
