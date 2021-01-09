import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const HeaderDetails = ({ className, artistName }) => (
	<div className={cx('c-artist-details', className)}>
		<h1 className='u-margin-ends-small c-artist-details__name'>{artistName}</h1>
	</div>
);

export default HeaderDetails;

HeaderDetails.propTypes = {
	// eslint-disable-next-line react/require-default-props
	className: PropTypes.string,
	artistName: PropTypes.string.isRequired,
};
