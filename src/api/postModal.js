import request from './apiConfig'

export const postQuestions = async (subjectId, content) => {
  try {
    const response = await request.post(`/subjects/${subjectId}/questions/`, {
      content: content,
    })
    if (response.status === 201) {
      return response.data
    }
  } catch (e) {
    throw new Error(e)
  }
}
