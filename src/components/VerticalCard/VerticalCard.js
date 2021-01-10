import React from 'react';
import { Link } from 'react-router-dom';
import cx from 'classnames';
import PropTypes from 'prop-types';

const VerticalCard = ({ className, imgSrc, name, link, width, height }) => (
	<li className={cx('c-vertical-card', className)}>
		<Link to={link}>
			<div className='c-vertical-card__image'>
				<img src={imgSrc} alt={name} width={width} height={height} />
			</div>
			<div className='c-vertical-card__details'>
				<Link to={link} className='c-vertical-card__details__name'>
					{name}
				</Link>
			</div>
		</Link>
	</li>
);

export default VerticalCard;

VerticalCard.propTypes = {
	// eslint-disable-next-line react/require-default-props
	className: PropTypes.string,
	imgSrc: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	link: PropTypes.string.isRequired,
	width: PropTypes.number.isRequired,
	height: PropTypes.number.isRequired,
};
