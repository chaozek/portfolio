import { Button, CounterWrapper } from '../../HW3/Counter'
import { H1 } from '../../HW6/Pexeso/CardStack'
import {
  dec,
  dec_2,
  div,
  increment1,
  increment2,
  pow,
  pow_2,
  reset,
  sqrt,
} from './components/Counter'
import { useDispatch, useSelector } from 'react-redux'
import React from 'react'
import styled from 'styled-components'
const getCounter = state => state.counter.value
const getError = state => state.counter.error

export const Redux = () => {
  const value = useSelector(getCounter)
  const error = useSelector(getError)
  const dispatch = useDispatch()

  return (
    <div>
      <H1>Redux Counter App</H1>

      <Count>{error ? <p> {error} </p> : value}</Count>
      <CounterWrapper>
        <Button onClick={() => dispatch(increment1())}>ADD 1</Button>
        <Button onClick={() => dispatch(increment2())}>ADD 2</Button>
        <Button onClick={() => dispatch(pow_2())}>POW 2</Button>
        <Button onClick={() => dispatch(pow())}>POW</Button>
        <Button onClick={() => dispatch(dec())}>DECREMENT 1</Button>
        <Button onClick={() => dispatch(dec_2())}>DECREMENT 2</Button>
        <Button onClick={() => dispatch(div())}>DIVIDE</Button>
        <Button onClick={() => dispatch(sqrt())}>SQRT</Button>
        <Button onClick={() => dispatch(reset())}>RESET</Button>
      </CounterWrapper>
    </div>
  )
}
const Count = styled.div`
  text-align: center;
  font-size: 40px;
  background-color: #000000;
  border-radius: 5px;
  max-width: 200px;
  color: white;
  vertical-align: top;
  margin: 0 auto;
`
