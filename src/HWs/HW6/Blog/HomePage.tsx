import { BlogContext } from './BlogContextProvider'
import { useContext } from 'react'
import Card from './Card'
import NavBar from './NavBar'
import styled from 'styled-components'

function HomePage() {
  const { articles } = useContext(BlogContext)

  return (
    <div>
      <NavBar />
      <BlogPadding>
        {articles.map(article => {
          return <Card key={article.id} {...article} />
        })}
      </BlogPadding>
    </div>
  )
}

export default HomePage
export const BlogPadding = styled.div`
  padding: 0rem 1rem;
`
