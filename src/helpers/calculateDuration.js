export const calculateDuration = (duration) => {
	const minutes = Math.floor(duration / 60);
	let seconds = duration - minutes * 60;

	if (seconds < 10) {
		seconds = `0${seconds}`;
	}

	return `${minutes}:${seconds}`;
};
