import { useState } from 'react';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';

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
    <form onSubmit={handleSubmit}>
      <button type="submit">
        <span>Search</span>
      </button>
      <input
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Enter movie title..."
        required
        value={inputValue}
        onChange={handleChange}
      />
    </form>
  );
};

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
