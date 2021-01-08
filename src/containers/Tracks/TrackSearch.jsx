import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import TrackSearchItem from '../../components/Tracks/TrackSearchItem';

const TrackSearch = ({ trackQuery }) => {
  const [trackSearch, setTrackSearch] = useState('');

  useEffect(() => {
    setTrackSearch(trackQuery);
    return trackSearch;
  }, [trackQuery, trackSearch]);

  // TODO: write a hook to fetch track list.
  const trackSample = [
    {
      id: '1',
      imgSrc: '/src/img/demo-image.jpg',
      imgAlt: 'Image alt',
      width: 500,
      height: 300,
      trackName: 'A Long Long Track Name',
      trackLink: '/asd',
      artistName: 'John Doe',
      artistLink: '/asdg',
      cLicence: 'cc',
    },
    {
      id: '2',
      imgSrc: '/src/img/demo-image.jpg',
      imgAlt: 'Image alt',
      width: 500,
      height: 300,
      trackName: 'Track Name',
      trackLink: '/asd',
      artistName: 'John Doe',
      artistLink: '/asdg',
      cLicence: 'cc',
    },
    {
      id: '3',
      imgSrc: '/src/img/demo-image.jpg',
      imgAlt: 'Image alt',
      width: 500,
      height: 300,
      trackName: 'Track Name',
      trackLink: '/asd',
      artistName: 'John Doe',
      artistLink: '/asdg',
      cLicence: 'cc',
    },
    {
      id: '4',
      imgSrc: '/src/img/demo-image.jpg',
      imgAlt: 'Image alt',
      width: 500,
      height: 300,
      trackName: 'Track Name',
      trackLink: '/asd',
      artistName: 'John Doe',
      artistLink: '/asdg',
      cLicence: 'cc',
    },
    {
      id: '5',
      imgSrc: '/src/img/demo-image.jpg',
      imgAlt: 'Image alt',
      width: 500,
      height: 300,
      trackName: 'Track Name',
      trackLink: '/asd',
      artistName: 'John Doe',
      artistLink: '/asdg',
      cLicence: 'cc',
    },
    {
      id: '6',
      imgSrc: '/src/img/demo-image.jpg',
      imgAlt: 'Image alt',
      width: 500,
      height: 300,
      trackName: 'Track Name',
      trackLink: '/asd',
      artistName: 'John Doe',
      artistLink: '/asdg',
      cLicence: 'cc',
    },
  ];

  return (
    <div className="row u-margin-top-small">
      {trackSample.map((track) => (
        <TrackSearchItem
          key={track.id}
          id={track.id}
          imgSrc={track.imgSrc}
          imgAlt={track.imgAlt}
          width={550}
          height={270}
          trackLink={track.trackLink}
          trackName={track.trackName}
          artistName={track.artistName}
          artistLink={track.artistLink}
          cLicence={track.cLicence}
        />
      ))}
    </div>
  );
};

export default TrackSearch;

TrackSearch.propTypes = {
  trackQuery: PropTypes.string.isRequired,
};
