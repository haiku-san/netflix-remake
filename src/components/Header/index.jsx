import React from 'react'
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
import { faCaretUp, faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { CSSTransition } from 'react-transition-group'

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

const caretDownIcon = <FontAwesomeIcon icon={faCaretDown} className="caret" />

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
                    <NotificationAlert />
                    <ProfileButton>
                        <div className="profile__menu">
                            {caretUpIcon}
                            <ul className="profile__menu-list primary">
                                <li className="profile__menu-list-element">
                                    {' '}
                                    <img
                                        src={netflixAvatar}
                                        alt="Netflix avatar"
                                        className="profile__avatar--in-menu"
                                    />
                                    <p>Profile Name</p>
                                </li>
                                <li className="profile__menu-list-element">
                                    {' '}
                                    <img
                                        src={netflixAvatar}
                                        alt="Netflix avatar"
                                        className="profile__avatar--in-menu"
                                    />
                                    <p>Profile Name</p>
                                </li>
                                <li className="profile__menu-list-element">
                                    {' '}
                                    <img
                                        src={netflixAvatar}
                                        alt="Netflix avatar"
                                        className="profile__avatar--in-menu"
                                    />
                                    <p>Profile Name</p>
                                </li>
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
