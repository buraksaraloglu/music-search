/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';

import { usePlayerContextValue } from '../contexts/PlayerContext';

import Layout from '../components/Layout';

import SearchInput from '../containers/Search/SearchInput';
import AlbumPage from '../containers/Album/AlbumPage';

import { albumFetch } from '../hooks/albumFetch';

const Album = () => {
	const [albumParams, setAlbumParams] = useState('');

	const {
		currentTrack,
		setCurrentTrack,
		currentTrackId,
		setCurrentTrackId,
	} = usePlayerContextValue();

	const { search } = useLocation();
	const { name } = useParams();

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
			setAlbumParams(search.substring(3));
		}
	}, [search]);

	const album = albumFetch(albumParams);

	if (album?.album?.id !== undefined) {
		return (
			<>
				<Layout>
					<SearchInput id='search' className='p-header' value={name} />
					<AlbumPage
						albumData={album}
						playingId={currentTrackId}
						handlePlay={(track, trackId) => handlePlay(track, trackId)}
					/>
				</Layout>
			</>
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
