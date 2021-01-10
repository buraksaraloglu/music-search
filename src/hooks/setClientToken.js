// import axios from 'axios';

const setClientToken = () => {
	return new Promise((resolveResponse, rejectResponse) => {
		const responseToken = '1.YnVyYWtzYXJhbG9nbHU=.VLeJw80DMpXMxxgUJWW3Nrj1';
		try {
			// axios
			// 	.post('https://musicdb.jobs.otsimo.com/createClient', {
			// 		email: 'buraksaraloglu1@gmail.com',
			// 	})
			// 	.then((res) => {
			// 		resolveResponse(res.data);
			// 	})
			// 	.catch((error) => {
			// 		rejectResponse(console.error(error));
			// 	});

			if (responseToken.length > 0) {
				resolveResponse(responseToken);
			} else {
				rejectResponse('Token not found.');
			}
		} catch (error) {
			throw new Error(error);
		}
	});
};

export default setClientToken;
