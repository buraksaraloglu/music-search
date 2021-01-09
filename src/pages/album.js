/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import Layout from '../components/Layout';
import SearchInput from '../containers/Search/SearchInput';

import AlbumPage from '../containers/Album/AlbumPage';

const Album = () => {
	const [albumParams, setAlbumParams] = useState('');

	const { name, search } = useLocation();

	useEffect(() => {
		if (search !== null || search?.length > 0) {
			setAlbumParams(search.substring(3));
		}
	}, [search]);

	if (albumParams.length) {
		return (
			<Layout>
				<SearchInput id='search' className='p-header' value={name} />
				<AlbumPage albumQuery={albumParams} />
			</Layout>
		);
	}

	return (
		<Layout>
			<h2 className='err-header'>Please search a song or album</h2>
			<SearchInput id='search' className='p-header' value={albumParams} />
		</Layout>
	);
};

export default Album;
