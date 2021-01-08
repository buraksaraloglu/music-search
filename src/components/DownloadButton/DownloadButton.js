import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

import { BiDownload } from 'react-icons/bi';

import './c-download-button.scss';

const DownloadButton = ({ className, playLink }) => (
	// eslint-disable-next-line jsx-a11y/click-events-have-key-events
	<a href={playLink} className={cx('c-download-button', className)} target='_blank' download>
		<BiDownload />
	</a>
);

export default DownloadButton;

DownloadButton.propTypes = {
	// eslint-disable-next-line react/require-default-props
	className: PropTypes.string,
};
