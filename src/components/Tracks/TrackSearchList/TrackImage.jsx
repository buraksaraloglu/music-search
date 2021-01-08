import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

// eslint-disable-next-line object-curly-newline
const TrackImage = ({ className, imgSrc, imgAlt, width, height }) => (
  <div className={cx('c-track-card__cover-container', className)}>
    <img src={imgSrc} alt={imgAlt} width={width} height={height} loading="lazy" />
  </div>
);

export default TrackImage;

TrackImage.propTypes = {
  // eslint-disable-next-line react/require-default-props
  className: PropTypes.string,
  imgSrc: PropTypes.string.isRequired,
  imgAlt: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
};
