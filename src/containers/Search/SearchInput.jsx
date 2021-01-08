import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

import SearchBar from '../../components/SearchBar';

// eslint-disable-next-line object-curly-newline
const SearchInput = ({ id, className, value }) => {
  const [searchValue, setSearchValue] = useState('');

  const history = useHistory();

  useEffect(() => {
    setSearchValue(value);
  }, [value]);

  const handleChange = useCallback((event) => {
    setSearchValue(event.target.value);
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    history.push(`/?q=${searchValue}`);
  };

  return (
    <SearchBar
      id={id}
      className={className}
      onSubmit={(event) => handleSubmit(event)}
      onChange={(event) => handleChange(event)}
      value={searchValue}
    />
  );
};
export default SearchInput;

SearchInput.propTypes = {
  id: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  // eslint-disable-next-line react/require-default-props
  value: PropTypes.string,
};
