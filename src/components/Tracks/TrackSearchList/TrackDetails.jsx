import React from 'react';
import cx from 'classnames';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import PlayButton from '../../PlayButton/PlayButton';

// eslint-disable-next-line object-curly-newline
const TrackDetails = ({ className, trackName, trackLink, artistName, artistLink, cLicence }) => (
  <div className={cx('c-track-card__details', className)}>
    <div className="c-track-card__details__left">
      <h3>
        <Link to={trackLink}>{trackName}</Link>
      </h3>
      <div className="c-track-card__details__left__lower">
        <h4>
          <Link to={artistLink}>{artistName}</Link>
        </h4>
        <Link className="c-licence" to={cLicence}>
          {cLicence}
        </Link>
      </div>
    </div>
    <div className="c-track-card__details__right">
      <PlayButton />
    </div>
  </div>
);

export default TrackDetails;

TrackDetails.propTypes = {
  // eslint-disable-next-line react/require-default-props
  className: PropTypes.string,
  trackName: PropTypes.string.isRequired,
  trackLink: PropTypes.string.isRequired,
  artistName: PropTypes.string.isRequired,
  artistLink: PropTypes.string.isRequired,
  cLicence: PropTypes.string.isRequired,
};
