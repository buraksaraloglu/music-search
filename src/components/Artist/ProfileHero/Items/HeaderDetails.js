import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const HeaderDetails = ({ className, artistName }) => (
	<div className={cx('c-artist-details', className)}>
		<h1 className='u-margin-top-small c-artist-details__name'>{artistName}</h1>
		<span>Artist</span>
	</div>
);

export default HeaderDetails;

HeaderDetails.propTypes = {
	// eslint-disable-next-line react/require-default-props
	className: PropTypes.string,
	artistName: PropTypes.string.isRequired,
};
