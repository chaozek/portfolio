import {
  Collapse,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Nav,
  NavItem,
  NavLink,
  Navbar,
  NavbarBrand,
  NavbarText,
  NavbarToggler,
  UncontrolledDropdown,
} from 'reactstrap'
import { Link } from 'react-router-dom'
import React, { useState } from 'react'
import monkey from '../../../Imgs/Monkey.png'
import styled from 'styled-components'
const Header = props => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  return (
    <div>
      <Navbar color='dark' dark expand='md' className='p-3'>
        <Link to='/'>
          <NavbarBrand>
            <Img src={monkey} alt='monkey' />
          </NavbarBrand>
        </Link>

        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className='ms-auto ' navbar>
            <NavItem>
              <Link to='/hackertyper'>
                <NavLink>Hacker Typer</NavLink>
              </Link>
            </NavItem>
            <NavItem>
              <Link to='/blog'>
                <NavLink>Blog</NavLink>
              </Link>
            </NavItem>
            <NavItem>
              <Link to='/pexeso'>
                <NavLink>Pexeso</NavLink>
              </Link>
            </NavItem>
            <NavItem>
              <Link to='/tic-tac-toe'>
                <NavLink>Tic Tac Toe</NavLink>
              </Link>
            </NavItem>
            <NavItem>
              <Link to='/third'>
                <NavLink>Counter</NavLink>
              </Link>
            </NavItem>
            <NavItem>
              <Link to='/second'>
                <NavLink>JS History</NavLink>
              </Link>
            </NavItem>
            <NavItem>
              <Link to='/redux'>
                <NavLink>Redux</NavLink>
              </Link>
            </NavItem>
            <NavItem>
              <Link to='/chuck'>
                <NavLink>Chuck Jokes</NavLink>
              </Link>
            </NavItem>
            <NavItem>
              <Link to='/todo'>
                <NavLink>To Do</NavLink>
              </Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  )
}

export default Header
const Img = styled.img`
  margin-left: 0.5rem;
`
