<script lang="ts">
	import type { PopularMoviesResponse } from 'moviedb-promise/dist/request-types';
	const tmdbPosterPath = 'https://image.tmdb.org/t/p/w500';
	export let movies: PopularMoviesResponse;
</script>

{#if movies.results}
	<div class="popular-movies">
		<i class="fa-solid fa-angle-left btn prev" />
		<i class="fa-solid fa-angle-right btn next" />

		{#each movies.results as movie}
			<div class="movie">
				<img src={tmdbPosterPath + movie.poster_path} alt={movie.title} />
			</div>
		{/each}
	</div>
{/if}

<style lang="scss">
	.popular-movies {
		position: relative;
		margin: 0 auto;
		overflow: hidden;
		white-space: nowrap;
		.btn {
			position: absolute;
			top: 50%;
			transform: translateY(-50%);
			font-size: 50px;
			color: white;
			cursor: pointer;
			transition: all 0.15s ease;
			&.prev {
				left: 0;
			}
			&.next {
				right: 0;
			}
		}
		.btn:hover {
			font-size: 70px;
		}
	}

	.movie {
		display: inline-block;
		margin-right: 10px;
	}

	img {
		height: 300px;
		width: 100%;
		border-radius: 10px;
	}
</style>
