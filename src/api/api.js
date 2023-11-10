import request from './apiConfig'
import { URL_PATH } from './apiMapper'

export const getSubject = async ({ limit = 8, offset = 0, order = 'time' }) => {
  const query = `limit=${limit}&offset=${offset}&order=${order}`
  try {
    const response = await request.get(
      `${URL_PATH.SUBJECTS_CONTROLLER}?${query}`
    )
    if (response.status == 200) {
      return response.data
    }
  } catch (e) {
    throw new Error(e)
  }
}
