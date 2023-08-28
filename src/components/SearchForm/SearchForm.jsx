import { useState } from 'react';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import { SForm, SearchFormInput, SearchFormButton} from './SearchForm.styled';

export const SearchForm = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = e => {
    setInputValue(e.currentTarget.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (inputValue.trim() === '') {
      return toast.warning('Oops, no value...');
    }
    onSubmit(inputValue);

    setInputValue('');
  };

  return (
    <SForm onSubmit={handleSubmit}>
      <SearchFormInput
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Enter movie title"
        required
        value={inputValue}
        onChange={handleChange}
      />
      <SearchFormButton type="submit">
        Search
      </SearchFormButton>
    </SForm>
  );
};

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
