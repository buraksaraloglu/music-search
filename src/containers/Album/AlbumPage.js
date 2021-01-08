import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import AlbumHeader from '../../components/AlbumList/AlbumHeader';
import TrackVerticalList from '../../components/Tracks/TrackVerticalList/TrackVerticalList';
import TrackVerticalItem from '../../components/Tracks/TrackVerticalList/TrackVerticalItem';

const AlbumPage = ({ albumQuery }) => {
  const [albumSearch, setAlbumSearch] = useState('');

  // TODO: write a hook to fetch track list.
  useEffect(() => {
    setAlbumSearch(albumQuery);
    return albumSearch;
  }, [albumQuery, albumSearch]);

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
      duration: '3:36',
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
      duration: '3:36',
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
      duration: '3:36',
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
      duration: '3:36',
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
      duration: '3:36',
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
      duration: '3:36',
    },
  ];

  const albumSample = {
    id: '1',
    name: 'Sample Album Name w/ long tail trial',
    artist_id: 'artistId',
    artistName: 'John Doe',
    images: '/src/img/demo-image.jpg',
    added_at: '08/02/1999',
  };

  return (
    <>
      <div className="row u-margin-top-small">
        <AlbumHeader
          albumName={albumSample.name}
          artistName={albumSample.artistName}
          imgSrc={albumSample.images}
          imgAlt={albumSample.name}
          width={550}
          height={270}
        />
      </div>
      <TrackVerticalList>
        {trackSample.map((track) => (
          <TrackVerticalItem
            key={track.id}
            id={track.id}
            trackName={track.trackName}
            trackLink={track.trackLink}
            cLicence={track.cLicence}
            duration={track.duration}
          />
        ))}
      </TrackVerticalList>
    </>
  );
};

export default AlbumPage;

AlbumPage.propTypes = {
  albumQuery: PropTypes.string.isRequired,
};
