const TMDB_API_KEY = process.env.REACT_APP_TMDB_API_KEY

const requests = {
    fetchTrending: `/trending/all/week?api_key=${TMDB_API_KEY}&language=fr-FR`,
    fetchNetflixOriginals: `/discover/tv?api_key=${TMDB_API_KEY}&with_networks=213&language=fr-FR`,
    fetchTopRated: `/movie/top_rated?api_key=${TMDB_API_KEY}&language=fr-FR`,
    fetchActionMovies: `/discover/movie?api_key=${TMDB_API_KEY}&with_genres=28&language=fr-FR`,
    fetchComedyMovies: `/discover/movie?api_key=${TMDB_API_KEY}&with_genres=35&language=fr-FR`,
    fetchHorrorMovies: `/discover/movie?api_key=${TMDB_API_KEY}&with_genres=27&language=fr-FR`,
    fetchRomanceMovies: `/discover/movie?api_key=${TMDB_API_KEY}&with_genres=10749&language=fr-FR`,
    fetchDocumentaries: `/discover/movie?api_key=${TMDB_API_KEY}&with_genres=99&language=fr-FR`,
}

export default requests
