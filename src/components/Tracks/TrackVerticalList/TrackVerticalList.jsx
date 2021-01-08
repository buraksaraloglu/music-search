import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

import './c-track-vertical.scss';

// eslint-disable-next-line object-curly-newline
const TrackVerticalItem = ({ className, children }) => (
  <ul className={cx('c-track-vertical', className)}>{children}</ul>
);

export default TrackVerticalItem;

TrackVerticalItem.propTypes = {
  // eslint-disable-next-line react/require-default-props
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};
