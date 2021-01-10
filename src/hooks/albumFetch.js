/* eslint-disable react-hooks/rules-of-hooks */
import { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

import { useTokenContextValue } from '../contexts/TokenContext';
import { useContentContextValue } from '../contexts/ContentContext';

import { findInContext } from './findInContext';

const searchAlbum = (query, token) => {
	return new Promise((resolveResponse, rejectResponse) => {
		try {
			axios
				.get(`https://musicdb.jobs.otsimo.com/api/album/${query}`, {
					headers: {
						authorization: token,
					},
				})
				.then((res) => {
					resolveResponse(res.data);
				})
				.catch((error) => {
					rejectResponse(console.error(error));
				});
		} catch (error) {
			throw new Error(error);
		}
	});
};

export const albumFetch = (query) => {
	const [response, setResponse] = useState([]);
	const { authToken } = useTokenContextValue();
	const { contentStorage, setContentStorage } = useContentContextValue();

	useEffect(() => {
		if (query.length > 0 && authToken !== undefined) {
			const cacheCheck = findInContext(`album_${query}`, contentStorage);

			if (cacheCheck === undefined || cacheCheck?.query !== `album_${query}`) {
				searchAlbum(query, authToken)
					.then((res) => {
						setContentStorage([...contentStorage, { query: `album_${query}`, data: res }]);
						setResponse({ query: query, data: res });
					})
					.catch((error) => console.error(error));
			} else {
				setResponse(cacheCheck);
			}
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [query]);

	return response.data;
};

searchAlbum.propTypes = {
	query: PropTypes.string.isRequired,
	token: PropTypes.string.isRequired,
};

albumFetch.propTypes = {
	query: PropTypes.string,
};
