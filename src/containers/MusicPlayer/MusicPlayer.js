import React from 'react';

import MusicPlayer from '../../components/MusicPlayer/MusicPlayer';

import { usePlayerContextValue } from '../../contexts/PlayerContext';

export const MusicPlayerContainer = () => {
	const { currentTrack } = usePlayerContextValue();

	return currentTrack && <MusicPlayer trackSrc={currentTrack} />;
};
