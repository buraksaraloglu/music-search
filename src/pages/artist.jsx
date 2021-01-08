/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Layout from '../components/Layout';
import SearchInput from '../containers/Search/SearchInput';

import AlbumPage from '../containers/Album/AlbumPage';

const Artist = () => {
  const [artistParams, setArtistParams] = useState('');

  const params = useParams();

  useEffect(() => {
    const artistId = params.id;
    setArtistParams(artistId);
  }, [params.id]);

  if (artistParams.length) {
    return (
      <Layout>
        <SearchInput id="search" className="p-header" value={artistParams} />
        <AlbumPage albumQuery={artistParams} />
      </Layout>
    );
  }

  return (
    <Layout>
      <h2 className="err-header">Please search a song or album</h2>
      <SearchInput id="search" className="p-header" value={artistParams} />
    </Layout>
  );
};

export default Artist;
