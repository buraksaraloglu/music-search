import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

import './c-vertical-card.scss';

// eslint-disable-next-line object-curly-newline
const VerticalCardContainer = ({ className, children }) => (
	<ul className={cx('c-vertical-card-container', className)}>{children}</ul>
);

export default VerticalCardContainer;

VerticalCardContainer.propTypes = {
	// eslint-disable-next-line react/require-default-props
	className: PropTypes.string,
	children: PropTypes.node.isRequired,
};
