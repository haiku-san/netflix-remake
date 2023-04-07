import React from 'react'

function Movie({
    className = 'row__poster',
    keyValue = '1',
    src = '#',
    alt = '',
}) {
    return (
        <article className={className} key={keyValue}>
            <img src={src} alt={alt} />
        </article>
    )
}

export default Movie
