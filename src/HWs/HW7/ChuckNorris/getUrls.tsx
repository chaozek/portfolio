export const getRandomJokeUrl = () => `https://api.chucknorris.io/jokes/random`

export const getRandomJokeByCategory = (url: { category: string }) =>
  `https://api.chucknorris.io/jokes/random?category=${url.category}`

export const getAllCategories = () => `https://api.chucknorris.io/jokes/categories`
