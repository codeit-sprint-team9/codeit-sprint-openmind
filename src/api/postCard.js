import request from './apiConfig'

export const postReactions = async (type, questionId) => {
  try {
    const response = await request.post(`/questions/${questionId}/reaction/`, {
      type: type,
    })
    if (response.status === 200) {
      return response.data
    }
  } catch (e) {
    throw new Error(e)
  }
}

export const postAnswers = async (questionId, contet, isRejected) => {
  try {
    const response = await request.post(`/questions/${questionId}/answers/`, {
      content: contet,
      isRejected: isRejected,
    })
    if (response.status === 201) {
      return response.data
    }
  } catch (e) {
    throw new Error(e)
  }
}

export const putAnswers = async (answerId, contet, isRejected) => {
  try {
    const response = await request.put(`/answers/${answerId}/`, {
      content: contet,
      isRejected: isRejected,
    })
    if (response.status === 200) {
      return response.data
    }
  } catch (e) {
    throw new Error(e)
  }
}

export const deleteAnswers = async (answerId) => {
  try {
    const response = await request.delete(`/answers/${answerId}/`)
    if (response.status === 204) {
      return response.data
    }
  } catch (e) {
    throw new Error(e)
  }
}

export const deleteQuestions = async (questionId) => {
  try {
    const response = await request.delete(`/questions/${questionId}/`)
    if (response.status === 204) {
      return response.data
    }
  } catch (e) {
    throw new Error(e)
  }
}
