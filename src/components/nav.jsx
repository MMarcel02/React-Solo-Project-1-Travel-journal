import React from 'react'
import Icon from  "../assets/worldIcon.png"

export default function Nav () {
    return(
        <div className='nav-bar'>
            <img src={Icon} />
            <h2>my travel journal.</h2>
        </div>
    )
}