import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

import { RiPlayFill } from 'react-icons/ri';

import './c-play-button.scss';

const PlayButton = ({ className, trackUrl }) => (
	// eslint-disable-next-line jsx-a11y/click-events-have-key-events
	<a className={cx('c-play-button', className)} href={trackUrl}>
		<RiPlayFill />
	</a>
);

export default PlayButton;

PlayButton.propTypes = {
	// eslint-disable-next-line react/require-default-props
	className: PropTypes.string,
	trackUrl: PropTypes.string.isRequired,
};
