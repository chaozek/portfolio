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
      <Navbar
        expand='lg'
        dark
        className='p-3'
        style={{
          backgroundColor: props.color ? props.color : '#1E5A82',
          color: 'white',
          fontSize: '.9rem',
        }}
      >
        <Link to='/'>
          <NavbarLogo>[ PK ]</NavbarLogo>
        </Link>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className='ms-auto ' navbar>
            <NavItem>
              <LinkElem to='/third' tag={RRNavLink} activeClassName='active'>
                Counter
              </LinkElem>
            </NavItem>
            <NavItem>
              <LinkElem to='/second' tag={RRNavLink} activeClassName='active'>
                JS History
              </LinkElem>
            </NavItem>
            <NavItem>
              <LinkElem to='/hackertyper' tag={RRNavLink} activeClassName='active'>
                Hacker Typer
              </LinkElem>
            </NavItem>
            <NavItem>
              <LinkElem to='/tic-tac-toe' tag={RRNavLink} activeClassName='active'>
                Tic Tac Toe
              </LinkElem>
            </NavItem>

            <NavItem>
              <LinkElem to='/pexeso' tag={RRNavLink} activeClassName='active'>
                Pexeso
              </LinkElem>
            </NavItem>
            <NavItem>
              <LinkElem to='/chuck' tag={RRNavLink} activeClassName='active'>
                Chuck Jokes
              </LinkElem>
            </NavItem>
            <NavItem>
              <LinkElem to='/redux' tag={RRNavLink} activeClassName='active'>
                Redux
              </LinkElem>
            </NavItem>
            <NavItem>
              <LinkElem to='/todo' tag={RRNavLink} activeClassName='active'>
                To Do
              </LinkElem>
            </NavItem>
            <NavItem>
              <LinkElem to='/blog' tag={RRNavLink} activeClassName='active'>
                Blog
              </LinkElem>
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
const P = styled.p`
  color: #5e97bd;
  padding: 0;
  margin: 0;
  text-transform: uppercase;
`
const LinkElem = styled(NavLink)`
  font-size: 1rem;
  color: white !important;
  &.active {
    color: #f43250 !important;
  }
`
const NavbarLogo = styled(NavbarBrand)`
  color: #f43250 !important;
  font-weight: bold;
`
