import React from 'react';
import cx from 'classnames';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import PlayButton from '../../PlayButton/PlayButton';

// eslint-disable-next-line object-curly-newline
const TrackDetails = ({
	id,
	className,
	trackName,
	playLink,
	albumId,
	albumName,
	artistName,
	artistLink,
	ccName,
	ccUrl,
	handlePlay,
	isPlaying,
}) => (
	<div className={cx('c-track-card__details', className)}>
		<div className='c-track-card__details__left'>
			<h3>
				<Link to={`/album/${albumName}?=${albumId}`}>{trackName}</Link>
			</h3>
			<div className='c-track-card__details__left__lower'>
				<h4>
					<Link to={artistLink}>{artistName}</Link>
				</h4>
				<a className='c-licence' href={ccUrl} rel='noreferrer' target='_blank'>
					{ccName}
				</a>
			</div>
		</div>
		<div className='c-track-card__details__right'>
			<PlayButton id={id} isPlaying={isPlaying} handlePlay={handlePlay} trackUrl={playLink} />
		</div>
	</div>
);

export default TrackDetails;

TrackDetails.propTypes = {
	className: PropTypes.string,
	trackLink: PropTypes.string,
	id: PropTypes.string.isRequired,
	trackName: PropTypes.string.isRequired,
	artistName: PropTypes.string.isRequired,
	artistLink: PropTypes.string.isRequired,
	ccName: PropTypes.string.isRequired,
	ccUrl: PropTypes.string.isRequired,
};
