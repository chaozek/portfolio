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
import { Link, NavLink as RRNavLink } from 'react-router-dom'
import React, { useState } from 'react'
import monkey from '../../Imgs/Monkey.png'
import styled from 'styled-components'
const Header = props => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  return (
    <div>
      <Navbar color='dark' dark expand='lg' className='p-3'>
        <Link to='/'>
          <NavbarBrand>
            <Img src={monkey} alt='monkey' />
          </NavbarBrand>
        </Link>

        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className='ms-auto ' navbar>
            <NavItem>
              <NavLink to='/third' tag={RRNavLink} activeClassName='active'>
                Counter
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to='/second' tag={RRNavLink} activeClassName='active'>
                JS History
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to='/hackertyper' tag={RRNavLink} activeClassName='active'>
                Hacker Typer
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to='/tic-tac-toe' tag={RRNavLink} activeClassName='active'>
                Tic Tac Toe
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink to='/pexeso' tag={RRNavLink} activeClassName='active'>
                Pexeso
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to='/chuck' tag={RRNavLink} activeClassName='active'>
                Chuck Jokes
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to='/redux' tag={RRNavLink} activeClassName='active'>
                Redux
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to='/todo' tag={RRNavLink} activeClassName='active'>
                To Do
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to='/blog' tag={RRNavLink} activeClassName='active'>
                Blog
              </NavLink>
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
