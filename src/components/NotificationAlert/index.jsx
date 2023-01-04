import React, { useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell } from '@fortawesome/free-regular-svg-icons'

const bellIcon = (
    <FontAwesomeIcon icon={faBell} className="notification-bell" size="lg" />
)

function NotificationAlert({ children }) {
    const [isOpen, setIsOpen] = useState(false)

    const [activeMenu, setActiveMenu] = useState('none')

    return (
        <div
            className="notification-container"
            // onClick={() => {
            //     setActiveMenu('notification')
            //     setIsOpen(!isOpen)
            // }}
            onMouseEnter={() => {
                setActiveMenu('notification')
                setIsOpen(!isOpen)
            }}
            onMouseLeave={() => {
                setActiveMenu('none')
                setIsOpen(!isOpen)
            }}
        >
            <div className="notification__button-container">{bellIcon}</div>

            <CSSTransition
                in={activeMenu === 'notification'}
                unmountOnExit
                timeout={200}
                classNames="notification-open"
            >
                {children}
            </CSSTransition>
        </div>
    )
}

export default NotificationAlert
