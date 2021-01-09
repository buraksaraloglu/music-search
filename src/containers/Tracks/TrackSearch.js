import React from 'react';

import TrackSearchItem from '../../components/Tracks/TrackSearchItem';

const TrackSearch = ({ tracks, handlePlay, playingId }) => {
	return (
		<div className='row u-margin-top-small u-margin-bottom-medium'>
			{tracks !== undefined &&
				tracks.map((track) => (
					<TrackSearchItem
						key={track.id}
						id={track.id}
						imgSrc={track.album_images[2]}
						imgAlt={track.name}
						width={550}
						height={270}
						playLink={track.url}
						isPlaying={playingId === track.id ? true : false}
						trackName={track.name}
						albumName={track.album_name}
						albumId={track.album_id}
						artistName={track.artist_name}
						artistLink={`/artist/${track.artist_name}?=${track.artist_id}`}
						ccUrl={track.license_ccurl}
						handlePlay={handlePlay}
						ccName={
							track.license_ccurl === 'http://creativecommons.org/licenses/by/3.0/'
								? 'cc by'
								: 'cc by-sa'
						}
					/>
				))}
		</div>
	);
};

export default TrackSearch;
