import React, { createContext, useState } from 'react'
const CARD_COUNT = 16
type CardsContextState = {
  cards: boolean[]
  values: string[]
  selected: number[]
  hits: number
  handleClick: (key: number) => void
}

let val = [
  'noto:bird',
  'noto:blossom',
  'noto:cactus',
  'noto:avocado',
  'noto:cookie',
  'noto:crystal-ball',
  'noto:peach',
  'noto:gorilla',
]

const randomizeAndDoubleArray = (arr: string[]) => {
  return arr.concat(arr).sort(() => 0.5 - Math.random())
}

const values = randomizeAndDoubleArray(val)
const contextDefaultValues: CardsContextState = {
  cards: Array.from({ length: CARD_COUNT }, () => false),
  values: values,
  selected: [],
  hits: 0,
  handleClick: () => {},
}

export const CardsContext = createContext<CardsContextState>(contextDefaultValues)

type CardProps = {
  children: React.ReactNode
}
const CardsProvider = ({ children }: CardProps) => {
  const [cardsState, setCardsState] = useState(contextDefaultValues)
  const handleClick = (key: number) => {
    const newCards = [...cardsState.cards]
    let newSelected = [...cardsState.selected]

    if (newSelected.length > 1) {
      setCardsState(prev => ({
        ...prev,
        hits: prev.hits + 1,
      }))
      newCards[newSelected[0]] = false
      newCards[newSelected[1]] = false
      newSelected = []
    }
    newCards[key] = true
    newSelected.push(key)
    if (
      newSelected.length > 1 &&
      cardsState.values[newSelected[0]] === cardsState.values[newSelected[1]]
    ) {
      newSelected = []
    }
    setCardsState(prev => {
      return {
        ...prev,
        cards: newCards,
        selected: newSelected,
        values: values,
      }
    })
  }

  return (
    <CardsContext.Provider
      value={{
        cards: cardsState.cards,
        handleClick,
        values: cardsState.values,
        hits: cardsState.hits,
        selected: cardsState.selected,
      }}
    >
      {children}
    </CardsContext.Provider>
  )
}
export const theme = {
  background: '#AACCFF',
  shadow: 'rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;',
}
export default CardsProvider
