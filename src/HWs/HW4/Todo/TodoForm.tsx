import { Input } from './Todo'
interface Props {
  handleChange: (any) => void
  items: any
  handleSubmit: (any) => void
  currentItem: any
  editing: boolean
}

const TodoInput = (props: Props) => {
  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        <Input
          //@ts-expect-error

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
