/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { usePlayerContextValue } from '../contexts/PlayerContext';

import Layout from '../components/Layout';

import SearchInput from '../containers/Search/SearchInput';
import AlbumHero from '../containers/Album/AlbumHero';
import TrackVertical from '../containers/Tracks/TrackVertical';

import { albumFetch } from '../hooks/albumFetch';

const Album = () => {
	const [albumId, setAlbumId] = useState('');

	const {
		currentTrack,
		setCurrentTrack,
		currentTrackId,
		setCurrentTrackId,
	} = usePlayerContextValue();

	const { id } = useParams();

	const handlePlay = (track, trackId) => {
		if (track !== currentTrack) {
			setCurrentTrack(track);
			setCurrentTrackId(trackId);
		} else {
			setCurrentTrack('');
			setCurrentTrackId('');
		}
	};

	const album = albumFetch(albumId);

	useEffect(() => {
		if (id !== undefined) {
			setAlbumId(id);
		}
	}, [id]);

	if (album?.album?.id !== undefined) {
		return (
			<>
				<Layout>
					<SearchInput id='search' className='p-header' value={album.album.name} />
					<AlbumHero albumData={album} />
					<TrackVertical
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
			<SearchInput id='search' className='p-header' value={id} />
		</Layout>
	);
};

export default Album;
