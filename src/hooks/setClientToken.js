import axios from 'axios';

const setClientToken = () => {
	// const responseToken = '1.YnVyYWtzYXJhbG9nbHU=.VLeJw80DMpXMxxgUJWW3Nrj1';
	return new Promise((resolveResponse, rejectResponse) => {
		try {
			axios
				.post('https://musicdb.jobs.otsimo.com/createClient', {
					email: 'buraksaraloglu1@gmail.com',
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

export default setClientToken;
