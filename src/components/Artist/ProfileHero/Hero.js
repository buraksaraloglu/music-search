/* eslint-disable react/prop-types */
/* eslint-disable react/require-default-props */
import React from 'react';
// import PropTypes from 'prop-types';
import cx from 'classnames';

import HeaderBackground from './Items/HeaderBackground';
import HeaderDetails from './Items/HeaderDetails';

import './c-artist-header.scss';

const ArtistHero = ({ className, artistName, imgSrc, imgAlt, width, height }) => (
	<div className={cx('c-artist-header', className)}>
		<HeaderBackground imgSrc={imgSrc} imgAlt={imgAlt} width={width} height={height}>
			<HeaderDetails artistName={artistName} />
		</HeaderBackground>
	</div>
);

export default ArtistHero;

// AlbumHeader.propTypes = {
//   className: PropTypes.string,
//   albumName: PropTypes.string.isRequired,
//   artistName: PropTypes.string.isRequired,
//   imgSrc: PropTypes.string.isRequired,
//   imgAlt: PropTypes.string.isRequired,
//   width: PropTypes.number.isRequired,
//   height: PropTypes.number.isRequired,
// };
