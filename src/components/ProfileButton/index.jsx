import React, { useState } from 'react'
import netflixAvatar from '../../assets/images/Netflix-avatar.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { CSSTransition } from 'react-transition-group'

const caretDownIcon = <FontAwesomeIcon icon={faCaretDown} className="caret" />

function ProfileButton({ children }) {
    const [isOpen, setIsOpen] = useState(false)
    const [profileIsClosed, setProfileIsClosed] = useState(true)

    const [activeMenu, setActiveMenu] = useState('none')

    return (
        <div
            className="profile"
            // onClick={() => {
            //     setActiveMenu('profile')
            //     setIsOpen(!isOpen)
            // }}
            onMouseEnter={() => {
                setActiveMenu('profile')
                setIsOpen(!isOpen)
            }}
            onMouseLeave={() => {
                setActiveMenu('none')
                setIsOpen(!isOpen)
            }}
        >
            <div className="profile__avatar-container">
                <img
                    src={netflixAvatar}
                    alt="Netflix avatar"
                    className="profile__avatar"
                />
                <CSSTransition
                    in={profileIsClosed === false}
                    timeout={100}
                    classNames="caret-open"
                >
                    {caretDownIcon}
                </CSSTransition>
            </div>

            <CSSTransition
                in={activeMenu === 'profile'}
                unmountOnExit
                timeout={200}
                classNames="profile-open"
                onEnter={() => setProfileIsClosed(false)}
                onExited={() => setProfileIsClosed(true)}
            >
                {children}
            </CSSTransition>
        </div>
    )
}

export default ProfileButton
