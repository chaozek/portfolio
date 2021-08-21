import { BoxesData } from './Data'
import { useState } from 'react'
import styled from 'styled-components'
const Boxes = () => {
  const [state, setstate] = useState<Box[]>(BoxesData)
  type Box = {
    id: number
    img: string
    name: string
  }
  const handleClick = (box: Box) => {
    let newArr = state.filter(item => {
      return item.id !== box.id
    })
    setstate(newArr)
  }
  return (
    <div>
      <Squares>
        {state.length === 0 && (
          <Square>
            <Img
              src='https://img.stickers.cloud/packs/1b800101-be90-465b-89d3-7f45e6dd18e8/webp/9bbf104b-181e-4e54-a5ba-b8cdc8048426.webp'
              alt='Why'
            />
          </Square>
        )}

        {state.map(box => {
          return (
            <Square key={box.id}>
              <SquareButton
                onClick={() => {
                  handleClick(box)
                }}
              >
                X
              </SquareButton>
              <Img src={box.img} alt={box.name} />
              <h4>{box.name}</h4>
            </Square>
          )
        })}
      </Squares>
    </div>
  )
}
const Square = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 200px;
  flex-direction: column;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  position: relative;
  margin: 1rem;
`
const Squares = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`
const Img = styled.img`
  width: 80px;
`
const SquareButton = styled.button`
  position: absolute;
  left: 0;
  top: 0;
  background-color: white;
  padding: 0.5rem;
  color: #000000;
  font-weight: bold;
  cursor: pointer;
`
export default Boxes
