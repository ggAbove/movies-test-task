import detail from '@/public/json/detail.json'

export default defineEventHandler(async (event) => {
  return {
    ...detail,
    rating: detail.rating.toFixed(1),
    genre: detail.genre.slice(0, 1).toUpperCase() + detail.genre.slice(1)
  }
})
