import request from './apiConfig'

export const postMainData = async (subjectId) => {
  try {
    const response = await request.get(`/subjects/${subjectId}/questions/`)
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
