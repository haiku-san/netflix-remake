import React from 'react'
import { Link, NavLink } from 'react-router-dom'

import NotificationAlert from '../NotificationAlert/index'
import ProfileButton from '../ProfileButton/index'

import netflixLogo from '../../assets/images/Netflix-logo.png'
import searchIcon from '../../assets/images/searchIcon.png'

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

// const searchIcon = <FontAwesomeIcon icon={faMagnifyingGlass} />

function Header() {
    return (
        <header className="header">
            <div className="header__logo-container">
                <Link className="header__logo-link" to="/">
                    <img
                        className="header__logo"
                        src={netflixLogo}
                        alt="Netflix Logo"
                    />
                </Link>
            </div>

            <menu className="header__menu">
                <ul className="header__menu-navlinks-list">
                    <li className="header__menu-navlinks-item">
                        <NavLink to="#" className="header__navlink">
                            Accueil
                        </NavLink>
                    </li>
                    <li className="header__menu-navlinks-item">
                        <NavLink to="#" className="header__navlink">
                            Séries
                        </NavLink>
                    </li>
                    <li className="header__menu-navlinks-item">
                        <NavLink to="#" className="header__navlink">
                            Films
                        </NavLink>
                    </li>
                    <li className="header__menu-navlinks-item">
                        <NavLink to="#" className="header__navlink">
                            Nouveautés les plus regardées
                        </NavLink>
                    </li>
                    <li className="header__menu-navlinks-item">
                        <NavLink to="#" className="header__navlink">
                            Ma liste
                        </NavLink>
                    </li>
                    <li className="header__menu-navlinks-item">
                        <NavLink to="#" className="header__navlink">
                            Explorer par langue
                        </NavLink>
                    </li>
                </ul>
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
                    <NotificationAlert />
                    <ProfileButton />
                </div>
            </menu>
        </header>
    )
}

export default Header
