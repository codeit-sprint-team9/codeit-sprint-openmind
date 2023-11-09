const BASE_URL = 'https://learn.codeit.kr/api'

export async function getReviews({ offset = 0, limit = 3 }) {
  const query = `offset=${offset}&limit=${limit}`
  const response = await fetch(`${BASE_URL}/film-reviews?${query}`)
  if (!response.ok) {
    throw new Error('리뷰 못불러옴')
  }
  const body = await response.json()
  return body
}

export async function getAllReviews() {
  const response = await fetch(`${BASE_URL}/film-reviews`)
  if (!response.ok) {
    throw new Error('리뷰 못불러옴')
  }
  const body = await response.json()
  return body
}
