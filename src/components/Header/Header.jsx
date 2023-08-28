import React from 'react';
import { Container, HeaderSt, Link } from './Header.styled';

export const Header = () => {
  return (
    <Container>
      <HeaderSt>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </HeaderSt>
    </Container>
  );
};
