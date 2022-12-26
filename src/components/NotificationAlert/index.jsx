import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell } from '@fortawesome/free-regular-svg-icons'

const bellIcon = (
    <FontAwesomeIcon icon={faBell} className="notification-bell" size="lg" />
)

function NotificationAlert() {
    return <div>{bellIcon}</div>
}

export default NotificationAlert
