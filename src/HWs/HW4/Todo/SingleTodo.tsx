import { Delete, Edit, Input, Left, Right, SingleTodoWrapper } from './Todo'
import React from 'react'

interface Props {
  checked: boolean
  id: number | null
  check: (id: number | null) => void
  editing: boolean
  handleEdit: (e: any, id: number | null) => void
  text: string
  handleChange: (any) => void
  changeEdit: (id: number | null, text: string) => void
  handleDelete: (any) => void
}
const SingleTodo = (props: Props) => {
  const style = { textDecoration: 'line-through' }
  return (
    <SingleTodoWrapper>
      <Left
        onClick={() => {
          props.check(props.id)
        }}
      >
        {props.editing ? (
          <form
            onSubmit={e => {
              props.handleEdit(e, props.id)
            }}
          >
            <Input
              required
              defaultValue={props.text}
              type='text'
              name='text'
              onChange={props.handleChange}
            />
          </form>
        ) : (
          <p>{props.text}</p>
        )}
      </Left>
      <Right>
        {props.editing ? (
          <Edit
            onClick={e => {
              props.handleEdit(e, props.id)
            }}
          >
            SAVE
          </Edit>
        ) : (
          <Edit
            onClick={() => {
              props.changeEdit(props.id, props.text)
            }}
          >
            Edit
          </Edit>
        )}
        <Delete
          onClick={() => {
            props.handleDelete(props.id)
          }}
        >
          X
        </Delete>
      </Right>
    </SingleTodoWrapper>
  )
}

export default SingleTodo
