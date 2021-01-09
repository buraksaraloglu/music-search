import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const ArtistDetails = ({ className, albumName, artistName }) => (
	<div className={cx('c-artist-details', className)}>
		<h1 className='u-margin-ends-small c-artist-details__album-name'>{albumName}</h1>
		<h2 className='c-artist-details__artist-name'>{artistName}</h2>
	</div>
);

export default ArtistDetails;

ArtistDetails.propTypes = {
	// eslint-disable-next-line react/require-default-props
	className: PropTypes.string,
	albumName: PropTypes.string.isRequired,
	artistName: PropTypes.string.isRequired,
};
