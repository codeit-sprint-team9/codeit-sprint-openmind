import request from './apiConfig'

export const getSubject = async ({ limit = 8, offset = 0, order = 'time' }) => {
  const query = `limit=${limit}&offset=${offset}&sort=${order}`

  try {
    const response = await request.get(`subjects/?${query}`)
    if (response.status == 200) {
      return response.data
    }
  } catch (e) {
    throw new Error(e)
  }
}
