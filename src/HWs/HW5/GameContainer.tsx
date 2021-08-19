import Game from './GameView'
import withContext from './ContextAPI/Context_HOC'
interface MyProps {
  context: {
    xIsNext: boolean
    stepNumber: number
    arrayHistory: { squares: (null | 'X' | 'O')[] }[]
    winner: { line: number[]; side: string }
    handleClick: () => void
  }
  xIsNext: boolean
  winner: string
  arrayHistory: { squares: (null | 'X' | 'O')[] }[]
  type: string
}

function GameContainer(props: MyProps) {
  return (
    <Game
      winner={props.context.winner}
      arrayHistory={props.context.arrayHistory}
      stepNumber={props.context.stepNumber}
      xIsNext={props.context.xIsNext}
      handleClick={props.context.handleClick}
    />
  )
}
export default withContext(GameContainer)
