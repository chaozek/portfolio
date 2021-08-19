import { BlogContext } from './BlogContextProvider'
import { Button, Col, Form, FormGroup, FormText, Input, Label } from 'reactstrap'
import { useContext } from 'react'
import NavBar from './NavBar'

function BlogForm() {
  const { handleSubmit, handleChange, newArticle } = useContext(BlogContext)
  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <NavBar />

        <FormGroup row>
          <Label for='exampleEmail' sm={2}>
            Slug
          </Label>
          <Col sm={10}>
            <Input
              required
              type='text'
              name='UrlSlug'
              value={newArticle.UrlSlug}
              placeholder='Slug'
              onChange={e => {
                handleChange(e)
              }}
            />
          </Col>
        </FormGroup>
        <FormGroup row className='mt-3'>
          <Label for='examplePassword' sm={2}>
            Header
          </Label>
          <Col sm={10}>
            <Input
              type='text'
              required
              name='header'
              value={newArticle.header}
              placeholder='Nadpis'
              onChange={e => {
                handleChange(e)
              }}
            />
          </Col>
        </FormGroup>
        <FormGroup row className='mt-3'>
          <Label for='exampleText' sm={2}>
            Článek
          </Label>
          <Col sm={10}>
            <Input
              type='textarea'
              required
              name='text'
              value={newArticle.text}
              placeholder='#Markdown'
              onChange={e => {
                handleChange(e)
              }}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Col sm={10}>
            <FormText color='muted'></FormText>
          </Col>
        </FormGroup>

        <FormGroup row>
          <Col sm={{ size: 10 }}></Col>
        </FormGroup>
        <FormGroup check row>
          <Col sm={{ size: 10, offset: 2 }}>
            <Button>Odeslat</Button>
          </Col>
        </FormGroup>
      </Form>
    </div>
  )
}

export default BlogForm
