import React, { useState, useEffect } from 'react'
import HeroSection from '../components/HeroSection'
import axios from '../utils/axios'
import requests from '../utils/requests'
import Row from '../components/Row'

function Home() {
    const [movie, setMovie] = useState([])

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals)
            setMovie(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length - 1)
                ]
            )
            return request
        }

        fetchData()
    }, [])
    return (
        <div className="home-page">
            <HeroSection movie={movie} />
            <Row
                title="Seulement sur Netflix"
                fetchUrl={requests.fetchNetflixOriginals}
                isTopTen={false}
            />
            <Row
                title="Populaires en ce moment"
                fetchUrl={requests.fetchTrending}
                isTopTen={false}
            />
            <Row
                title="Films primés"
                fetchUrl={requests.fetchTopRated}
                isTopTen={false}
            />

            <img
                src="https://dummyimage.com/1920x1080/062347/ffffff.png&text=Placeholder"
                alt="placeholder"
            />
        </div>
    )
}

export default Home
