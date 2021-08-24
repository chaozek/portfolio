import { Component } from 'react'
import { H1 } from '../../HW6/Pexeso/CardStack'
import { TodoBlock, TodoWrapper } from './Todo'
import Input from './TodoForm'
import Todos from './Todos'
interface IState {
  items: {
    text: string
    id: number | null
    checked: boolean
    editing: boolean
  }[]
  currentItem: {
    text: string
    id: null | number
    checked: boolean
    editing: boolean
  }
  editing: boolean
}
interface IProps {}
class Todo extends Component<IProps, IState> {
  constructor(props) {
    super(props)

    this.state = {
      items: [
        {
          text: 'Starter Task1 | DELETE ME WITH [X] BUTTON',
          id: 1,
          checked: false,
          editing: false,
        },
        {
          text: 'Starter Task2 | CLICK ON ME TO MAKE ME CHECKED',
          id: 2,
          checked: false,
          editing: false,
        },
        {
          text: 'Starter Task3 | CLICK ON [EDIT] BUTTON TO EDIT ME',
          id: 3,
          checked: false,
          editing: false,
        },
      ],
      currentItem: {
        text: '',
        id: null,
        checked: false,
        editing: false,
      },
      editing: false,
    }
  }
  handleSubmit = (e: any) => {
    e.preventDefault()
    this.setState({
      items: [...this.state.items, this.state.currentItem],
      currentItem: { text: '', id: null, checked: false, editing: false },
    })
  }
  handleChange = (e: any) => {
    this.setState({
      currentItem: {
        text: e.target.value,
        id: Math.floor(Math.random() * 999999),
        checked: false,
        editing: false,
      },
    })
  }
  handleDelete = (id: any) => {
    this.setState({
      items: this.state.items.filter(el => {
        return el.id !== id
      }),
    })
  }
  changeEdit = (id, text) => {
    const updated = this.state.items.map(todo => {
      if (todo.id === id) {
        todo.editing = !todo.editing
      }
      return todo
    })
    this.setState({
      items: updated,
      editing: !this.state.editing,
      currentItem: {
        text: text,
        id,
        editing: true,
        checked: false,
      },
    })
  }
  check = id => {
    this.setState(prevState => ({
      items: prevState.items.map(todo => {
        if (todo.id === id) {
          return { ...todo, checked: !todo.checked }
        }
        return todo
      }),
    }))
  }

  handleEdit = (e, id) => {
    e.preventDefault()

    this.setState(prevState => ({
      items: prevState.items.map(i => {
        if (i.id === id) {
          return { ...i, checked: false, editing: false, text: this.state.currentItem.text }
        }
        return i
      }),
    }))

    this.setState(prevState => ({
      currentItem: {
        ...prevState.currentItem,
        text: '',
        id: id,
        checked: false,
        editing: false,
      },
      editing: !prevState.editing,
    }))
  }
  render() {
    return (
      <>
        <H1>To Do</H1>

        <TodoWrapper>
          <TodoBlock>
            <Input
              currentItem={this.state.currentItem.text}
              handleSubmit={this.handleSubmit}
              handleChange={this.handleChange}
              editing={this.state.editing}
              items={this.state.items}
            />
            <Todos
              handleDelete={this.handleDelete}
              handleEdit={this.handleEdit}
              items={this.state.items}
              changeEdit={this.changeEdit}
              handleChange={this.handleChange}
              check={this.check}
            />
          </TodoBlock>
        </TodoWrapper>
      </>
    )
  }
}

export default Todo
