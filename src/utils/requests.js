const TMDB_API_KEY = process.env.REACT_APP_TMDB_API_KEY

const requests = {
    fetchTrending: `/trending/all/week?api_key=${TMDB_API_KEY}&language=fr-FR`,
    fetchNetflixOriginals: `/discover/tv?api_key=${TMDB_API_KEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${TMDB_API_KEY}&language=fr-FR`,
    fetchActionMovies: `/discover/movie?api_key=${TMDB_API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${TMDB_API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${TMDB_API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${TMDB_API_KEY}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${TMDB_API_KEY}&with_genres=99`,
}

export default requests
// https://api.themoviedb.org/3/trending/all/week?api_key=92a0dce28809384e310c20f45dbafe9f&language=fr-FR`,
//
