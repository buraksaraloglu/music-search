import React from 'react';
import cx from 'classnames';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import PlayButton from '../../PlayButton/PlayButton';

import DownloadButton from '../../DownloadButton/DownloadButton';

// eslint-disable-next-line object-curly-newline
const TrackVerticalItem = ({ className, trackName, trackLink, cLicence, duration }) => (
  <li className={cx('c-track-vertical__item', className)}>
    <div className="c-track-vertical__item__left">
      <PlayButton className="small-play" />
      <h3 className="c-track-vertical__item__left__track-name">
        <Link to={trackLink}>{trackName}</Link>
      </h3>
    </div>
    <div className="c-track-vertical__item__right">
      <DownloadButton className="small-download" />
      <Link className="c-licence" to={cLicence}>
        {cLicence}
      </Link>
      <span className="c-duration">{duration}</span>
    </div>
  </li>
);

export default TrackVerticalItem;

TrackVerticalItem.propTypes = {
  // eslint-disable-next-line react/require-default-props
  className: PropTypes.string,
  trackName: PropTypes.string.isRequired,
  trackLink: PropTypes.string.isRequired,
  cLicence: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
};
