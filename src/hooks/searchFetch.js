/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

import { useTokenContextValue } from '../contexts/TokenContext';
import { useContentContextValue } from '../contexts/ContentContext';

import { findInContext } from './findInContext';

const searchMusic = (query, token) => {
	try {
		axios
			.get(`https://musicdb.jobs.otsimo.com/api/music/search?q=${query}`, {
				headers: {
					authorization: token,
				},
			})
			.then((res) => {
				return res.data;
			})
			.catch((error) => {
				throw new Error(error);
			});
	} catch (error) {
		throw new Error(error);
	}
};

export const searchFetch = (query) => {
	const { authToken } = useTokenContextValue();
	const { contentStorage, setContentStorage } = useContentContextValue();

	useEffect(() => {
		if (query !== undefined && authToken !== undefined) {
			let response = searchMusic(query, authToken);
			setContentStorage(response.musics);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [query]);
};

searchMusic.propTypes = {
	query: PropTypes.string.isRequired,
	token: PropTypes.string.isRequired,
};
