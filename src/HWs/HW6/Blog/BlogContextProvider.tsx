import { FunctionComponent, createContext, useEffect, useState } from 'react'
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
//this is just for future reference or update - transfer slug to browser readable format
function slugify(string) {
  return string
    .toString()
    .trim()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '')
}
const contextDefaultValues: BlogContextState = {
  starterArticles: [
    {
      id: 1,
      text: [
        '### řádek 1',
        'řádek 2',
        '![title](https://community-cdn-digitalocean-com.global.ssl.fastly.net/variants/47T98WdiWvPzKEVDFhPqtUKv/035575f2985fe451d86e717d73691e533a1a00545d7230900ed786341dc3c882)',
      ].join('\n\n'),
      header: 'Article 1',
      //no func for date - gets new date everytime, its here just for design consistency
      date: new Date().toLocaleString(),
      UrlSlug: 'article-1',
    },
    {
      id: 2,
      text: [
        '### řádek 1',
        'řádek 2',
        '![title](https://community-cdn-digitalocean-com.global.ssl.fastly.net/variants/47T98WdiWvPzKEVDFhPqtUKv/035575f2985fe451d86e717d73691e533a1a00545d7230900ed786341dc3c882)',
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
  const [articleMemory, setArticleMemory] = useLocalStorage('articles', articles)
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
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
