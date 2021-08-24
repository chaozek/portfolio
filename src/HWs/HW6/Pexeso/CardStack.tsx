import './GlobalCSS.css'
import { CardsContext } from './ContextProvider'
import { SingleCard } from './SingleCard'
import { useContext } from 'react'
import styled from 'styled-components'

export function CardStack() {
  const context = useContext(CardsContext)

  const cardsRender = [...Array(context.cards.length).keys()].map(n => (
    <SingleCard
      key={n}
      value={context.values[n]}
      active={context.cards[n]}
      clicked={() => context.handleClick(n)}
    />
  ))
  return (
    <>
      <H1>Pexeso</H1>
      <Board className='Board'>{cardsRender}</Board>
      <P>Moves: {context.hits}</P>
    </>
  )
}

export const H1 = styled.h1`
  text-align: center;
  font-weight: bolder;
  font-size: 40px;
  padding: 20px;
`
const P = styled.p`
  text-align: center;
  padding-top: 20px;
  font-size: 1.2em;
`
const Board = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: 80px 80px 80px 80px;
  column-gap: 10px;
  row-gap: 10px;
  margin: auto;
`
