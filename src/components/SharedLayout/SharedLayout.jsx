import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { Container } from './SharedLayout.styled';
import { Loader } from 'components/Loader/Loader';

export const SharedLayout = () => {
  return (
    <Container>
      <header>
        <div />
        <nav>
          <NavLink to="/" end onClick={e => e.currentTarget.blur()}>
            Home
          </NavLink>
          <NavLink to="/movies" onClick={e => e.currentTarget.blur()}>
            Movies
          </NavLink>
        </nav>
      </header>

      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
