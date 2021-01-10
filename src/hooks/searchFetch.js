/* eslint-disable react-hooks/rules-of-hooks */
import { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

import { useTokenContextValue } from '../contexts/TokenContext';
import { useContentContextValue } from '../contexts/ContentContext';

import { findInContext } from './findInContext';

const searchMusic = (query, token) => {
	return new Promise((resolveResponse, rejectResponse) => {
		try {
			axios
				.get(`https://musicdb.jobs.otsimo.com/api/music/search?q=${query}`, {
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

export const searchFetch = (query) => {
	const [response, setResponse] = useState({});
	const { authToken } = useTokenContextValue();
	const { contentStorage, setContentStorage } = useContentContextValue();

	useEffect(() => {
		if (query.length > 0 && authToken !== undefined) {
			const cacheCheck = findInContext(query, contentStorage);
			if (cacheCheck === undefined || cacheCheck?.query !== query) {
				searchMusic(query, authToken)
					.then((res) => {
						setContentStorage([...contentStorage, { query: query, data: res }]);
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

searchMusic.propTypes = {
	query: PropTypes.string.isRequired,
	token: PropTypes.string.isRequired,
};
