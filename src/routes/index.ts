import { getPopularMovies } from '$lib/api/tmdb/api';

export async function get() {
	// Get Popular Movies
	const popularMovies = await getPopularMovies(2);

	if (popularMovies) {
		return {
			body: { popularMovies }
		};
	}
	return {
		status: 404
	};
}
