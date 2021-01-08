import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const AlbumCover = ({ className, imgSrc, imgAlt, width, height }) => (
  <div className={cx('c-album-cover', className)}>
    <img src={imgSrc} alt={imgAlt} width={width} height={height} />
  </div>
);

export default AlbumCover;

AlbumCover.propTypes = {
  // eslint-disable-next-line react/require-default-props
  className: PropTypes.string,
  imgSrc: PropTypes.string.isRequired,
  imgAlt: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
};
