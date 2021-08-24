import { H1 } from '../HW6/Pexeso/CardStack'
import Board from './board_square/GameBoard'
import styled from 'styled-components'
interface MyProps {
  arrayHistory: { squares: (null | 'X' | 'O')[] }[]
  stepNumber: number
  winner: {
    line: number[]
    side: string
  }
  xIsNext: boolean
  handleClick: () => void
}
export default function GameView(props: MyProps) {
  const current = props.arrayHistory[props.stepNumber]
  return (
    <>
      <H1>Tic-Tac-Toe</H1>
      <Game>
        <Board squares={current.squares} winLine={props.winner.line} onClick={props.handleClick} />
        <p>{props.winner.side ? 'The Winner is: ' + props.winner.side : ''}</p>
      </Game>
    </>
  )
}
const Game = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`
