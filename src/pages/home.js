import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import { usePlayerContextValue } from '../contexts/PlayerContext';

import Layout from '../components/Layout';

import SearchInput from '../containers/Search/SearchInput';
import TrackSearch from '../containers/Tracks/TrackSearch';

import { searchFetch } from '../hooks/searchFetch';

const Home = () => {
	const [searchParams, setSearchParams] = useState('');

	const {
		currentTrack,
		setCurrentTrack,
		currentTrackId,
		setCurrentTrackId,
	} = usePlayerContextValue();

	const { search } = useLocation();

	const handlePlay = (track, trackId) => {
		if (track !== currentTrack) {
			setCurrentTrack(track);
			setCurrentTrackId(trackId);
		} else {
			setCurrentTrack('');
			setCurrentTrackId('');
		}
	};

	useEffect(() => {
		if (search !== null || search?.length > 0) {
			setSearchParams(search.substring(3));
		}
	}, [search]);

	const tracks = searchFetch(searchParams);

	if (tracks?.musics?.length !== undefined) {
		return (
			<>
				<Helmet>
					<title>{searchParams} - Burak Saraloglu</title>
				</Helmet>
				<Layout>
					<SearchInput id='search' className='p-header' value={searchParams} />
					<h1 className='u-margin-bottom-0'>{searchParams}</h1>
					<TrackSearch
						tracks={tracks.musics}
						playingId={currentTrackId}
						handlePlay={(track, trackId) => handlePlay(track, trackId)}
					/>
				</Layout>
			</>
		);
	}

	if (tracks?.musics === null && searchParams.length > 0) {
		<Layout>
			<SearchInput id='search' className='p-header' value={searchParams} />
			<h1 className='u-margin-bottom-0'>{searchParams}</h1>
			<h2>This song has not found. Maybe try another song?</h2>
		</Layout>;
	}
	return (
		<Layout className='home-page'>
			<SearchInput id='search' className='p-home' value='' />
		</Layout>
	);
};

export default Home;
