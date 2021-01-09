import React from 'react';
import PropTypes from 'prop-types';

import ArtistHero from '../../components/Artist/ProfileHero/Hero';

const TrackVertical = ({ albumData }) => {
	const albumInfo = albumData.album;
	const tracks = albumData.musics;

	return (
		<div className='row u-margin-top-small'>
			<ArtistHero
				albumName={albumInfo.name}
				artistName={tracks[0].artist_name}
				imgSrc={albumInfo.images[2 || 0]}
				imgAlt={albumInfo.name}
				width={550}
				height={270}
			/>
		</div>
	);
};

export default TrackVertical;

TrackVertical.propTypes = {
	albumData: PropTypes.object.isRequired,
};
