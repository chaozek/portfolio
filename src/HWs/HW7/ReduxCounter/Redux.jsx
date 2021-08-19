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
const getCounter = state => state.counter.value
const getError = state => state.counter.error

export const Redux = () => {
  const value = useSelector(getCounter)
  const error = useSelector(getError)
  const dispatch = useDispatch()

  return (
    <div>
      <h2>
        {error ? <button onClick={() => dispatch(reset())}>{error}, RESET please</button> : value}
      </h2>
      <button onClick={() => dispatch(increment1())}>ADD_1</button>
      <button onClick={() => dispatch(increment2())}>ADD_2</button>
      <button onClick={() => dispatch(pow_2())}>POW_2</button>
      <button onClick={() => dispatch(pow())}>POW_POW</button>
      <button onClick={() => dispatch(dec())}>DEC_1</button>
      <button onClick={() => dispatch(dec_2())}>DEC_2</button>
      <button onClick={() => dispatch(div())}>DIV</button>
      <button onClick={() => dispatch(sqrt())}>SQRT</button>
      <button onClick={() => dispatch(reset())}>RESET</button>
    </div>
  )
}
