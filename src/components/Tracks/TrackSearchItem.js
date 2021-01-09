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
	playLink,
	isPlaying,
	albumId,
	albumName,
	artistName,
	artistLink,
	ccName,
	ccUrl,
	handlePlay,
}) => (
	<div
		className={cx(
			'col col--lg-4 col col--md-6 col--sm-12 u-margin-top-small u-display-flex',
			className
		)}
		id={id}
	>
		<div className='c-card c-card--theme-blue c-track-card u-flex-basis-100%'>
			<TrackImage imgSrc={imgSrc} imgAlt={imgAlt} width={width} height={height} />
			<DownloadButton playLink={playLink} />
			<TrackDetails
				id={id}
				trackName={trackName}
				playLink={playLink}
				albumId={albumId}
				albumName={albumName}
				artistName={artistName}
				artistLink={artistLink}
				handlePlay={handlePlay}
				ccName={ccName}
				ccUrl={ccUrl}
				isPlaying={isPlaying}
			/>
		</div>
	</div>
);

export default TrackSearchItem;
