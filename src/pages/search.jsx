/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import SearchInput from '../containers/Search/SearchInput';

const Search = ({ location }) => {
  const [searchParams, setSearchParams] = useState('');

  const handleChange = (event) => {
    setSearchParams(event.value);
  };

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const query = params.get('q');
    setSearchParams(query);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Layout>
      <SearchInput
        id="search"
        className="p-header"
        onChange={(event) => handleChange(event)}
        value={searchParams}
        onFocus={() => {}}
      />
    </Layout>
  );
};

export default Search;
