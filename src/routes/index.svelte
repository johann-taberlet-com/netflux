<script lang="ts">
	import type { MovieSearchResults } from '$lib/tmdb';
	export let popularMovies: MovieSearchResults;
</script>

{#each popularMovies.results as popularMovie}
	<h2>{popularMovie.popularity}</h2>
{/each}
