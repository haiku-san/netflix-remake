import React from 'react'
import netflixAvatar from '../assets/images/Netflix-avatar.png'

function LoadingScreen() {
    return (
        <div className="loading-screen">
            <img
                className="netflix-avatar"
                src={netflixAvatar}
                alt="Netflix avatar"
            />
            <div className="loading">
                <div className="bulletouter">
                    <div className="bulletinner"></div>
                    <div className="mask"></div>
                    <div className="dot"></div>
                </div>
            </div>
        </div>
    )
}

export default LoadingScreen
