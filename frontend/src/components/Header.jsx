import React from 'react';

import { Container, Nav, Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import {
  // FaShoppingCart,
  FaUser,
} from 'react-icons/fa';

import logo from '../assets/logo.svg';

const Header = () => {
  return (
    <header>
      <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand>
              <img src={logo} alt='logo' />
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto'>
              {/* <Nav.Link href='/cart'>
                <FaShoppingCart /> Cart
              </Nav.Link> */}
              <LinkContainer to='/login'>
                <Nav.Link color='bs-white'>
                  <FaUser /> Sign In
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export { Header };
