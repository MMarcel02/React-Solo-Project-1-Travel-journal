import React from 'react'
import LocationIcon from "../assets/locationIcon.png"

export default function ListItem (props) {
    return(
        <>
            <div className='list-item'>
                <img src={`./src/assets/${props.item.imageUrl}`} />
                <div className='text'>
                    <div className='location'>
                        <img src={LocationIcon} />
                        <span className='country'>{props.item.location}</span>
                        <span className='link'><a href={props.item.googleMapsUrl}>View on Google Maps</a></span>
                    </div>
                    <h1>{props.item.title}</h1>
                    <p className='dates'>{props.item.startDate} - {props.item.endDate}</p>
                    <p className='description'>{props.item.description}</p>
                </div>
            </div>
            <hr></hr>
        </>

    )
}