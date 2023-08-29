import PropTypes from 'prop-types';
import { SearchFormButton } from '../SearchForm/SearchForm.styled';

export const Button = ({ btnName, onClick }) => {
  return (
    <div>
      <SearchFormButton onClick={onClick} type="button">
        {btnName}
      </SearchFormButton>
    </div>
  );
};

Button.propTypes = {
  btnName: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};