import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

import PlayButton from '../../PlayButton/PlayButton';

import DownloadButton from '../../DownloadButton/DownloadButton';

import { calculateDuration } from '../../../helpers/calculateDuration';

// eslint-disable-next-line object-curly-newline
const TrackVerticalItem = ({
	id,
	className,
	isPlaying,
	trackName,
	trackLink,
	ccUrl,
	ccName,
	duration,
	handlePlay,
}) => {
	const stringDuration = calculateDuration(duration);

	return (
		<li className={cx('c-track-vertical__item', className)}>
			<div className='c-track-vertical__item__left'>
				<PlayButton
					id={id}
					isPlaying={isPlaying}
					handlePlay={handlePlay}
					trackUrl={trackLink}
					className='small-play'
				/>
				<h3
					className='c-track-vertical__item__left__track-name'
					onClick={() => handlePlay(trackLink, id)}
				>
					{trackName}
				</h3>
			</div>
			<div className='c-track-vertical__item__right'>
				<DownloadButton playLink={trackLink} className='small-download' />
				<a href={ccUrl} className='c-licence' target='_blank' rel='noreferrer'>
					{ccName}
				</a>
				<span className='c-duration'>{stringDuration}</span>
			</div>
		</li>
	);
};

export default TrackVerticalItem;

TrackVerticalItem.propTypes = {
	// eslint-disable-next-line react/require-default-props
	className: PropTypes.string,
	trackName: PropTypes.string.isRequired,
	trackLink: PropTypes.string.isRequired,
	ccUrl: PropTypes.string.isRequired,
	ccName: PropTypes.string.isRequired,
	duration: PropTypes.number.isRequired,
};
