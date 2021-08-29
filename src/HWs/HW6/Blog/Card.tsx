import { Button, Card, CardBody, CardSubtitle, CardTitle } from 'reactstrap'
import { Link } from 'react-router-dom'
import marked from 'marked'
import styled from 'styled-components'

const MAX_LENGHT = 200
type Props = {
  text: string | string[]
  header: string
  date: string
  UrlSlug: string
}
function CardArticle(props: Props) {
  const markdown = marked(props.text)
  const trimmedString = markdown.lenght === 0 ? 0 : markdown.substr(0, MAX_LENGHT)
  return (
    <div style={{ padding: 0 }}>
      <SingleCard className='mt-5'>
        <SinglePostUrl to={`/article/${props.UrlSlug}`}>
          <CardBody>
            <CardTitle tag='h1'>{props.header}</CardTitle>
            <CardSubtitle tag='h6' className='mb-2 text-muted'>
              {props.date}
            </CardSubtitle>
            <hr />
            <div
              dangerouslySetInnerHTML={{
                __html: trimmedString,
              }}
            ></div>
          </CardBody>
        </SinglePostUrl>
      </SingleCard>
    </div>
  )
}

export default CardArticle

const SinglePostUrl = styled(Link)`
  color: black;
  h1 {
    font-weight: bold;
  }

  :hover {
    color: black;
    h1 {
      color: #f43d5f;
    }
  }
`
const SingleCard = styled(Card)`
  border: none;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
`
