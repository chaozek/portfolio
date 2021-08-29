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
      <BlogNavbar light expand='sm'>
        <BlogLogo>
          <Link to='/blog'>
            <P>All posts</P>
          </Link>
        </BlogLogo>
        <Nav className='mr-auto' navbar>
          <NavItem>
            <Link to='/new-article'>
              <NavLink>Create Article</NavLink>
            </Link>
          </NavItem>
        </Nav>
      </BlogNavbar>
    </div>
  )
}

export default NavBar
const P = styled.p`
  margin: 0;
  color: white;
  font-weight: lighter;
  padding: 0px 25px;
  font-size: 1.3rem;
  text-transform: uppercase;
`
const BlogNavbar = styled(Navbar)`
  margin: 0;
  padding: 0rem 1rem;
`
const BlogLogo = styled(NavbarBrand)`
  margin: 0;
  background-color: #1e5a82;
  color: white !important;
`
