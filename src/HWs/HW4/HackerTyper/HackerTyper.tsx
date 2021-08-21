import { Component } from 'react'
import { code } from './data'
import styled, { createGlobalStyle, keyframes } from 'styled-components'
interface IState {
  cut: number
  data: string
  cursor: number
}
interface IProps {}
class HackerTyper extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)
    this.state = {
      cut: 3,
      data: code,
      cursor: 1,
    }
  }
  elem = document.createElement('div')

  handleKey = () => {
    this.setState({
      data: code.slice(0, this.state.cut),
    })
    this.setState(prevState => ({
      cut: prevState.cut + Math.floor(Math.random() * 5 + 1),
    }))
  }

  componentDidMount() {
    document.addEventListener('keypress', this.handleKey)
    document.body.style.backgroundColor = 'black'
    this.setState({ data: '' })
  }
  componentWillUnmount() {
    console.log('UNMOUNTED')
    document.body.style.backgroundColor = '#FBFBFB'
  }
  componentDidUpdate() {
    this.scrollToBottom()
    if (this.state.cut >= code.length) {
      this.setState({ cut: 3 })
    }
    setInterval(() => {
      if (this.state.cursor === 1) {
        this.setState({ cursor: 0 })
      }
    }, 1000)
  }
  scrollToBottom() {
    this.elem.scrollIntoView({ behavior: 'smooth' })
  }
  render() {
    return (
      <Div className='main' style={{ whiteSpace: 'pre-wrap' }} onKeyPress={e => this.handleKey()}>
        {this.state.data} <AnimatedSpan>|</AnimatedSpan>
        <div
          ref={(elem: HTMLDivElement) => {
            this.elem = elem
          }}
        />
      </Div>
    )
  }
}

export default HackerTyper

function blinking() {
  return keyframes`
    50% {
      opacity: 0;
    }
  `
}
const AnimatedSpan = styled.span`
  animation: ${blinking} 1s linear infinite;
`

const GlobalStyle = createGlobalStyle`
  * {
    @import url('https://fonts.googleapis.com/css2?family=VT323&display=swap');

  }
`

const Div = styled.div`
  color: lightgreen;
  text-shadow: 0px 0px 3px white;
  line-height: 1rem;
  margin: 2rem 1rem;
  font-family: 'VT323', monospace;
`
