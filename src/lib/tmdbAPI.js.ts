/* import { variables } from './variables';
export const getPopularMovies = async (page: number) => {
	const response = await fetch(
		`https://api.themoviedb.org/3/movie/popular?api_key=${variables.tmdbAPI}&language=en-US&page=${page}`
	);
	const data = await response.json();
	return data;
};
 */

import { variables } from './variables';
import { MovieDb } from 'moviedb-promise';

export const getPopularMovies = async (page: number, language: string) => {
	const tmdb = new MovieDb(variables.tmdb_API);
	const movies = await tmdb.moviePopular({ page: page, language: language });
	return movies;
};
