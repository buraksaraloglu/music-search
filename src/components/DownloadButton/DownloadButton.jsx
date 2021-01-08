import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

import { BiDownload } from 'react-icons/bi';

import './c-download-button.scss';

const DownloadButton = ({ className }) => (
  // eslint-disable-next-line jsx-a11y/click-events-have-key-events
  <div
    className={cx('c-download-button', className)}
    onClick={(event) => event.preventDefault()}
    role="button"
    tabIndex="0"
  >
    <BiDownload />
  </div>
);

export default DownloadButton;

DownloadButton.propTypes = {
  // eslint-disable-next-line react/require-default-props
  className: PropTypes.string,
};
