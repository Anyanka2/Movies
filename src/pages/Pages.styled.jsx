import styled from '@emotion/styled';

export const HomeContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 16px;
`;

export const TrendingTitle = styled.h1`
  font-size: 2rem;
  color: #5cabf5;
  font-weight: 700;
  margin: 1rem 0;
  display: block;
  text-transform: uppercase;
  text-align: center;
`;
export const TextError = styled.p`
  font-size: 25px;
  text-align: center;
  margin-bottom: 20px;
  margin-top: 20px;
`;
export const Button = styled.button`
  display: inline-block;
  width: 120px;
  height: 48px;
  border: 1px solid #eeaeca;
  border-radius: 30px;
  background-color: #94bbe9;
  color: #fff;
  font: inherit;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  font-family: inherit;
  font-size: 20px;
  margin: 10px 0;

  &:hover {
    background-color: #eeaeca;
    color: #fff;
  }
`