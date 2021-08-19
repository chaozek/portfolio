import styled from 'styled-components'
type Props = {
  icon: string
  value: string
  id: number
}
export const RandomJoke = (props: Props) => {
  return (
    <Joke>
      <Img src={props.icon} alt='' />
      <p>{props.value}</p>
    </Joke>
  )
}

const Img = styled.img`
  margin-right: 1rem;
`

const Joke = styled.div`
  display: flex;
  font-weight: bold;
  margin-top: 2rem;
  align-items: center;
`
