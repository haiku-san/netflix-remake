import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import NotificationAlert from '../NotificationAlert/index'
import ProfileButton from '../ProfileButton/index'
import NavLinksMenu from '../NavLinksMenu/index'

import netflixLogo from '../../assets/images/Netflix-logo.png'
import searchIcon from '../../assets/images/searchIcon.png'

import netflixAvatar from '../../assets/images/Netflix-avatar.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faPenToSquare,
    faFaceSmile,
    faUser,
    faCircleQuestion,
} from '@fortawesome/free-regular-svg-icons'
import { faCaretUp } from '@fortawesome/free-solid-svg-icons'

import axios from '../../utils/axios'
import requests from '../../utils/requests'

const penIcon = (
    <FontAwesomeIcon
        icon={faPenToSquare}
        size="lg"
        className="profile__menu-icon"
    />
)

const faceIcon = (
    <FontAwesomeIcon
        icon={faFaceSmile}
        size="lg"
        className="profile__menu-icon"
    />
)

const userIcon = (
    <FontAwesomeIcon icon={faUser} size="lg" className="profile__menu-icon" />
)
const questionIcon = (
    <FontAwesomeIcon
        icon={faCircleQuestion}
        size="lg"
        className="profile__menu-icon"
    />
)
const caretUpIcon = (
    <FontAwesomeIcon
        icon={faCaretUp}
        className="caretUp"
        fixedWidth
        transform="shrink-0 grow-15"
    />
)

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

// const searchIcon = <FontAwesomeIcon icon={faMagnifyingGlass} />

function Header() {
    const [movie1, setMovie1] = useState([])
    const [movie2, setMovie2] = useState([])

    const [opaque, isOpaque] = useState(false)

    const transitionHeader = () => {
        if (window.scrollY > 100) {
            isOpaque(true)
        } else {
            isOpaque(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', transitionHeader)
        return () => window.removeEventListener('scroll', transitionHeader)
    }, [])

    useEffect(() => {
        async function fetchData() {
            const request1 = await axios.get(requests.fetchTopRated)
            const request2 = await axios.get(requests.fetchTopRated)
            setMovie1(
                request1.data.results[
                    Math.floor(Math.random() * request1.data.results.length - 1)
                ]
            )
            setMovie2(
                request2.data.results[
                    Math.floor(Math.random() * request2.data.results.length - 1)
                ]
            )
            return [request1, request2]
        }

        fetchData()
    }, [])

    return (
        <header className={opaque ? 'header is-opaque' : 'header'}>
            <div className="header__logo-container">
                <Link
                    className="header__logo-link"
                    to="/"
                    onClick={() => {
                        window.location.reload(true)
                        window.location.assign('/')
                    }}
                >
                    <img
                        className="header__logo"
                        src={netflixLogo}
                        alt="Netflix Logo"
                    />
                </Link>
            </div>

            <menu className="header__menu">
                <NavLinksMenu />
                <div className="header__right-part">
                    <Link to="#" className="header__icon header__navlink">
                        <img
                            className="header__icon"
                            src={searchIcon}
                            alt="search icon"
                        />
                    </Link>
                    <Link to="#">
                        <h2>DIRECT</h2>
                    </Link>
                    <NotificationAlert>
                        <div className="notification">
                            {caretUpIcon}

                            <ul className="notification__list">
                                <li className="notification__list-element">
                                    <div className="notification__image-container">
                                        <img
                                            src={`https://image.tmdb.org/t/p/original/${movie1?.backdrop_path}`}
                                            alt={`${
                                                movie1?.title ||
                                                movie1?.name ||
                                                movie1?.original_name
                                            } cover`}
                                            className="notification__image"
                                        />
                                    </div>
                                    <div className="notification__content">
                                        <h3>
                                            Top 10 des films en France <br />{' '}
                                            Découvrez les films qui font
                                            l'unanimité
                                        </h3>
                                        <p>Il y a 3 jours</p>
                                    </div>
                                </li>
                                <li className="notification__list-element">
                                    {' '}
                                    <div className="notification__image-container">
                                        <img
                                            src={`https://image.tmdb.org/t/p/original/${movie2?.backdrop_path}`}
                                            alt={`${
                                                movie1?.title ||
                                                movie1?.name ||
                                                movie1?.original_name
                                            } cover`}
                                            className="notification__image"
                                        />
                                    </div>
                                    <div className="notification__content">
                                        <h3>
                                            Ces titres quittent bientôt le
                                            catalogue Netflix, le temps
                                            presse...
                                        </h3>
                                        <p>Il y a 2 semaines</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </NotificationAlert>
                    <ProfileButton>
                        <div className="profile__menu">
                            {caretUpIcon}
                            <ul className="profile__menu-list primary">
                                <Link
                                    to="/"
                                    onClick={() => {
                                        window.location.reload(true)
                                        window.location.assign('/')
                                    }}
                                >
                                    <li className="profile__menu-list-element">
                                        {' '}
                                        <img
                                            src={netflixAvatar}
                                            alt="Netflix avatar"
                                            className="profile__avatar--in-menu"
                                        />
                                        <p>Philippe</p>
                                    </li>
                                </Link>
                                <Link
                                    to="/"
                                    onClick={() => {
                                        window.location.reload(true)
                                        window.location.assign('/')
                                    }}
                                >
                                    <li className="profile__menu-list-element">
                                        {' '}
                                        <img
                                            src={netflixAvatar}
                                            alt="Netflix avatar"
                                            className="profile__avatar--in-menu"
                                        />
                                        <p>Géraldine</p>
                                    </li>
                                </Link>

                                <Link
                                    to="/"
                                    onClick={() => {
                                        window.location.reload(true)
                                        window.location.assign('/')
                                    }}
                                >
                                    <li className="profile__menu-list-element">
                                        {' '}
                                        <img
                                            src={netflixAvatar}
                                            alt="Netflix avatar"
                                            className="profile__avatar--in-menu"
                                        />
                                        <p>Lilou</p>
                                    </li>
                                </Link>
                            </ul>

                            <ul className="profile__menu-list secondary">
                                <li className="profile__menu-list-element">
                                    <div className="profile__menu-icon-container">
                                        {penIcon}
                                    </div>
                                    <p>Gérer les profils</p>
                                </li>
                                <li className="profile__menu-list-element">
                                    <div className="profile__menu-icon-container">
                                        {faceIcon}
                                    </div>

                                    <p>Transférer un profil</p>
                                </li>
                                <li className="profile__menu-list-element">
                                    <div className="profile__menu-icon-container">
                                        {userIcon}
                                    </div>

                                    <p>Compte</p>
                                </li>
                                <li className="profile__menu-list-element">
                                    <div className="profile__menu-icon-container">
                                        {questionIcon}
                                    </div>

                                    <p>Centre d'aide</p>
                                </li>
                            </ul>
                            <div className="profile__menu-divider"></div>
                            <div className="profile__menu-button">
                                <p>Se déconnecter</p>
                            </div>
                        </div>
                    </ProfileButton>
                </div>
            </menu>
        </header>
    )
}

export default Header
