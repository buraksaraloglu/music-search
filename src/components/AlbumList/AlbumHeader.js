/* eslint-disable react/prop-types */
/* eslint-disable react/require-default-props */
import React from 'react';
// import PropTypes from 'prop-types';
import cx from 'classnames';

import AlbumCover from '../Artist/AlbumHero/AlbumCover';
import ArtistDetails from '../Artist/AlbumHero/ArtistDetails';

import './c-album-header.scss';

const AlbumHeader = ({ id, className, albumName, artistName, imgSrc, imgAlt, width, height }) => (
	<div className={cx('c-album-header', className)}>
		<AlbumCover imgSrc={imgSrc} imgAlt={imgAlt} width={width} height={height} />
		<ArtistDetails id={id} albumName={albumName} artistName={artistName} />
	</div>
);

export default AlbumHeader;

// AlbumHeader.propTypes = {
//   className: PropTypes.string,
//   albumName: PropTypes.string.isRequired,
//   artistName: PropTypes.string.isRequired,
//   imgSrc: PropTypes.string.isRequired,
//   imgAlt: PropTypes.string.isRequired,
//   width: PropTypes.number.isRequired,
//   height: PropTypes.number.isRequired,
// };
