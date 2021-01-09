import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import AudioPlayer from 'react-h5-audio-player';

import 'react-h5-audio-player/src/styles.scss';
import './c-music-player.scss';

const MusicPlayer = ({ className, trackSrc }) => (
	<div className={cx('c-music-player', className)}>
		<AudioPlayer autoPlay src={trackSrc} />
	</div>
);

export default MusicPlayer;

MusicPlayer.propTypes = {
	className: PropTypes.string,
	trackSrc: PropTypes.string.isRequired,
};
