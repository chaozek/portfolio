import {
  DECREMENT,
  DEC_2,
  DIV,
  INCREMENT1,
  INCREMENT2,
  POW,
  POW_2,
  RESET,
  SQRT,
} from '../actionTypes'
import { combineReducers, createStore } from 'redux'
export const increment1 = () => ({
  type: INCREMENT1,
})
export const increment2 = () => ({
  type: INCREMENT2,
})
export const dec = () => ({
  type: DECREMENT,
})
export const pow = () => ({
  type: POW,
})
export const reset = () => ({
  type: RESET,
})
export const div = () => ({
  type: DIV,
})
export const pow_2 = () => ({
  type: POW_2,
})
export const dec_2 = () => ({
  type: DEC_2,
})
export const sqrt = () => ({
  type: SQRT,
})

export const initialState = {
  value: 0,
  error: null,
}
function countReducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT1':
      return { ...state, value: state.value + 1 }
    case 'INCREMENT2':
      return { ...state, value: state.value + 2 }
    case 'DECREMENT':
      return { ...state, value: state.value - 1 }
    case 'POW':
      return { ...state, value: Math.floor(Math.pow(state.value, state.value)) }
    case 'RESET':
      return { value: (state.value = 0) }
    case 'DIV':
      if (state.value <= 0) {
        return {
          ...state,
          error: `Number cannot be ${state.value}, value should be higher than 0 `,
        }
      }
      return { ...state, value: state.value / state.value }
    case 'POW_2':
      return { ...state, value: Math.floor(Math.pow(state.value, 2)) }
    case 'DEC_2':
      return { ...state, value: state.value - 2 }
    case 'SQRT':
      if (state.value < 0) {
        return { ...state, error: 'Number must be > 0' }
      }
      return { ...state, value: Math.sqrt(state.value) }

    default:
      return state
  }
}

export const allReducers = combineReducers({
  counter: countReducer,
})

export const configureStore = () => {
  return createStore(rootReducer)
}
