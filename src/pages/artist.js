/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';

import Layout from '../components/Layout';
import SearchInput from '../containers/Search/SearchInput';

import AlbumPage from '../containers/Album/AlbumPage';

const Artist = () => {
	const [artistParams, setArtistParams] = useState('');

	const { name } = useParams();
	const { search } = useLocation();

	useEffect(() => {
		setArtistParams(name);
	}, [name]);

	if (search.length) {
		return (
			<Layout>
				<SearchInput id='search' className='p-header' value={artistParams} />
				<AlbumPage albumQuery={search} />
			</Layout>
		);
	}

	return (
		<Layout>
			<h2 className='err-header'>Please search a song or album</h2>
			<SearchInput id='search' className='p-header' value={artistParams} />
		</Layout>
	);
};

export default Artist;
