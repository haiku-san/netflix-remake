import React from 'react'
import netflixAvatar from '../../assets/images/Netflix-avatar.png'

function ProfileButton() {
    return (
        <div>
            <img src={netflixAvatar} alt="Netflix avatar" className="avatar" />
        </div>
    )
}

export default ProfileButton
