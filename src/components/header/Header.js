import { Button } from 'bootstrap';
import React, { useState } from 'react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Input,
  FormGroup,
 
} from 'reactstrap';
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <div >
      <Navbar expand='md' >
        <NavbarBrand href="/">
          <img src='https://lavore-store-demo.myshopify.com/cdn/shop/files/logo.png?v=1640166167' width="100px" />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mx-auto" navbar>
            <NavItem>
              <NavLink href="/">Home</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Shop
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Option 1</DropdownItem>
                <DropdownItem>Option 2</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Reset</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            
            <NavItem>
              <NavLink href="/blog">
                Blog
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/contact">
                Contact
              </NavLink>
            </NavItem>
          </Nav>
          <FormGroup>
       <Input
      id="exampleSearch"
      name="search"
      placeholder="search"
      type="search"
    />
  </FormGroup>
        </Collapse>
      </Navbar>

    </div>
  )
}
