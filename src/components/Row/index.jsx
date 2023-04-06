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

    useEffect(() => {
        const rowSliders = document.querySelectorAll('.row')
        rowSliders.forEach((rowSlider) => {
            const rowSliderStyle = getComputedStyle(rowSlider)
            rowSlider.style.setProperty(
                '--slider-index',
                rowSliderStyle.getPropertyValue('--slider-index')
            )
        })
    }, [])

    function handleSlider(e) {
        const row = e.currentTarget.parentNode
        const rowSlider = e.currentTarget.parentNode.parentNode
        const numberOfItems = movies.length
        const itemsPerRow = parseInt(
            getComputedStyle(row).getPropertyValue('--items-number')
        )
        const numberOfColumns = numberOfItems / itemsPerRow
        const currentSliderIndex = parseInt(
            rowSlider.style.getPropertyValue('--slider-index')
        )
        if (e.target.className === 'previous-button') {
            if (currentSliderIndex - 1 < 0) {
                rowSlider.style.setProperty(
                    '--slider-index',
                    numberOfColumns - 1
                )
            } else {
                rowSlider.style.setProperty(
                    '--slider-index',
                    currentSliderIndex - 1
                )
            }
        } else if (e.target.className === 'next-button') {
            if (currentSliderIndex + 1 > numberOfColumns - 1) {
                rowSlider.style.setProperty('--slider-index', 0)
            } else {
                rowSlider.style.setProperty(
                    '--slider-index',
                    currentSliderIndex + 1
                )
            }
        }
    }

    return (
        <div className={isTopTen ? 'row is-top-ten' : 'row'}>
            <h2>{title}</h2>
            <div className="row__slider">
                <button
                    className="previous-button"
                    onClick={(e) => handleSlider(e)}
                ></button>

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
                <button
                    className="next-button"
                    onClick={(e) => handleSlider(e)}
                ></button>
            </div>
        </div>
    )
}

export default Row
