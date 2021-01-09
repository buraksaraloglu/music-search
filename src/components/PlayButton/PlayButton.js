import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

import { RiPlayFill, RiPauseLine } from 'react-icons/ri';

import './c-play-button.scss';

const PlayButton = ({ id, className, trackUrl, handlePlay, isPlaying }) => (
	<div className={cx('c-play-button', className)} onClick={() => handlePlay(trackUrl, id)}>
		{isPlaying ? <RiPauseLine /> : <RiPlayFill />}
	</div>
);

export default PlayButton;

PlayButton.propTypes = {
	// eslint-disable-next-line react/require-default-props
	className: PropTypes.string,
	trackUrl: PropTypes.string.isRequired,
};
