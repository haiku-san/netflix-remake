import React, { useState, useEffect } from 'react'
import axios from '../../utils/axios'

function Row({ title = 'row title', fetchUrl, isTopTen = false }) {
    const [movies, setMovies] = useState([])

    const base_url = 'https://image.tmdb.org/t/p/original/'

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl)
            setMovies(request.data.results)
            return request
        }
        fetchData()
    }, [fetchUrl])

    return (
        <div className={isTopTen ? 'row is-top-ten' : 'row'}>
            <h2>{title}</h2>
            <div className="row__posters">
                {movies.map((movie) => (
                    <img
                        className="row__poster"
                        key={movie.id}
                        src={`${base_url}${movie.backdrop_path}`}
                        alt={`${movie.name} cover`}
                    />
                ))}
            </div>
        </div>
    )
}

export default Row
