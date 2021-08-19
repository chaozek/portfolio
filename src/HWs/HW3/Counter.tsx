import React, { Component } from 'react'
import theme from './CounterTheme'
const { primary, white } = theme

export default class Counter extends Component<{}, { count: number }> {
  constructor(props) {
    super(props)
    this.state = {
      count: 0,
    }
  }

  styles = {
    button: {
      backgroundColor: primary,
      margin: '5px',
      border: 'none',
      padding: '5px 10px',
      color: white,
    },
    h1: { color: primary, fontSize: '50px' },
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
      <div style={{ textTransform: 'uppercase', textAlign: 'center' }}>
        <h1 style={{ textTransform: 'uppercase', textAlign: 'center' }}>14.7. Čtvrté setkání</h1>
        <h1 style={this.styles.h1}>{this.state.count}</h1>
        <button style={this.styles.button} onClick={this.decrement}>
          Decrement
        </button>
        <button style={this.styles.button} onClick={this.increment}>
          Increment
        </button>
        <button
          style={{ ...this.styles.button, display: 'block', margin: '0 auto' }}
          onClick={() => this.setState({ count: 0 })}
        >
          Reset
        </button>
      </div>
    )
  }
}
