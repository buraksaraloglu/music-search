/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';

import { usePlayerContextValue } from '../contexts/PlayerContext';

import Layout from '../components/Layout';
import SearchInput from '../containers/Search/SearchInput';
import ArtistHero from '../containers/Artist/ArtistHero';
import TrackVertical from '../containers/Tracks/TrackVertical';

import { albumFetch } from '../hooks/albumFetch';

const Artist = () => {
	const [artistParams, setArtistParams] = useState('');

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
			setArtistParams(search.substring(3));
		}
	}, [search]);

	const album = albumFetch(artistParams);

	if (album?.album?.id !== undefined) {
		return (
			<Layout>
				<SearchInput id='search' className='p-header' value={name} />
				<ArtistHero albumData={album} />
				<TrackVertical
					albumData={album}
					playingId={currentTrackId}
					handlePlay={(track, trackId) => handlePlay(track, trackId)}
				/>
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
