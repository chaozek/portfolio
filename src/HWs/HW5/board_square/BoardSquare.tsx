import { theme } from '../css/TicTacToe'
import styled from 'styled-components'
type Props = {
  player: string
  value: null | 'X' | 'O'
  onClick: (number) => void
}
export default function Square(props: Props) {
  return (
    <Button player={props.player} onMouseDown={props.onClick} onTouchStart={props.onClick}>
      {props.value}
    </Button>
  )
}

interface ButtonProps {
  player: string
}
const Button = styled.button<ButtonProps>`
  background: ${theme.white};
  border: 1px solid ${theme.gray};
  float: left;
  font-size: 24px;
  font-weight: bold;
  line-height: 34px;
  height: 34px;
  margin-right: -1px;
  margin-top: -1px;
  padding: 0;
  text-align: center;
  width: 34px;
  color: ${props => (props.player === 'x' ? `${theme.green}` : `${theme.blue}`)};
`
