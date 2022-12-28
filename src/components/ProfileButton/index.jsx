import React, { useState } from 'react'
import netflixAvatar from '../../assets/images/Netflix-avatar.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faPenToSquare,
    faFaceSmile,
    faUser,
    faCircleQuestion,
} from '@fortawesome/free-regular-svg-icons'
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

function ProfileButton() {
    const [isOpen, setIsOpen] = useState(false)
    const [activeMenu, setActiveMenu] = useState('none')

    return (
        <div
            className="profile"
            // onClick={() => setIsOpen(!isOpen)}
            onMouseEnter={() => {
                setActiveMenu('profile')
                setIsOpen(!isOpen)
            }}
            onMouseLeave={() => {
                setActiveMenu('none')
                setIsOpen(!isOpen)
            }}
            // onMouseEnter={() => setIsOpen(!isOpen)}
            // onMouseLeave={() => setIsOpen(!isOpen)}
        >
            <img
                src={netflixAvatar}
                alt="Netflix avatar"
                className="profile__avatar"
            />
            {/* {isOpen && (
                <CSSTransition
                    in={activeMenu === 'profile'}
                    unmountOnExit
                    timeout={500}
                    classNames="profile-open"
                >
                    <div className="profile__menu">
                        <ul className="profile__menu-list">
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

                        <div className="profile__menu-divider"></div>
                        <ul className="profile__menu-list">
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
                </CSSTransition>
            )} */}
            <CSSTransition
                in={activeMenu === 'profile'}
                unmountOnExit
                timeout={400}
                classNames="profile-open"
            >
                <div className="profile__menu">
                    <ul className="profile__menu-list">
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

                    <div className="profile__menu-divider"></div>
                    <ul className="profile__menu-list">
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
            </CSSTransition>
        </div>
    )
}

export default ProfileButton
