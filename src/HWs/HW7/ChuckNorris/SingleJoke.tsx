import { ErrorDiv } from './ChuckMainPage'
import { H1, Loading } from './ChuckMainPage'
import { Joke, JokeArray } from './ChuckMainPage'
import { Link } from 'react-router-dom'
import { RandomJoke } from './RandomJoke'
import { Route, BrowserRouter as Router, Switch, useParams } from 'react-router-dom'
import { findAndRemoveDuplicite } from './arrayUtils'
import { getRandomJokeByCategory } from './getUrls'
import { useEffect, useState } from 'react'
import loadingGIF from './loading-buffering.gif'
import styled from 'styled-components'
const JOKE_COUNT = 2
export const SingleJoke = () => {
  const slug = useParams()
  const [loading, setLoading] = useState(false)
  const [jokes, setJokes] = useState<JokeArray | []>([])
  const [error, setError] = useState('')

  const urls = Array.from({ length: JOKE_COUNT }, () =>
    getRandomJokeByCategory({ category: slug.category })
  )
  useEffect(() => {
    const fetchSingleCategory = async (urls: string[]) => {
      try {
        setLoading(true)
        const res = await Promise.all(urls.map(u => fetch(u)))
        if (!res[0].ok) throw new Error('fetch error')
        const jsons: JokeArray = await Promise.all(res.map(r => r.json()))
        const cleanArr = findAndRemoveDuplicite(jsons)
        setJokes(cleanArr)
      } catch (error) {
        setError(error.message)
      } finally {
        setLoading(false)
      }
    }
    fetchSingleCategory(urls)
  }, [])
  return (
    <div>
      <H1>{slug.category}</H1>
      {error ? <ErrorDiv>{error}</ErrorDiv> : ''}
      {loading ? (
        <Loading src={loadingGIF} alt='loading' />
      ) : (
        jokes?.map(joke => (
          <RandomJoke key={joke.id} id={joke.id} value={joke.value} icon={joke.icon_url} />
        ))
      )}

      <Link to='/chuck'>
        <P>Back To HomePage</P>
      </Link>
    </div>
  )
}
const P = styled.p`
  margin-top: 2rem;
  :hover {
    color: #222233;
  }
`
