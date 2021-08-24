import { Link } from 'react-router-dom'
import { itaProjects, privateProjects } from './components/MenuLinks'
import monkey from '../../Imgs/Monkey.png'
import styled from 'styled-components'

const HomePage = () => {
  return (
    <>
      <TextBlock>
        <h1>Pavel Kaplan</h1>
        <p>
          As a Marketing Manager I had a lot of work with updating information on websites and
          delegation wasn&apos;t efficient so I&apos;ve decided to learn how to do it. Since then
          Iam diving deeper and deeper into website development and
          <strong> I&apos;ve found my passion.</strong>
        </p>
        <img src={monkey} alt='monkey' />
        <h2> „better late than never“</h2>
      </TextBlock>
      <H2>ITA projects</H2>

      <Container grid={150}>
        {itaProjects.map((data, index) => {
          return (
            <Link key={index} to={data.Link} target={data.ProjectName === 'EC' ? '_blank' : ''}>
              <App image={data.CoverPhoto}>
                <P>{data.ProjectName}</P>
              </App>
            </Link>
          )
        })}
      </Container>
      <H2>A few business projects</H2>

      <Container grid={200}>
        {privateProjects.map((data, index) => {
          return (
            <a key={index} target='_blank' rel='noreferrer' href={data.Link}>
              <App image={data.CoverPhoto}>
                <P color='white'>{data.ProjectName}</P>
              </App>
            </a>
          )
        })}
      </Container>
      <TextBlock>
        <p>Source code for this website </p>
        <a href='https://github.com/chaozek/portfolio' target='_blank' rel='noreferrer'>
          <img
            src='https://www.spajk.cz/wp-content/uploads/2021/05/github-3215409-2673827.png'
            alt='github'
            style={{ width: '50px' }}
          />
        </a>
      </TextBlock>
    </>
  )
}

export default HomePage
type GridStyle = {
  grid: number
}
type FontStyle = {
  color?: string
}
const Container = styled.div<GridStyle>`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(${props => props.grid}px, 1fr));
  column-gap: 10px;
  row-gap: 10px;
  grid-auto-rows: 150px;
  margin: 2rem 0rem;
`
const P = styled.p<FontStyle>`
  position: absolute;
  color: ${props => (props.color ? props.color : '#212529')};
  font-family: 'Rampart One', cursive;
  font-size: 1.5rem;
  bottom: 0;
`
const H2 = styled.p`
  text-decoration: underline;
  text-decoration-color: #148298;
  margin-top: 4rem;
  font-size: 2rem;
`
const TextBlock = styled.div`
  width: 50%;
  text-align: center;
  margin: 0 auto;
  @media (max-width: 768px) {
    width: 80%;
  }
  h1 {
    font-weight: bold;
  }
  h2 {
    font-style: italic;
    font-weight: light;
  }
`
type Props = {
  image: string | undefined
}
const App = styled.div<Props>`
  position: relative;
  background: url(${props => props.image}) center no-repeat;
  display: flex;
  text-align: center;
  background-size: cover;
  height: 100%;
  align-items: center;
  border-radius: 5px;

  justify-content: center;
  transition: all 300ms ease-in-out;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  :hover {
    color: #aaccf2;
    transform: scale(0.9);
    box-shadow: frgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  }
`
