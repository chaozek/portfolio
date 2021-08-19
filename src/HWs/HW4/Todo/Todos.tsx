import SingleTodo from './SingleTodo'
interface Props {
  check: (id: number | null) => void
  handleEdit: (e: any, id: number | null) => void
  handleChange: (any) => void
  changeEdit: (id: number | null, text: string) => void
  handleDelete: (any) => void
  items: any
}

const Todos = (props: Props) => {
  return (
    <div>
      {props.items.map(item => {
        return (
          <SingleTodo
            handleDelete={props.handleDelete}
            handleEdit={props.handleEdit}
            key={item.id}
            id={item.id}
            text={item.text}
            editing={item.editing}
            changeEdit={props.changeEdit}
            handleChange={props.handleChange}
            check={props.check}
            checked={item.checked}
          />
        )
      })}
    </div>
  )
}

export default Todos
