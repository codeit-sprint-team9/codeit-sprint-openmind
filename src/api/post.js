import request from './apiConfig'

export const postMainData = async ({ id, limit, offset = 0 }) => {
  const query = `limit=${limit}&offset=${offset}`
  try {
    const response = await request.get(`/subjects/${id}/questions/?${query}`)
    if (response.status === 200) {
      return response.data
    }
  } catch (e) {
    throw new Error(e)
  }
}
// export async function getReviews({ offset = 0, limit = 3 }) {
//   const query = `offset=${offset}&limit=${limit}`
//   const response = await fetch(`${BASE_URL}/film-reviews?${query}`)
//   if (!response.ok) {
//     throw new Error('리뷰 못불러옴')
//   }
//   const body = await response.json()
//   return body
// }

// export const postMainData = async (subjectId) => {
//   try {
//     const response = await request.get(`/subjects/${subjectId}/questions/`)
//     if (response.status === 200) {
//       postExistQuestion(subjectId, response.data)
//     }
//   } catch (e) {
//     throw new Error(e)
//   }
// }

// const postExistQuestion = async (subjectId, data) => {
//   try {
//     if (data.count === 0) {
//       console.log(data)
//       return data
//     } else {
//       const response = await request.get(
//         `/subjects/${subjectId}/questions/?limit=${data.count}`
//       )
//       if (response.status === 200) {
//         console.log(response.data)
//         return response.data
//       }
//     }
//   } catch (e) {
//     throw new Error(e)
//   }
// }

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
