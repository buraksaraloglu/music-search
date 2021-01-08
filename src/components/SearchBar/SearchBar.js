/* eslint-disable react/require-default-props */
/* eslint-disable object-curly-newline */

import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

import { FiSearch } from 'react-icons/fi';

import './c-search-bar.scss';

const SearchBar = ({ className, value, onSubmit, onChange, id }) => (
  <div className={cx('c-search-bar', className)} id={id}>
    <form
      className="c-search-bar__form"
      id={`${id}-form`}
      onSubmit={onSubmit}
      aria-label="Search Form"
      role="search"
    >
      {/* eslint-disable-next-line max-len */}
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control, jsx-a11y/label-has-for */}
      <label className="u-visually-hidden" htmlFor={`${id}-query`}>
        Search Music
      </label>
      <input
        id={`${id}-query`}
        type="search"
        className="c-search-bar__input"
        onChange={onChange}
        value={value}
        placeholder="Search for songs, albums and artists..."
        autoCorrect="off"
        autoCapitalize="off"
        autoComplete="off"
      />
      <button className="c-search-bar__button" type="submit" aria-label="submit">
        <FiSearch />
      </button>
    </form>
  </div>
);

export default SearchBar;

SearchBar.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};
