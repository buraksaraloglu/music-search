import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import cx from 'classnames';

const ArtistDetails = ({ id, className, albumName, artistName }) => (
	<div className={cx('c-artist-details', className)}>
		<h1 className='u-margin-ends-small c-artist-details__album-name'>{albumName}</h1>
		<Link to={`/artist/${id}`} className='c-artist-details__artist-name'>
			{artistName}
		</Link>
	</div>
);

export default ArtistDetails;

ArtistDetails.propTypes = {
	// eslint-disable-next-line react/require-default-props
	className: PropTypes.string,
	albumName: PropTypes.string.isRequired,
	artistName: PropTypes.string.isRequired,
};
