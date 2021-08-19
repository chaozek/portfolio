import { Collapse, Nav, NavItem, NavLink, Navbar, NavbarBrand, NavbarToggler } from 'reactstrap'
import { Link } from 'react-router-dom'
import { useState } from 'react'
function NavBar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(prevState => !prevState)
  }
  return (
    <div>
      <Navbar color='light' light expand='md' className='mb-5 p-3'>
        <NavbarBrand>
          <Link to='/blog'>
            <p>{`❤️Blogísek❤️`}</p>
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
