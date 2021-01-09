import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const HeaderBackground = ({ className, imgSrc, imgAlt, width, height, children }) => (
	<div className={cx('c-artist-cover', className)}>
		<img src={imgSrc} alt={imgAlt} width={width} height={height} />
		{children}
	</div>
);

export default HeaderBackground;

HeaderBackground.propTypes = {
	// eslint-disable-next-line react/require-default-props
	className: PropTypes.string,
	imgSrc: PropTypes.string.isRequired,
	imgAlt: PropTypes.string.isRequired,
	width: PropTypes.number.isRequired,
	height: PropTypes.number.isRequired,
	children: PropTypes.node.isRequired,
};
