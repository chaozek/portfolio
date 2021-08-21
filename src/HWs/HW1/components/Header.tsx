import { Link, Route, BrowserRouter as Router } from 'react-router-dom'
import { Section } from '../../../App'
import Blog from '../../HW6/Blog/HomePage'
import BlogForm from '../../HW6/Blog/BlogForm'
import React from 'react'
import monkey from '../../../Imgs/Monkey.png'
import styled from 'styled-components'

const Header = () => {
  return (
    <HeaderDiv>
      <Left>
        <Link to='/'>
          {' '}
          <Img src={monkey} alt='monkey' />
          Pavel Kaplan
        </Link>
      </Left>
      <Right>
        <Ul>
          <Li>
            <Link to='/'>Home</Link>
          </Li>
          <Li>
            <Link to='/todo'>Todo</Link>
          </Li>
          <Li>
            <Link to='/third'>PrevState Counter</Link>
          </Li>
          <Li>
            <Link to='/second'>JS history</Link>
          </Li>
          <Li>
            <Link to='/hackertyper'>Hacker Typer</Link>
          </Li>
          <Li>
            <Link to='/blog'>Blog</Link>
          </Li>
          <Li>
            <Link to='/tic-tac-toe'>Tic-tac-toe</Link>
          </Li>
          <Li>
            <Link to='/pexeso'>Pexeso</Link>
          </Li>
          <Li>
            <Link to='/chuck'>Jokes</Link>
          </Li>
          <Li>
            <Link to='/redux'>Redux</Link>
          </Li>
        </Ul>
      </Right>
    </HeaderDiv>
  )
}

export default Header
const HeaderDiv = styled.div`
  background-color: #222233;
  color: #aaccff;
  margin: 0;
  min-height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
`
const HeaderSection = styled.div``
const Left = styled.div`
  flex: 30%;
  margin-left: 0.5rem;
`
const Right = styled.div`
  display: flex;
  list-style: none;
  flex-wrap: wrap;
`
const Ul = styled.div`
  flex: 50%;
  display: flex;
  list-style: none;
  text-decoration: none;
  flex-wrap: wrap;
`
const Li = styled.div`
  margin-right: 1rem;
  text-decoration: none;
`
const Img = styled.img`
  margin-right: 0.5rem;
`
