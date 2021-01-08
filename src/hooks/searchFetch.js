/* eslint-disable react-hooks/rules-of-hooks */
import { useState, useEffect } from 'react';
// import axios from 'axios';
import PropTypes from 'prop-types';

import { useTokenContextValue } from '../contexts/TokenContext';
import { useContentContextValue } from '../contexts/ContentContext';

import { findInContext } from './findInContext';

const searchMusic = (query, token) => {
	let response = [
		{
			id: '5f97e4576854a6c6a224b080',
			name: 'What Is Love',
			duration: 212,
			album_id: '5f97e4566854a6c6a224b07e',
			album_name: 'What Is Love',
			artist_id: '5f97e4566854a6c6a224b07a',
			artist_name: 'Melanie Ungar',
			license_ccurl: 'http://creativecommons.org/licenses/by/3.0/',
			url: 'https://musicdn.otsimo.com/12/04/1204669.mp3',
			album_images: [
				'https://musicdn.otsimo.com/12/04/1204663-200.jpg',
				'https://musicdn.otsimo.com/12/04/1204663-400.jpg',
				'https://musicdn.otsimo.com/12/04/1204663-600.jpg',
			],
			added_at: '2020-10-27T09:11:51Z',
		},
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
			id: '5f97e8d86854a6c6a22562f2',
			name: 'Do it for love',
			duration: 122,
			album_id: '5f97e8d86854a6c6a22562f0',
			album_name: 'About you',
			artist_id: '5f97e4d96854a6c6a224bd02',
			artist_name: 'Gigatop',
			license_ccurl: 'http://creativecommons.org/licenses/by-sa/3.0/',
			url: 'https://musicdn.otsimo.com/16/72/1672764.mp3',
			album_images: [
				'https://musicdn.otsimo.com/16/72/1672763-200.jpg',
				'https://musicdn.otsimo.com/16/72/1672763-400.jpg',
				'https://musicdn.otsimo.com/16/72/1672763-600.jpg',
			],
			added_at: '2020-10-27T09:31:04Z',
		},
		{
			id: '5f97f6776854a6c6a226fdeb',
			name: 'Love Her',
			duration: 189,
			album_id: '5f97f6776854a6c6a226fde6',
			album_name: 'Vision',
			artist_id: '5f97f6776854a6c6a226fde4',
			artist_name: 'J Bert',
			license_ccurl: 'http://creativecommons.org/licenses/by/3.0/',
			url: 'https://musicdn.otsimo.com/16/88/1688677.mp3',
			album_images: [
				'https://musicdn.otsimo.com/16/88/1688677-200.jpg',
				'https://musicdn.otsimo.com/16/88/1688677-400.jpg',
				'https://musicdn.otsimo.com/16/88/1688677-600.jpg',
			],
			added_at: '2020-10-27T10:29:11Z',
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
	];
	// try {
	// 	axios
	// 		.get(`https://musicdb.jobs.otsimo.com/api/music/search?q=${query}`, {
	// 			headers: {
	// 				authorization: token,
	// 			},
	// 		})
	// 		.then((res) => {
	// 			response = res.data.musics;
	// 		})
	// 		.catch((error) => {
	// 			throw new Error(error);
	// 		});
	// } catch (error) {
	// 	throw new Error(error);
	// }
	return response;
};

export const searchFetch = (query) => {
	const [response, setResponse] = useState([]);
	const { authToken } = useTokenContextValue();
	const { contentStorage, setContentStorage } = useContentContextValue();

	useEffect(() => {
		if (query && authToken) {
			const cacheCheck = findInContext(query, contentStorage);

			if (cacheCheck === undefined && cacheCheck?.query !== query) {
				let fetchData = searchMusic(query, authToken);
				setContentStorage([...contentStorage, { query: query, data: fetchData }]);
				setResponse({ query: query, data: fetchData });
			} else {
				setResponse(cacheCheck);
			}
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [query]);

	if (query.lenght !== 0) return response;
};

searchMusic.propTypes = {
	query: PropTypes.string.isRequired,
	token: PropTypes.string.isRequired,
};
