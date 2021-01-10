/* eslint-disable react-hooks/rules-of-hooks */
import { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

import { useTokenContextValue } from '../contexts/TokenContext';
import { useContentContextValue } from '../contexts/ContentContext';

import { findInContext } from './findInContext';

const searchArtist = (query, token) => {
	return new Promise((resolveResponse, rejectResponse) => {
		try {
			axios
				.get(`https://musicdb.jobs.otsimo.com/api/artist/${query}`, {
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

export const artistFetch = (query) => {
	const [response, setResponse] = useState([]);
	const { authToken } = useTokenContextValue();
	const { contentStorage, setContentStorage } = useContentContextValue();

	useEffect(() => {
		if (query.length > 0 && authToken !== undefined) {
			const cacheCheck = findInContext(`artist_${query}`, contentStorage);

			if (cacheCheck === undefined || cacheCheck?.query !== `artist_${query}`) {
				searchArtist(query, authToken)
					.then((res) => {
						setContentStorage([...contentStorage, { query: `artist_${query}`, data: res }]);
						setResponse({ query: query, data: res });
					})
					.catch((error) => console.log(error));
			} else {
				setResponse(cacheCheck);
			}
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [query]);

	return response.data;
};

searchArtist.propTypes = {
	query: PropTypes.string.isRequired,
	token: PropTypes.string.isRequired,
};

artistFetch.propTypes = {
	query: PropTypes.string,
};
