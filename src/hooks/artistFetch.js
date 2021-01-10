/* eslint-disable react-hooks/rules-of-hooks */
import { useState, useEffect } from 'react';
// import axios from 'axios';
import PropTypes from 'prop-types';

import { useTokenContextValue } from '../contexts/TokenContext';
import { useContentContextValue } from '../contexts/ContentContext';

import { findInContext } from './findInContext';

const searchArtist = (query, token) => {
	let response = {
		musics: [
			{
				id: '5f97e5076854a6c6a224c435',
				name: 'for love',
				duration: 219,
				album_id: '5f97e5076854a6c6a224c433',
				album_name: 'For Love...',
				artist_id: '5f97e5076854a6c6a224c431',
				artist_name: 'Chris Wordman',
				license_ccurl: 'http://creativecommons.org/licenses/by/3.0/',
				url: 'https://musicdn.otsimo.com/17/43/1743130.mp3',
				album_images: [
					'https://musicdn.otsimo.com/17/43/1743130-200.jpg',
					'https://musicdn.otsimo.com/17/43/1743130-400.jpg',
					'https://musicdn.otsimo.com/17/43/1743130-600.jpg',
				],
				added_at: '2020-10-27T09:14:47Z',
			},
			{
				id: '5f97e5316854a6c6a224cc82',
				name: 'No Vampire is Dead',
				duration: 246,
				album_id: '5f97e5316854a6c6a224cc7f',
				album_name: 'No Vampire is Dead',
				artist_id: '5f97e5076854a6c6a224c431',
				artist_name: 'Chris Wordman',
				license_ccurl: 'http://creativecommons.org/licenses/by/3.0/',
				url: 'https://musicdn.otsimo.com/16/83/1683421.mp3',
				album_images: [
					'https://musicdn.otsimo.com/16/83/1683424-200.jpg',
					'https://musicdn.otsimo.com/16/83/1683424-400.jpg',
					'https://musicdn.otsimo.com/16/83/1683424-600.jpg',
				],
				added_at: '2020-10-27T09:15:29Z',
			},
			{
				id: '5f97e8db6854a6c6a2256357',
				name: 'Wild Summer',
				duration: 275,
				album_id: '5f97e5316854a6c6a224cc7f',
				album_name: 'No Vampire is Dead',
				artist_id: '5f97e5076854a6c6a224c431',
				artist_name: 'Chris Wordman',
				license_ccurl: 'http://creativecommons.org/licenses/by/3.0/',
				url: 'https://musicdn.otsimo.com/16/83/1683419.mp3',
				album_images: [
					'https://musicdn.otsimo.com/16/83/1683424-200.jpg',
					'https://musicdn.otsimo.com/16/83/1683424-400.jpg',
					'https://musicdn.otsimo.com/16/83/1683424-600.jpg',
				],
				added_at: '2020-10-27T09:31:07Z',
			},
			{
				id: '5f97eff66854a6c6a2260a50',
				name: 'Run (instrumental)',
				duration: 202,
				album_id: '5f97eff66854a6c6a2260a4e',
				album_name: "Edgar's tear",
				artist_id: '5f97e5076854a6c6a224c431',
				artist_name: 'Chris Wordman',
				license_ccurl: 'http://creativecommons.org/licenses/by/3.0/',
				url: 'https://musicdn.otsimo.com/16/60/1660521.mp3',
				album_images: [
					'https://musicdn.otsimo.com/16/60/1660513-200.jpg',
					'https://musicdn.otsimo.com/16/60/1660513-400.jpg',
					'https://musicdn.otsimo.com/16/60/1660513-600.jpg',
				],
				added_at: '2020-10-27T10:01:26Z',
			},
			{
				id: '5f97f18b6854a6c6a2264947',
				name: 'All or Nothing',
				duration: 248,
				album_id: '5f97e5316854a6c6a224cc7f',
				album_name: 'No Vampire is Dead',
				artist_id: '5f97e5076854a6c6a224c431',
				artist_name: 'Chris Wordman',
				license_ccurl: 'http://creativecommons.org/licenses/by/3.0/',
				url: 'https://musicdn.otsimo.com/16/83/1683424.mp3',
				album_images: [
					'https://musicdn.otsimo.com/16/83/1683424-200.jpg',
					'https://musicdn.otsimo.com/16/83/1683424-400.jpg',
					'https://musicdn.otsimo.com/16/83/1683424-600.jpg',
				],
				added_at: '2020-10-27T10:08:11Z',
			},
			{
				id: '5f97f7ba6854a6c6a2272cdf',
				name: 'Goodbye',
				duration: 260,
				album_id: '5f97eff66854a6c6a2260a4e',
				album_name: "Edgar's tear",
				artist_id: '5f97e5076854a6c6a224c431',
				artist_name: 'Chris Wordman',
				license_ccurl: 'http://creativecommons.org/licenses/by/3.0/',
				url: 'https://musicdn.otsimo.com/16/60/1660513.mp3',
				album_images: [
					'https://musicdn.otsimo.com/16/60/1660513-200.jpg',
					'https://musicdn.otsimo.com/16/60/1660513-400.jpg',
					'https://musicdn.otsimo.com/16/60/1660513-600.jpg',
				],
				added_at: '2020-10-27T10:34:34Z',
			},
		],
		albums: [
			{
				id: '5f97e5076854a6c6a224c433',
				name: 'For Love...',
				artist_id: '5f97e5076854a6c6a224c431',
				images: [
					'https://musicdn.otsimo.com/17/43/1743130-200.jpg',
					'https://musicdn.otsimo.com/17/43/1743130-400.jpg',
					'https://musicdn.otsimo.com/17/43/1743130-600.jpg',
				],
				added_at: '2020-10-27T10:25:21.876Z',
			},
			{
				id: '5f97e5316854a6c6a224cc7f',
				name: 'No Vampire is Dead',
				artist_id: '5f97e5076854a6c6a224c431',
				images: [
					'https://musicdn.otsimo.com/16/83/1683424-200.jpg',
					'https://musicdn.otsimo.com/16/83/1683424-400.jpg',
					'https://musicdn.otsimo.com/16/83/1683424-600.jpg',
				],
				added_at: '2020-10-27T10:25:21.876Z',
			},
			{
				id: '5f97eff66854a6c6a2260a4e',
				name: "Edgar's tear",
				artist_id: '5f97e5076854a6c6a224c431',
				images: [
					'https://musicdn.otsimo.com/16/60/1660513-200.jpg',
					'https://musicdn.otsimo.com/16/60/1660513-400.jpg',
					'https://musicdn.otsimo.com/16/60/1660513-600.jpg',
				],
				added_at: '2020-10-27T10:25:21.876Z',
			},
		],
		artist: {
			name: 'Chris Wordman',
			id: '5f97e5076854a6c6a224c431',
		},
	};
	// try {
	// 	axios
	// 		.get(`https://musicdb.jobs.otsimo.com/api/album/${query}`, {
	// 			headers: {
	// 				authorization: token,
	// 			},
	// 		})
	// 		.then((res) => {
	// 			response = res.data;
	// 		})
	// 		.catch((error) => {
	// 			throw new Error(error);
	// 		});
	// } catch (error) {
	// 	throw new Error(error);
	// }

	return response;
};

export const artistFetch = (query) => {
	const [response, setResponse] = useState([]);
	const { authToken } = useTokenContextValue();
	const { contentStorage, setContentStorage } = useContentContextValue();

	useEffect(() => {
		if (query && authToken) {
			const cacheCheck = findInContext(`artist_${query}`, contentStorage);

			if (cacheCheck === undefined || cacheCheck?.query !== `artist_${query}`) {
				let fetchData = searchArtist(query, authToken);
				setContentStorage([...contentStorage, { query: `artist_${query}`, data: fetchData }]);
				setResponse({ query: query, data: fetchData });
			} else {
				setResponse(cacheCheck);
			}
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [query]);

	if (query.lenght !== 0) return response.data;
};

searchArtist.propTypes = {
	query: PropTypes.string.isRequired,
	token: PropTypes.string.isRequired,
};

artistFetch.propTypes = {
	query: PropTypes.string,
};
