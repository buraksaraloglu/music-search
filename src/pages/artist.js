/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { usePlayerContextValue } from '../contexts/PlayerContext';

import Layout from '../components/Layout';
import SearchInput from '../containers/Search/SearchInput';
import ArtistHeroContainer from '../containers/Artist/ArtistHero';
import TrackVertical from '../containers/Tracks/TrackVertical';
import VerticalCardList from '../containers/VerticalCardList/VerticalCardList';

import { artistFetch } from '../hooks/artistFetch';

const Artist = () => {
	const [artistParams, setArtistParams] = useState('');

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

	useEffect(() => {
		if (id !== undefined) {
			setArtistParams(id);
		}
	}, [id]);

	const artist = artistFetch(artistParams);

	let artistDetails = {};

	if (artist !== undefined) {
		artistDetails = artist.artist;
	}

	if (artist !== undefined) {
		return (
			<Layout>
				<SearchInput id='search' className='p-header' value={artistDetails.name} />
				<ArtistHeroContainer artistData={artist} />
				<TrackVertical
					albumData={artist}
					playingId={currentTrackId}
					handlePlay={(track, trackId) => handlePlay(track, trackId)}
				/>
				<VerticalCardList items={artist} title='Albums' />
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
