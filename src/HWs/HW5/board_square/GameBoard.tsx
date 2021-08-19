import { GRID_SIZE } from '../WinLogic'
import React from 'react'
import Square from './BoardSquare'
import styled from 'styled-components'
interface Iprops {
  squares: (null | 'X' | 'O')[]
  winLine: number[]
  onClick: (string) => void
}
interface Istate {}
export default class Board extends React.Component<Iprops, Istate> {
  renderSquare(i: number) {
    const tileVal = this.props.squares[i]
    let player = ''
    if (tileVal) {
      player = tileVal === 'X' ? 'x' : 'o'
      if (this.props.winLine.includes(i)) {
        player = 'win'
      }
    }
    return (
      <Square
        key={i}
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
        player={player}
      />
    )
  }

  render() {
    interface Props {
      index: number
    }

    const Row = (props: Props) => {
      const squareRow: JSX.Element[] = []
      const i = props.index
      for (let j = i * GRID_SIZE; j < i * GRID_SIZE + GRID_SIZE; j++) {
        squareRow.push(this.renderSquare(j))
      }
      return <div className='board-row'>{squareRow}</div>
    }
    const Rows: JSX.Element[] = []

    Array.from({ length: GRID_SIZE }, (v, i) => Rows.push(<Row index={i} key={i} />))

    return <GameBoard>{Rows}</GameBoard>
  }
}

const GameBoard = styled.div`
  display: inline-block;
  margin: 20px;
  width: 330px;
`
