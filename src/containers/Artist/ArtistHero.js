import React from 'react';
import PropTypes from 'prop-types';

import ArtistHero from '../../components/Artist/ProfileHero/Hero';

const ArtistHeroContainer = ({ artistData }) => {
	const artistMeta = artistData.artist;
	const albumMeta = artistData.albums;
	const trackMeta = artistData.musics;

	return (
		<div className='row u-margin-top-small'>
			<ArtistHero
				albumName={artistMeta.name}
				artistName={trackMeta[0]?.artist_name}
				imgSrc={albumMeta[0].images[2 || 0]}
				imgAlt={artistMeta.name}
				width={550}
				height={270}
			/>
		</div>
	);
};

export default ArtistHeroContainer;

ArtistHeroContainer.propTypes = {
	artistData: PropTypes.object.isRequired,
};
