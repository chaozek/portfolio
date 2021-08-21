import { Collapse, Nav, NavItem, NavLink, Navbar, NavbarBrand, NavbarToggler } from 'reactstrap'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import styled from 'styled-components'

function NavBar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(prevState => !prevState)
  }
  return (
    <div>
      <Navbar color='dark' dark expand='md' className='mb-5 p-3'>
        <NavbarBrand>
          <Link to='/blog'>
            <P>Blog</P>
          </Link>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className='mr-auto' navbar>
            <NavItem>
              <Link to='/blog'>
                <NavLink>All articles</NavLink>
              </Link>
            </NavItem>
            <NavItem>
              <Link to='/new-article'>
                <NavLink>Create Article</NavLink>
              </Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  )
}

export default NavBar
const P = styled.p`
  color: #aaccff;
  margin: 0;
`
