import movies from '@/public/json/movies.json'
export default defineEventHandler(async (event) => {
  const format = movies.items.map(item => {
    return {
      ...item,
      rating: item.rating.toFixed(1),
      genre: item.genre.slice(0, 1).toUpperCase() + item.genre.slice(1)
    }
  })
  return format
})
