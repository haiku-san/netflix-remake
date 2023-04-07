import React, { useState, useEffect } from 'react'
import axios from '../../utils/axios'

import Movie from '../Movie/index'

function Row({ title = 'row title', fetchUrl, isTopTen = false }) {
    const [movies, setMovies] = useState([])
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
    })

    const base_url = 'https://image.tmdb.org/t/p/original/'

    useEffect(() => {
        function handleResize() {
            setWindowSize({
                width: window.innerWidth,
            })
        }

        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl)
            setMovies(request.data.results)
            return request
        }
        fetchData()
    }, [fetchUrl])

    useEffect(() => {
        console.log(movies.length)
        const rowSliders = document.querySelectorAll('.row')
        rowSliders.forEach((rowSlider) => {
            const rowSliderStyle = getComputedStyle(rowSlider)
            const itemsPerRow = parseInt(
                rowSliderStyle.getPropertyValue('--items-number')
            )

            const numberOfItems = movies.length
            const numberOfColumns = numberOfItems / itemsPerRow
            let currentSliderIndex = parseInt(
                rowSliderStyle.getPropertyValue('--slider-index')
            )
            rowSlider.style.setProperty('--slider-index', currentSliderIndex)
            if (
                currentSliderIndex !== 0 &&
                currentSliderIndex > numberOfColumns - 1
            ) {
                rowSlider.style.setProperty(
                    '--slider-index',
                    numberOfColumns - 1
                )
            }
        })
    }, [movies, windowSize])

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
            <div className="row__slider-box">
                <button
                    className="previous-button"
                    onClick={(e) => handleSlider(e)}
                ></button>
                <div className="row__slider">
                    <div className="row__posters">
                        {movies.map((movie) => (
                            <Movie
                                className="row__poster"
                                keyValue={movie.id}
                                src={`${base_url}${movie.backdrop_path}`}
                                alt={`${movie.name} cover`}
                            />
                        ))}
                    </div>
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
