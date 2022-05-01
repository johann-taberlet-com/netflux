<script lang="ts" context="module">
	import { getPopularMovies } from '$lib/tmdbAPI.js';

	const language = 'fr-FR';
	export const load = async () => {
		const popularMovies = await getPopularMovies(1, language);
		return {
			props: {
				popularMovies
			}
		};
	};
</script>

<script lang="ts">
	import MoviesCarousel from '$lib/components/MovieCarousel.svelte';

	import type { PopularMoviesResponse } from 'moviedb-promise/dist/request-types';

	export let popularMovies: PopularMoviesResponse;
</script>

<h1>NETFLUX</h1>

{#if popularMovies.results}
	<h2>POPULAR MOVIES</h2>
	<MoviesCarousel movies={popularMovies} />
{/if}
