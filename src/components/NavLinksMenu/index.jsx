import React, { useState, useEffect } from 'react'
import netflixAvatar from '../../assets/images/Netflix-avatar.png'

import { NavLink } from 'react-router-dom'
import ResponsiveMenu from '../ResponsiveMenu/index'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons'
import {
    faPenToSquare,
    faFaceSmile,
    faUser,
    faCircleQuestion,
} from '@fortawesome/free-regular-svg-icons'

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

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window
    return {
        width,
        height,
    }
}

function NavLinksMenu() {
    const [windowDimensions, setWindowDimensions] = useState(
        getWindowDimensions()
    )

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions())
            console.log(windowDimensions.width)
        }

        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    })

    return (
        <div>
            {' '}
            {(windowDimensions.width > 960 && (
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
            )) || (
                <ResponsiveMenu>
                    <div className="responsive-menu">
                        {caretUpIcon}

                        <ul className="responsive-menu__navlinks-list">
                            <li className="responsive-menu__navlinks-item">
                                <NavLink to="#" className="responsive-navlink">
                                    Accueil
                                </NavLink>
                            </li>
                            <li className="responsive-menu__navlinks-item">
                                <NavLink to="#" className="responsive-navlink">
                                    Séries
                                </NavLink>
                            </li>
                            <li className="responsive-menu__navlinks-item">
                                <NavLink to="#" className="responsive-navlink">
                                    Films
                                </NavLink>
                            </li>
                            <li className="responsive-menu__navlinks-item">
                                <NavLink to="#" className="responsive-navlink">
                                    Nouveautés les plus regardées
                                </NavLink>
                            </li>
                            <li className="responsive-menu__navlinks-item">
                                <NavLink to="#" className="responsive-navlink">
                                    Ma liste
                                </NavLink>
                            </li>
                            <li className="responsive-menu__navlinks-item">
                                <NavLink to="#" className="responsive-navlink">
                                    Explorer par langue
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </ResponsiveMenu>
            )}
        </div>
    )
}

export default NavLinksMenu
