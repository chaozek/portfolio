import { BlogContext } from './BlogContextProvider'
import { useContext } from 'react'
import Card from './Card'
import NavBar from './NavBar'
function HomePage() {
  const { articles } = useContext(BlogContext)

  return (
    <div className='mb-5'>
      <NavBar />

      {articles.map(article => {
        return <Card key={article.id} {...article} />
      })}
    </div>
  )
}

export default HomePage
