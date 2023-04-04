import React from 'react'
import playIcon from '../../assets/images/play-icon.png'
import infoIcon from '../../assets/images/info-icon.png'

function CTA({ title = 'Button', icon = 'play', type = 'primary' }) {
    let CTATypeClass = 'cta-primary'
    let iconTypeClass = 'play-icon'
    let iconImage = playIcon
    if (type === 'secondary') {
        CTATypeClass = 'cta-secondary'
    }
    if (icon === 'info') {
        iconTypeClass = 'info-icon'
        iconImage = infoIcon
    }
    return (
        <button className={`${CTATypeClass} ${iconTypeClass}`}>
            <img src={iconImage} alt={`${icon} icon`} />
            {title}
        </button>
    )
}

export default CTA
