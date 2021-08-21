import { Link } from 'react-router-dom'
import styled from 'styled-components'
const HomePage = () => {
  return (
    <Container>
      <App>
        <Link to='/third'>
          <P>PrevState Counter</P>
          <Button>VISIT</Button>
        </Link>
      </App>
      <App>
        <Link to='/second'>
          <P>JS History</P>
          <Button>VISIT</Button>
        </Link>
      </App>
      <App>
        <Link to='/hackertyper'>
          <P>Hacker Typer</P>
          <Button>VISIT</Button>
        </Link>
      </App>
      <App>
        <Link to='/blog'>
          <P>Blog</P>
          <Button>VISIT</Button>
        </Link>
      </App>
      <App>
        <Link to='/tic-tac-toe'>
          <P>Tic-tac-toe</P>
          <Button>VISIT</Button>
        </Link>
      </App>
      <App>
        <Link to='/pexeso'>
          <P>Pexeso</P>
          <Button>VISIT</Button>
        </Link>
      </App>
      <App>
        <Link to='/chuck'>
          <P>Jokes</P>
          <Button>VISIT</Button>
        </Link>
      </App>
      <App>
        <Link to='/redux'>
          <P>Redux</P>
          <Button>VISIT</Button>
        </Link>
      </App>
    </Container>
  )
}

export default HomePage

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  column-gap: 10px;
  row-gap: 10px;

  grid-auto-rows: 200px;
`
const P = styled.p`
  position: absolute;
  :hover {
    color: white;
  }
`
const Button = styled.button`
  position: absolute;
  bottom: 0;
  background-color: #222233;
  border: none;
  color: #222233;
  right: 0;
  transition: all 300ms ease-in-out;
  padding: 0;
  width: 100px;
  height: 40px;
`
const App = styled.div`
  background-color: #222233;
  position: relative;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  transition: all 300ms ease-in-out;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  :hover {
    color: #aaccf2;
    transform: scale(0.9);
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  }
  &:hover ${Button} {
    color: #222233;
    font-weight: bold;
    transform: scale(1);
    background-color: white;
  }
`
