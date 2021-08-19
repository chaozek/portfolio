import { Link } from 'react-router-dom'
import { RandomJoke } from './RandomJoke'
import { findAndRemoveDuplicite } from './arrayUtils'
import { getAllCategories, getRandomJokeUrl } from './getUrls'
import { useEffect, useState } from 'react'
import StyledComponent from 'styled-components'
import loadingGIF from './loading-buffering.gif'
import styled from 'styled-components'
//generating only 2 jokes instead of 20 cause of possible fetch limit/ban, works fine with 20+
const JOKE_COUNT = 2
export type JokeArray = Joke[]
export type Joke = {
  categories: string[]
  created_at: string
  icon_url: string
  id: string
  updated_at: string
  url: string
  value: string
}
export const Chuck = () => {
  const [jokes, setJokes] = useState<JokeArray | []>([])
  const [caterogies, setCategories] = useState<string[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const urls = Array.from({ length: JOKE_COUNT }, () => {
    getRandomJokeUrl()
  })
  useEffect(() => {
    const fetchAll = async (urls: string[] | void[]) => {
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
    const fetchCategories = async () => {
      try {
        setLoading(true)
        const res = await fetch(getAllCategories())
        if (!res.ok) throw new Error('fetch error')
        const json = await res.json()
        setCategories(json)
      } catch (error) {
        setError(error.message)
        console.error(error.message)
      } finally {
        setLoading(false)
      }
    }
    fetchAll(urls)
    fetchCategories()
  }, [])

  return (
    <>
      <H1>Chuck App</H1>
      {error ? <ErrorDiv>{error}</ErrorDiv> : ''}
      {loading ? (
        <Loading src={loadingGIF} alt='loading' />
      ) : (
        jokes.map(joke => {
          return <RandomJoke key={joke.id} id={joke.id} value={joke.value} icon={joke.icon_url} />
        })
      )}
      <hr />
      <H1>Categories</H1>
      <Ul>
        {loading && <Loading />}
        {caterogies?.map((category, index) => {
          return (
            <Li key={index}>
              <Link to={`/jokes/${category}`}>{category}</Link>
            </Li>
          )
        })}
      </Ul>
    </>
  )
}
export const Loading = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
`

export const H1 = styled.h1`
  text-align: center;
  font-weight: bolder;
  font-size: 40px;
  padding: 20px;
`
const Li = styled.li`
  list-style: none;
  margin: 1rem 2rem;
  width: 55px;
`
const Ul = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`
export const ErrorDiv = styled.p`
  background-color: red;
  color: white;
`
