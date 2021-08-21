import { Button, Card, CardBody, CardSubtitle, CardTitle } from 'reactstrap'
import { Link } from 'react-router-dom'
import marked from 'marked'

const MAX_LENGHT = 200
type Props = {
  text: string | string[]
  header: string
  date: string
  UrlSlug: string
}
function CardArticle(props: Props) {
  const markdown = marked(props.text)
  const trimmedString = markdown.substr(0, MAX_LENGHT)
  return (
    <div>
      <Card className='mt-5'>
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

          <Link to={`/article/${props.UrlSlug}`}>
            <Button>Detail článku</Button>
          </Link>
        </CardBody>
      </Card>
    </div>
  )
}

export default CardArticle
