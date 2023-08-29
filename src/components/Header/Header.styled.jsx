import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  margin: 0 auto;
  padding: 0 16px;
  background: #eeaeca;
  background: radial-gradient(
    circle,
    rgba(238, 174, 202, 1) 0%,
    rgb(148, 187, 233) 100%
  );
`;
export const HeaderSt = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0 16px;
  gap: 12px;
  height: 5rem;
  overflow: visible;
  background-color: transparent;
  z-index: 1;

  > nav {
    display: flex;
  }
`;
export const Link = styled(NavLink)`
  text-decoration: none;
  font-weight: 500;
  font-size: 1.5rem;
  color: rgb(255, 255, 255);
  transition: all 0.3s ease-in-out;
  position: relative;
  margin-left: 30px;

  &:hover,
  &:focus {
    color: #5cabf5;
  }

  &.active:after {
    content: '';
    width: 100%;
    height: 3px;
    background: #eeaeca;
    display: block;
    border-radius: 2px;
    position: absolute;
    bottom: -5px;
    left: 0;
  }
`;
