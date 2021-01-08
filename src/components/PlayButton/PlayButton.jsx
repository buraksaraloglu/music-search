import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

import { RiPlayFill } from 'react-icons/ri';

import './c-play-button.scss';

const PlayButton = ({ className }) => (
  // eslint-disable-next-line jsx-a11y/click-events-have-key-events
  <div
    className={cx('c-play-button', className)}
    onClick={(event) => event.preventDefault()}
    role="button"
    tabIndex="0"
  >
    <RiPlayFill />
  </div>
);

export default PlayButton;

PlayButton.propTypes = {
  // eslint-disable-next-line react/require-default-props
  className: PropTypes.string,
};
