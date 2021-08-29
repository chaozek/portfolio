import { BlogContext } from './BlogContextProvider'
import { BlogPadding } from './HomePage'
import { Button } from 'reactstrap'
import { Link } from 'react-router-dom'
import { useContext, useEffect } from 'react'
import NavBar from './NavBar'
import marked from 'marked'
import styled from 'styled-components'
type Props = {
  match: { params }
}
function SinglePost(props: Props) {
  const getId = props.match.params.articleSlug
  const { articles } = useContext(BlogContext)
  const getData = articles.find(p => p.UrlSlug === getId)
  const markdown = marked(getData?.text)

  return (
    <>
      <NavBar />
      <BlogPadding className='mt-5'>
        <h1>{getData?.header}</h1>
        <hr />
        <BlogPost
          dangerouslySetInnerHTML={{
            __html: markdown,
          }}
        ></BlogPost>
        <Link to='/blog'>
          <Button color='primary'>Back to all articles</Button>{' '}
        </Link>
      </BlogPadding>
    </>
  )
}
export default SinglePost
const BlogPost = styled.div`
  max-width: 500px;
`
