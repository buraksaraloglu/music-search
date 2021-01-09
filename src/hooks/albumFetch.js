/* eslint-disable react-hooks/rules-of-hooks */
import { useState, useEffect } from 'react';
// import axios from 'axios';
import PropTypes from 'prop-types';

import { useTokenContextValue } from '../contexts/TokenContext';
import { useContentContextValue } from '../contexts/ContentContext';

import { findInContext } from './findInContext';

const searchAlbum = (query, token) => {
	let response = {
		musics: [
			{
				id: '5f97e5206854a6c6a224c7f2',
				name: 'Summer Breeze',
				duration: 210,
				album_id: '5f97e5206854a6c6a224c7f0',
				album_name: 'Summer Breeze (2018) REMASTERED',
				artist_id: '5f97e5206854a6c6a224c7ee',
				artist_name: 'AFTR',
				license_ccurl: 'http://creativecommons.org/licenses/by-sa/3.0/',
				url: 'https://musicdn.otsimo.com/17/17/1717276.mp3',
				album_images: [
					'https://musicdn.otsimo.com/17/17/1717279-200.jpg',
					'https://musicdn.otsimo.com/17/17/1717279-400.jpg',
					'https://musicdn.otsimo.com/17/17/1717279-600.jpg',
				],
				added_at: '2020-10-27T09:15:12Z',
			},
			{
				id: '5f97e7326854a6c6a2251dd5',
				name: 'Good Times (Instrumental)',
				duration: 177,
				album_id: '5f97e5206854a6c6a224c7f0',
				album_name: 'Summer Breeze (2018) REMASTERED',
				artist_id: '5f97e5206854a6c6a224c7ee',
				artist_name: 'AFTR',
				license_ccurl: 'http://creativecommons.org/licenses/by-sa/3.0/',
				url: 'https://musicdn.otsimo.com/17/17/1717282.mp3',
				album_images: [
					'https://musicdn.otsimo.com/17/17/1717279-200.jpg',
					'https://musicdn.otsimo.com/17/17/1717279-400.jpg',
					'https://musicdn.otsimo.com/17/17/1717279-600.jpg',
				],
				added_at: '2020-10-27T09:24:02Z',
			},
			{
				id: '5f97e8686854a6c6a2254b9b',
				name: 'WTF',
				duration: 172,
				album_id: '5f97e5206854a6c6a224c7f0',
				album_name: 'Summer Breeze (2018) REMASTERED',
				artist_id: '5f97e5206854a6c6a224c7ee',
				artist_name: 'AFTR',
				license_ccurl: 'http://creativecommons.org/licenses/by-sa/3.0/',
				url: 'https://musicdn.otsimo.com/17/17/1717287.mp3',
				album_images: [
					'https://musicdn.otsimo.com/17/17/1717279-200.jpg',
					'https://musicdn.otsimo.com/17/17/1717279-400.jpg',
					'https://musicdn.otsimo.com/17/17/1717279-600.jpg',
				],
				added_at: '2020-10-27T09:29:12Z',
			},
			{
				id: '5f97f2766854a6c6a226696c',
				name: 'This Is Not The End',
				duration: 226,
				album_id: '5f97e5206854a6c6a224c7f0',
				album_name: 'Summer Breeze (2018) REMASTERED',
				artist_id: '5f97e5206854a6c6a224c7ee',
				artist_name: 'AFTR',
				license_ccurl: 'http://creativecommons.org/licenses/by-sa/3.0/',
				url: 'https://musicdn.otsimo.com/17/17/1717278.mp3',
				album_images: [
					'https://musicdn.otsimo.com/17/17/1717279-200.jpg',
					'https://musicdn.otsimo.com/17/17/1717279-400.jpg',
					'https://musicdn.otsimo.com/17/17/1717279-600.jpg',
				],
				added_at: '2020-10-27T10:12:06Z',
			},
			{
				id: '5f97f6e76854a6c6a2270d78',
				name: 'My Love',
				duration: 192,
				album_id: '5f97e5206854a6c6a224c7f0',
				album_name: 'Summer Breeze (2018) REMASTERED',
				artist_id: '5f97e5206854a6c6a224c7ee',
				artist_name: 'AFTR',
				license_ccurl: 'http://creativecommons.org/licenses/by-sa/3.0/',
				url: 'https://musicdn.otsimo.com/17/17/1717279.mp3',
				album_images: [
					'https://musicdn.otsimo.com/17/17/1717279-200.jpg',
					'https://musicdn.otsimo.com/17/17/1717279-400.jpg',
					'https://musicdn.otsimo.com/17/17/1717279-600.jpg',
				],
				added_at: '2020-10-27T10:31:03Z',
			},
		],
		album: {
			id: '5f97e5206854a6c6a224c7f0',
			name: 'Summer Breeze (2018) REMASTERED',
			artist_id: '5f97e5206854a6c6a224c7ee',
			images: [
				'https://musicdn.otsimo.com/17/17/1717279-200.jpg',
				'https://musicdn.otsimo.com/17/17/1717279-400.jpg',
				'https://musicdn.otsimo.com/17/17/1717279-600.jpg',
			],
			added_at: '2020-10-27T10:25:21.876Z',
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

export const albumFetch = (query) => {
	const [response, setResponse] = useState([]);
	const { authToken } = useTokenContextValue();
	const { contentStorage, setContentStorage } = useContentContextValue();

	useEffect(() => {
		if (query && authToken) {
			const cacheCheck = findInContext(`album_${query}`, contentStorage);

			if (cacheCheck === undefined || cacheCheck?.query !== `album_${query}`) {
				console.log('fetching');
				let fetchData = searchAlbum(query, authToken);
				setContentStorage([...contentStorage, { query: `album_${query}`, data: fetchData }]);
				setResponse({ query: query, data: fetchData });
			} else {
				console.log('from cache');
				setResponse(cacheCheck);
			}
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [query]);

	if (query.lenght !== 0) return response.data;
};

searchAlbum.propTypes = {
	query: PropTypes.string.isRequired,
	token: PropTypes.string.isRequired,
};

albumFetch.propTypes = {
	query: PropTypes.string,
};
