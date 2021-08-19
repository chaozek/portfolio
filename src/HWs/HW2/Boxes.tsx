import { BoxesData } from './Data'
import { useState } from 'react'
const Boxes = () => {
  const [state, setstate] = useState(BoxesData)

  const handleClick = (box: any) => {
    let newArr = state.filter(item => {
      return item.id !== box.id
    })
    setstate(newArr)
  }
  return (
    <div>
      <div className='squares'>
        {state.length === 0 && (
          <div>
            <img
              style={{ width: '150px' }}
              src='https://img.stickers.cloud/packs/1b800101-be90-465b-89d3-7f45e6dd18e8/webp/9bbf104b-181e-4e54-a5ba-b8cdc8048426.webp'
              alt='Why'
            />
          </div>
        )}

        {state.map(box => {
          return (
            <div key={box.id} className='square'>
              <img src={box.img} alt={box.name} />
              <h4>{box.name}</h4>
              <div
                className='square-btn'
                onClick={() => {
                  handleClick(box)
                }}
              >
                X
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Boxes
