import { Component } from 'react'
import styled from 'styled-components'

export default class Counter extends Component<{}, { count: number }> {
  constructor(props) {
    super(props)
    this.state = {
      count: 0,
    }
  }

  increment = () => {
    this.setState(prevState => {
      return { count: prevState.count + 1 }
    })
  }
  decrement = () => {
    this.setState(prevState => {
      return { count: prevState.count - 1 }
    })
  }
  render() {
    return (
      <div>
        <H1>PrevState Counter App</H1>
        <Count>{this.state.count}</Count>
        <CounterWrapper>
          <Button onClick={this.decrement}>Decrement</Button>
          <Button onClick={this.increment}>Increment</Button>
          <Button onClick={() => this.setState({ count: 0 })}>Reset</Button>
        </CounterWrapper>
      </div>
    )
  }
}

export const CounterWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`
export const Button = styled.button`
  border: none;
  padding: 0.3rem 0.5rem;
  margin: 0.5rem 1rem;
  transition: all 300ms ease-in-out;
  border-radius: 5px;
  width: 130px;
  &:hover {
    transform: scale(1.3);
  }
`
export const H1 = styled.h1`
  text-align: center;
  font-weight: bolder;
  font-size: 40px;
`
export const Count = styled.div`
  text-align: center;
  font-size: 40px;
  background-color: #000000;
  border-radius: 5px;

  color: white;
  width: 50px;
  vertical-align: top;
  margin: 0 auto;
`
