import { Link } from 'react-router-dom'
import bg from '../Imgs/bg.jpg'
import cloud1 from '../Imgs/cloud1.png'
import cloud2 from '../Imgs/cloud2.png'
import cloud3 from '../Imgs/cloud3.png'
import cloud4 from '../Imgs/cloud4.png'
import cloud5 from '../Imgs/cloud5.png'
import styled, { keyframes } from 'styled-components'
const LandingPage = () => {
  return (
    <>
      <Hero>
        <Clouds>
          <Cloud cloud={1} src={cloud1} alt='cloud1' />
          <Cloud cloud={2} src={cloud2} alt='cloud2' />
          <Cloud cloud={3} src={cloud3} alt='cloud3' />
          <Cloud cloud={4} src={cloud4} alt='cloud4' />
          <Cloud cloud={5} src={cloud5} alt='cloud5' />
        </Clouds>
        <TextSection>
          <H1>WELCOME </H1>
          <Button to='/home'>View Projects</Button>
        </TextSection>
      </Hero>
    </>
  )
}

export default LandingPage

const Hero = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${bg});
  background-size: cover;
  background-position: bottom;
`
const TextSection = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  z-index: 5;
`
const Button = styled(Link)`
  font-weight: 100;
  background-color: #f43250;
  color: white;
  border: none;
  border-radius: 2px;
  font-size: 1.6rem;
  padding: 0.5rem 1.5rem;
  z-index: 5;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`
const H1 = styled.h1`
  font-size: 3rem;
  letter-spacing: 2rem;
  font-weight: lighter;
  text-align: center;
  color: white;
  @media (max-width: 768px) {
    font-size: 3rem;
    letter-spacing: 1rem;
  }
`
const P = styled.p`
  font-size: 3rem;
  text-align: center;
  font-weight: lighter;
  top: 50%;
  left: 50%;
  color: #3e3e3e;
  text-shadow: 1px 1px #ffffff;
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`
const Clouds = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`

function animate() {
  return keyframes`
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(100%);
    }
  `
}

type Props = {
  cloud?: number
}

const Cloud = styled.img<Props>`
  position: absolute;
  bottom: 0;
  max-width: 100%;
  animation: ${animate} calc(8s * ${props => props.cloud}) linear infinite;
`
