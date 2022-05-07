const TMDB_API_BASE_URL = 'https://api.themoviedb.org/3';
const TMDB_API_KEY = import.meta.env.VITE_TMDB_API;

export const sendRequest = async (endpoint: string, params: Map<string, string>): Promise<JSON> => {
	let req = new String(TMDB_API_BASE_URL + endpoint + '?' + `&api_key=${TMDB_API_KEY}`);

	for (let [key, value] of params) {
		req = req.concat(`&${key}=${value}`);
	}

	if (import.meta.env.DEV) {
		console.log(req.toString());
	}
	const response = await (await fetch(req.toString())).json();
	return response;
};
