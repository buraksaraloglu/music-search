import React from 'react';

// eslint-disable-next-line no-unused-vars
import { useContentContextValue } from '../../contexts/ContentContext';

import TrackSearchItem from '../../components/Tracks/TrackSearchItem';

const TrackSearch = () => {
	// const { contentStorage } = useContentContextValue();

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
		<div className='row u-margin-top-small'>
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
