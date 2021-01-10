import React from 'react';

import VerticalCardContainer from '../../components/VerticalCard/VerticalCardList';
import VerticalCard from '../../components/VerticalCard/VerticalCard';

const VerticalCardList = ({ items, title }) => {
	console.log(items);
	return (
		<div className='row u-margin-top-small u-margin-bottom-medium'>
			<VerticalCardContainer>
				<h2>{title}</h2>
				<div className='c-vertical-card-container__inner'>
					{items.albums !== undefined &&
						items.albums.map((track) => (
							<VerticalCard
								key={track.id}
								imgSrc={track.images[2]}
								width={550}
								height={270}
								name={track.name}
								link={`/album/${track.id}`}
							/>
						))}
				</div>
			</VerticalCardContainer>
		</div>
	);
};

export default VerticalCardList;
