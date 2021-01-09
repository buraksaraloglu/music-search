import React, { useState, createContext, useContext } from 'react';
import PropTypes from 'prop-types';

const PlayerContext = createContext();

const PlayerContextProvider = ({ children }) => {
	const [currentTrack, setCurrentTrack] = useState('');
	const [currentTrackId, setCurrentTrackId] = useState('');

	return (
		<PlayerContext.Provider
			value={{ currentTrack, setCurrentTrack, currentTrackId, setCurrentTrackId }}
		>
			{children}
		</PlayerContext.Provider>
	);
};

const usePlayerContextValue = () => useContext(PlayerContext);

export { PlayerContext, PlayerContextProvider, usePlayerContextValue };

PlayerContextProvider.propTypes = {
	children: PropTypes.node.isRequired,
};
