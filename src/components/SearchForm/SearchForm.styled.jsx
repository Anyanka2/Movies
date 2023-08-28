import styled from '@emotion/styled';

export const SForm = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  background-color: #fff;
  border-radius: 3px;
  overflow: hidden;
  margin: 20px;
  gap: 10px;
`;
export const SearchFormInput = styled.input`
  display: inline-block;
  color: #1d0533;
  width: 100%;
  height: 30px;
  font: inherit;
  font-size: 20px;
  border: none;
  outline: none;
  padding: 8px;
  border: 1px solid #5cabf5;
  border-radius: 4px;
  transition: border-color 0.3s, box-shadow 0.3s;

  &::placeholder {
    font: inherit;
    color: #eeaeca;
  }
  &:hover,
  &:focus {
    border-color: #eeaeca;
  }
`;
export const SearchFormButton = styled.button`
  display: inline-block;
  width: 120px;
  height: 48px;
  border: 1px solid #eeaeca;
  border-radius: 4px;
  background-color: #5cabf5;
  color: #eeaeca;
  font: inherit;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  font-family: inherit;
  font-size: 20px;

  &:hover {
    background-color: #eeaeca;
    color: #b0d6f9;
  }
`;
