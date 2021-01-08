import React from 'react';

// eslint-disable-next-line no-unused-vars
import { useContentContextValue } from '../../contexts/ContentContext';

import TrackSearchItem from '../../components/Tracks/TrackSearchItem';

const TrackSearch = ({ tracks }) => {
	// const { contentStorage } = useContentContextValue();
	console.log(tracks);

	return (
		<div className='row u-margin-top-small'>
			{tracks !== undefined &&
				tracks.map((track) => (
					<TrackSearchItem
						key={track.id}
						id={track.id}
						imgSrc={track.album_images[2]}
						imgAlt={track.name}
						width={550}
						height={270}
						trackLink={track.url}
						trackName={track.name}
						artistName={track.name}
						artistLink={`/artist/?=${track.artist_id}`}
						ccUrl={track.license_ccurl}
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
