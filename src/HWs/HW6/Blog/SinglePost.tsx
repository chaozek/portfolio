import { BlogContext } from './BlogContextProvider'
import { Button } from 'reactstrap'
import { Link } from 'react-router-dom'
import { useContext, useEffect } from 'react'
import NavBar from './NavBar'
import marked from 'marked'
type Props = {
  match: { params }
}
function SinglePost(props: Props) {
  const getId = props.match.params.articleSlug
  const { articles } = useContext(BlogContext)
  const getData = articles.find(p => p.UrlSlug === getId)
  const markdown = marked(getData?.text)

  useEffect(() => {
    const localData = localStorage.getItem('articles')
  }, [])
  return (
    <div className='mb-5'>
      <NavBar />
      <h1>{getData?.header}</h1>
      <div
        dangerouslySetInnerHTML={{
          __html: markdown,
        }}
      ></div>
      <Link to='/blog'>
        <Button color='primary'>Back to all articles</Button>{' '}
      </Link>
    </div>
  )
}
export default SinglePost
