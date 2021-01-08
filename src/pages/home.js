/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import Layout from '../components/Layout';
import SearchInput from '../containers/Search/SearchInput';
import TrackSearch from '../containers/Tracks/TrackSearch';

import { searchFetch } from '../hooks/searchFetch';

const Home = () => {
	const [searchParams, setSearchParams] = useState('');

	const { search } = useLocation();

	useEffect(() => {
		if (search !== null) {
			setSearchParams(search.substring(3));
		}
	}, [search]);

	searchFetch(searchParams);

	if (searchParams.length) {
		return (
			<Layout>
				<SearchInput id='search' className='p-header' value={searchParams} />
				<h1 className='u-margin-bottom-0'>{searchParams}</h1>
				<TrackSearch trackQuery={searchParams} />
			</Layout>
		);
	}
	return (
		<Layout className='home-page'>
			<SearchInput id='search' className='p-home' value='' />
		</Layout>
	);
};

export default Home;
