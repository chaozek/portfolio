import { theme } from './ContextProvider'
import styled from 'styled-components'
type Props = {
  active: boolean
  value: string
  clicked: () => void
}
export const SingleCard = (props: Props) => {
  //css is used because of rendering images via iconify library
  const cardClasses = ['card']
  const contentClasses = ['iconify']

  if (props.active) {
    cardClasses.push('active')
  }
  return (
    <>
      <Button className={cardClasses.join(' ')} onClick={props.clicked} disabled={props.active}>
        <span
          className={contentClasses.join(' ')}
          data-icon={props.value}
          data-inline='false'
          data-width='60'
          data-height='60'
        ></span>
      </Button>
    </>
  )
}

const Button = styled.button`
  height: 80px;
  background: ${theme.background};
  border-radius: 5px;
  box-shadow: ${theme.shadow};
  border: none;
`
