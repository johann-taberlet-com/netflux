import type { MovieSearchResults } from '$lib/tmdb';
import { sendRequest } from './request';
const TMDB_DEFAULT_LANGUAGE = 'fr-FR';

export const getPopularMovies = async (
	page: number = 1,
	language: string = TMDB_DEFAULT_LANGUAGE
): Promise<MovieSearchResults> => {
	const endpoint = `/movie/popular`;
	const params = new Map<string, string>();

	params.set('page', page.toString());
	params.set('language', language);

	const results = (await sendRequest(endpoint, params)) as unknown as MovieSearchResults;

	return results;
};

export * as TmdbApi from './index';
