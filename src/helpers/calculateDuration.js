export const calculateDuration = (duration) => {
	const minutes = Math.floor(duration / 60);
	const seconds = duration - minutes * 60;

	return `${minutes}:${seconds}`;
};
