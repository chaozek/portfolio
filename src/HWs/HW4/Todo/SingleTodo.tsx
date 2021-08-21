import { Delete, Edit, Input, Left, Right, SingleTodoWrapper } from './Todo'
import React from 'react'
import styled from 'styled-components'

export type Props = {
  checked: boolean
  id: number | null
  check: (id: number | null) => void
  editing: boolean
  handleEdit: (
    e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement, MouseEvent>,
    id: number | null
  ) => void
  text: string
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  changeEdit: (id: number | null, text: string) => void
  handleDelete: (number) => void
}
const SingleTodo = (props: Props) => {
  console.log(props.checked)
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
          <p
            style={{
              textDecoration: props.checked ? 'line-through' : 'none',
              margin: '0',
            }}
          >
            {props.text}
          </p>
        )}
      </Left>
      <Right>
        {props.editing ? (
          <Edit
            onClick={e => {
              props.handleEdit(e, props.id)
            }}
          >
            Save
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
