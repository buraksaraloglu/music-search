/* eslint-disable react/prop-types */
import React from 'react';

import cx from 'classnames';
// import PropTypes from 'prop-types';

import TrackImage from './TrackSearchList/TrackImage';
import TrackDetails from './TrackSearchList/TrackDetails';

import DownloadButton from '../DownloadButton/DownloadButton';

import './c-tracksearch-item.scss';

const TrackSearchItem = ({
  className,
  id,
  imgSrc,
  imgAlt,
  width,
  height,
  trackName,
  trackLink,
  artistName,
  artistLink,
  cLicence,
}) => (
  <div
    className={cx(
      'col col--lg-4 col col--md-6 col--sm-12 u-margin-top-small u-display-flex',
      className,
    )}
    id={id}
  >
    <div className="c-card c-card--theme-blue c-track-card u-flex-basis-100%">
      <TrackImage imgSrc={imgSrc} imgAlt={imgAlt} width={width} height={height} />
      <DownloadButton />
      <TrackDetails
        trackName={trackName}
        trackLink={trackLink}
        artistName={artistName}
        artistLink={artistLink}
        cLicence={cLicence}
      />
    </div>
  </div>
);

export default TrackSearchItem;
