import styled from 'styled-components'

interface Props {
  handleChange: (any) => void
  items: {
    text: string
    id: number | null
    checked: boolean
    editing: boolean
  }[]
  handleSubmit: (e) => void
  currentItem: string
  editing: boolean
}

const TodoInput = (props: Props) => {
  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        <Input
          disabled={props.editing ? 'disabled' : ''}
          required
          value={props.editing ? 'Editace' : props.currentItem}
          type='text'
          onChange={props.handleChange}
          placeholder={props.items.length === 0 ? 'Nothing found, Add Something' : 'Add Something'}
        />
      </form>
    </div>
  )
}

export default TodoInput
type InputProps = {
  disabled: boolean | any
}
const Input = styled.input<InputProps>`
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  border: none;
  width: 100%;
  padding: 0.8rem;
  cursor: pointer;
`
