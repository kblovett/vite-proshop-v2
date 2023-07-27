import React from 'react';
import { Outlet } from 'react-router-dom';

import { Header, Footer } from './components';

import { Container } from 'react-bootstrap';

const App = () => {
  return (
    <>
      <Header />
      <main className='py-3'>
        <Container>
          <Outlet />
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default App;
