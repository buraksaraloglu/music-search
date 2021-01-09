import React from 'react';
import PropTypes from 'prop-types';

import AlbumHeader from '../../components/AlbumList/AlbumHeader';
import TrackVerticalList from '../../components/Tracks/TrackVerticalList/TrackVerticalList';
import TrackVerticalItem from '../../components/Tracks/TrackVerticalList/TrackVerticalItem';

const AlbumPage = ({ albumData, handlePlay, playingId }) => {
	const albumInfo = albumData.album;
	const tracks = albumData.musics;

	return (
		<>
			<div className='row u-margin-top-small'>
				<AlbumHeader
					albumName={albumInfo.name}
					artistName={tracks[0].artist_name}
					imgSrc={albumInfo.images[2 || 0]}
					imgAlt={albumInfo.name}
					width={550}
					height={270}
				/>
			</div>
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
		</>
	);
};

export default AlbumPage;

AlbumPage.propTypes = {
	albumData: PropTypes.object.isRequired,
};
