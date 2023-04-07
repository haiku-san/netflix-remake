import React from 'react'
import CTA from '../CTA/index'

function HeroSection({ movie }) {
    function truncate(string, n) {
        return string?.length > n ? string.substr(0, n - 1) + '...' : string
    }
    return (
        <section className="hero-section">
            <main>
                <h2>{movie?.title || movie?.name || movie?.original_name}</h2>
                <p>{truncate(movie?.overview, 200)}</p>
                <ul className="hero-section__buttons">
                    <li>
                        <CTA title="Lecture" icon="play" type="primary" />
                    </li>
                    <li>
                        <CTA
                            title="Plus d'infos"
                            icon="info"
                            type="secondary"
                        />
                    </li>
                </ul>
            </main>
            <img
                src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
                alt="placeholder"
            />
            <div className="hero-section__fadeaway"></div>
        </section>
    )
}

export default HeroSection
