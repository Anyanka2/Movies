import styled from '@emotion/styled';

export const MovieListSt = styled.ul`
  position: relative;
  cursor: pointer;
  text-decoration: none;
  flex-basis: calc((100% - 3 * 16px) / 4);
  border-radius: 5px;
  transition: transform 500ms cubic-bezier(0.4, 0, 0.2, 1);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: block;
    border-radius: inherit;
    background-image: linear-gradient(
      180deg,
      #00000000 63.48%,
      rgba(0, 0, 0, 0.902) 90%
    );
  }
  &:hover,
  &:focus {
    transform: scale(1.05);
  }
`;

export const MovieCardImg = styled.img`
  width: 300px;
  height: 400px;
  border-radius: 5px;
`;

export const MovieCardInfo = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding-left: 12px;
  padding-right: 12px;
  padding-bottom: 12px;
`;

export const MovieCardTitle = styled.p`
  font-family: 'Roboto Medium', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.15;
  text-transform: uppercase;
  color: #ffffff;
`;
