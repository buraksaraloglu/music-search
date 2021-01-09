import React from 'react';
import PropTypes from 'prop-types';

import TrackVerticalList from '../../components/Tracks/TrackVerticalList/TrackVerticalList';
import TrackVerticalItem from '../../components/Tracks/TrackVerticalList/TrackVerticalItem';

const TrackVertical = ({ albumData, handlePlay, playingId }) => {
	const tracks = albumData.musics;

	return (
		<TrackVerticalList>
			{tracks.map((track) => (
				<TrackVerticalItem
					key={track.id}
					id={track.id}
					isPlaying={playingId === track.id ? true : false}
					trackName={track.name}
					trackLink={track.url}
					ccUrl={track.license_ccurl}
					ccName={
						track.license_ccurl === 'http://creativecommons.org/licenses/by/3.0/'
							? 'cc by'
							: 'cc by-sa'
					}
					duration={track.duration}
					handlePlay={handlePlay}
				/>
			))}
		</TrackVerticalList>
	);
};

export default TrackVertical;

TrackVertical.propTypes = {
	albumData: PropTypes.object.isRequired,
	handlePlay: PropTypes.func.isRequired,
	playingId: PropTypes.string.isRequired,
};
