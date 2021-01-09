import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import Layout from '../components/Layout';

import SearchInput from '../containers/Search/SearchInput';
import TrackSearch from '../containers/Tracks/TrackSearch';
import MusicPlayer from '../components/MusicPlayer/MusicPlayer';

import { searchFetch } from '../hooks/searchFetch';

const Home = () => {
	const [searchParams, setSearchParams] = useState('');
	const [playingTrack, setPlayingTrack] = useState('');
	const [playingTrackId, setPlayingTrackId] = useState('');

	const { search } = useLocation();

	const handlePlay = (track, trackId) => {
		if (track !== playingTrack) {
			setPlayingTrack(track);
			setPlayingTrackId(trackId);
		} else {
			setPlayingTrack('');
			setPlayingTrackId('');
		}
	};

	useEffect(() => {
		if (search !== null || search?.length > 0) {
			setSearchParams(search.substring(3));
		}
	}, [search]);

	const tracks = searchFetch(searchParams);

	if (tracks?.data?.length > 0) {
		return (
			<>
				<Layout>
					<SearchInput id='search' className='p-header' value={searchParams} />
					<h1 className='u-margin-bottom-0'>{searchParams}</h1>
					<TrackSearch
						tracks={tracks.data}
						playingId={playingTrackId}
						handlePlay={(track, trackId) => handlePlay(track, trackId)}
					/>
				</Layout>
				{playingTrack && <MusicPlayer trackSrc={playingTrack} />}
			</>
		);
	}
	return (
		<Layout className='home-page'>
			<SearchInput id='search' className='p-home' value='' />
		</Layout>
	);
};

export default Home;
