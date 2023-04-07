import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { CSSTransition } from 'react-transition-group'

const caretDownIcon = <FontAwesomeIcon icon={faCaretDown} className="caret" />

function ResponsiveMenuButton({ children }) {
    const [isOpen, setIsOpen] = useState(false)
    const [reponsiveMenuIsClosed, setResponsiveMenuIsClosed] = useState(true)

    const [activeMenu, setActiveMenu] = useState('none')

    return (
        <div
            className="responsive-menu-container"
            // onClick={() => {
            //     setActiveMenu('responsive-menu')
            //     setIsOpen(!isOpen)
            // }}
            onMouseEnter={() => {
                setActiveMenu('responsive-menu')
                setIsOpen(!isOpen)
            }}
            onMouseLeave={() => {
                setActiveMenu('none')
                setIsOpen(!isOpen)
            }}
        >
            <div className="responsive-menu__button-container">
                <p className="responsive-menu__button">Parcourir</p>
                <CSSTransition
                    in={reponsiveMenuIsClosed === false}
                    timeout={100}
                    classNames="caret-open"
                >
                    {caretDownIcon}
                </CSSTransition>
            </div>

            <CSSTransition
                in={activeMenu === 'responsive-menu'}
                unmountOnExit
                timeout={200}
                classNames="responsive-menu-open"
                onEnter={() => setResponsiveMenuIsClosed(false)}
                onExited={() => setResponsiveMenuIsClosed(true)}
            >
                {children}
            </CSSTransition>
        </div>
    )
}

export default ResponsiveMenuButton
