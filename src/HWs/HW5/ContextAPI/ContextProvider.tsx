import { FIELD_LENGTH } from '../WinLogic'
import { calculateWinner, computeWinLines } from '../WinLogic'
import React from 'react'

interface MyProps {}
interface MyState {
  arrayHistory: { squares: (null | 'X' | 'O')[] }[]
  stepNumber: number
  xIsNext: boolean
  winner: {
    side: null | string
    line: number[]
  }
  player: string
}
interface State {
  handleClick: (i: number) => void
}
type Combined = State & MyState

export const AppContext = React.createContext<Combined>(null as any)

const winLines = computeWinLines()

export default class ContextProvider extends React.Component<MyProps, MyState> {
  constructor(props: MyProps) {
    super(props)

    this.state = {
      arrayHistory: [
        {
          squares: Array(FIELD_LENGTH).fill(null),
        },
      ],
      stepNumber: 0,
      xIsNext: true,
      winner: { side: null, line: [] },
      player: '',
    }
  }
  handleClick = (i: number) => {
    const arrayHistory = this.state.arrayHistory.slice(0, this.state.stepNumber + 1)
    const current = arrayHistory[arrayHistory.length - 1]
    const squares = current.squares.slice()
    if (this.state.winner.side || squares[i]) {
      return
    }
    const side = this.state.xIsNext ? 'X' : 'O'
    squares[i] = side
    this.setState(prevState => ({
      arrayHistory: arrayHistory.concat({
        squares: squares,
      }),
      stepNumber: arrayHistory.length,
      xIsNext: !prevState.xIsNext,

      winner: calculateWinner(squares, winLines),
    }))
  }

  render() {
    return (
      <AppContext.Provider value={{ ...this.state, handleClick: this.handleClick }}>
        {this.props.children}
      </AppContext.Provider>
    )
  }
}
