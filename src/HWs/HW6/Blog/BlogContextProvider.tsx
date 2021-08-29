import { FunctionComponent, createContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'
import useLocalStorage from './useLocalStorage'

type BlogContextState = {
  starterArticles: {
    id: number
    text: string | string[]
    header: string
    date: string
    UrlSlug: string
  }[]
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  newArticle: { id: number; text: string; header: string; date: string; UrlSlug: string }
  articles: { id: number; text: string | string[]; header: string; date: string; UrlSlug: string }[]
}
function slugify(string) {
  return string
    .toString()
    .trim()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')
}
const contextDefaultValues: BlogContextState = {
  starterArticles: [
    {
      id: 1,
      text: [
        '### řádek 1',
        'řádek 2',
        '<img src="https://cdn.shopify.com/s/files/1/1061/1924/products/See_No_Evil_Monkey_Emoji_grande.png?v=1571606065" width="200" height="200">',
      ].join('\n\n'),
      header: 'Article 1',
      date: new Date().toLocaleString(),
      UrlSlug: 'article-1',
    },
    {
      id: 2,
      text: [
        '### řádek 1',
        'řádek 2',
        '<img src="https://cdn.shopify.com/s/files/1/1061/1924/products/See_No_Evil_Monkey_Emoji_grande.png?v=1571606065" width="200" height="200">',
      ].join('\n\n'),
      header: 'Article 2',
      date: new Date().toLocaleString(),
      UrlSlug: 'article-2',
    },
  ],
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => {},
  handleChange: (e: React.FormEvent<HTMLInputElement>) => {},
  newArticle: {
    id: 0,
    text: '',
    header: '',
    date: new Date().toLocaleString(),
    UrlSlug: '',
  },
  articles: [
    {
      id: 0,
      text: '',
      header: '',
      date: new Date().toLocaleString(),
      UrlSlug: '',
    },
  ],
}

export const BlogContext = createContext<BlogContextState>(contextDefaultValues)

type BlogProps = {}
const BlogProvider: FunctionComponent<BlogProps> = ({ children }) => {
  const [articles, setArticles] = useLocalStorage('articles', contextDefaultValues.starterArticles)
  const [newArticle, setNewArticle] = useState(contextDefaultValues.newArticle)
  let history = useHistory()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    history.push('/blog')

    setArticles(p => [...p, newArticle])
    setNewArticle({
      id: 0,
      text: '',
      header: '',
      date: new Date().toLocaleString(),
      UrlSlug: '',
    })
  }
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value
    let name = e.target.name
    setNewArticle(p => {
      return {
        ...p,
        [name]: value,
        id: uuidv4(),
      }
    })
    setNewArticle(p => {
      return {
        ...p,
        UrlSlug: slugify(p.UrlSlug),
      }
    })
  }
  return (
    <BlogContext.Provider
      value={{
        handleSubmit,
        handleChange,
        starterArticles: contextDefaultValues.starterArticles,
        newArticle,
        articles,
      }}
    >
      {children}
    </BlogContext.Provider>
  )
}

export default BlogProvider
