/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
// import { Redirect } from 'react-router-dom';

import Layout from '../components/Layout';
import SearchInput from '../containers/Search/SearchInput';

import AlbumPage from '../containers/Album/AlbumPage';

const Album = ({ location }) => {
  const [albumParams, setAlbumParams] = useState('');

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const query = params.get('q');
    if (query !== null) setAlbumParams(query);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (albumParams.length) {
    return (
      <Layout>
        <SearchInput id="search" className="p-header" value={albumParams} />
        <AlbumPage albumQuery={albumParams} />
      </Layout>
    );
  }

  return (
    <Layout>
      <h2 className="err-header">Please search a song or album</h2>
      <SearchInput id="search" className="p-header" value={albumParams} />
    </Layout>
  );
};

export default Album;
