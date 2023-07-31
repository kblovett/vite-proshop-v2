import React from 'react';
import { useSelector } from 'react-redux';

import { Container, Nav, Navbar, Badge } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import { FaShoppingCart, FaUser } from 'react-icons/fa';

import logo from '../assets/logo.svg';

const Header = () => {
  const { cartItems } = useSelector((state) => state.cart);

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
              <Nav.Link href='/cart'>
                <FaShoppingCart /> Cart
                {cartItems?.length > 0 && (
                  <Badge pill bg='success' className='ms-1'>
                    {cartItems?.reduce((acc, item) => acc + item.qty, 0)}
                  </Badge>
                )}
              </Nav.Link>
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
